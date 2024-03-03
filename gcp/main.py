from google.cloud import storage
from sklearn.linear_model import LogisticRegression
import h5py
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import cross_origin, CORS

app = Flask(__name__)
CORS(app)

BUCKET_NAME = "znb-tf-linear-model"
class_names = ["NEGATIVE", "POSITIVE"]


def load_coefficients(classifier, filename):
    """Attach the saved coefficients to a linear model."""
    with h5py.File(filename, 'r') as hf:
        coef = hf['coef'][:]
        intercept = hf['intercept'][:]
        classes = hf['classes'][:]
    classifier.coef_ = coef
    classifier.intercept_ = intercept
    classifier.classes_ = classes

def download_blob(bucket_name, source_blob_name, destination_file_name):
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(source_blob_name)
    blob.download_to_filename(destination_file_name)

download_blob(
            BUCKET_NAME,
            "models/urinalysis.h5",
            "/tmp/urinalysis.h5"
        )

lr = LogisticRegression()
load_coefficients(lr, "/tmp/urinalysis.h5")

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict(request):
    print("HELLO WORLD")
    data = request.json
    values = list(data.values())

    data = np.array(values, dtype=float).reshape(1, -1)
    pred = lr.predict(data)
    return jsonify({"prediction" : class_names[pred[0]]})


if __name__ == '__main__':
    app.run(debug=True)
