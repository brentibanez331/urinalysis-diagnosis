"use client";

import React, { useState } from 'react'
import axios from 'axios';


export default function InputField() {
    const [data, setData] = useState<PredictionData>();
    const [post, setPost] = useState({
        age: '',
        gender: '',
        color: '',
        transparency: '',
        phlevel: '',
        gravity: '',
        glucose: '',
        protein: '',
        epithcells: '',
        mucous: '',
        urates: '',
        bacteria: ''
    })

    interface PredictionData{
        prediction: number[];
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setPost({ ...post, [e.target.name]: e.target.value });
        console.log(post);
    }

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     makePostRequest();
    // };

    const makePostRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const endpointUrl = 'https://us-central1-urinalysis-416012.cloudfunctions.net/predict';

        try {
            const postData = {
                age: post.age,
                gender: post.gender,
                color: post.color,
                transparency: post.transparency,
                phlevel: post.phlevel,
                gravity: post.gravity,
                glucose: post.glucose,
                protein: post.protein,
                epithcells: post.epithcells,
                mucous: post.mucous,
                urates: post.urates,
                bacteria: post.bacteria
            };

            const response = await axios.post(endpointUrl, postData)

            if (response.status === 200) {
                setData(response.data);
                alert('Request success with status');
            } else {
                alert('Request failed with status: ' + response.status);
            }
        } catch (error) {
            console.error('Error making request:', error);
            alert('Error making request');
        }

    }

    return (
        <div className="mx-80 mt-10 sm:mx-20 md:mx-20 xl:mx-80 sm-2:mx-10 sm-3:mx-2.5">
            <div>
                <h1 className='text-5xl sm-3:text-4xl'>Urinalysis Test Diagnosis</h1>
                <p className='my-1.5 sm-3:text-sm'><strong>Disclaimer:</strong> This model is only 94% accurate. Do not consider this as an official urinalysis test. If you are experiencing any symptoms of UTI, please see a registered doctor.</p>
            </div>
            <form onSubmit={makePostRequest}>
                <div className="">
                    <div className="mt-8 grid gap-6 mb-3 md:grid-cols-4">
                        <div>
                            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Age</label>
                            <input type="text" id="age" name="age" onChange={handleInput} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0-100" required />
                        </div>
                        <div>
                            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Sex</label>
                            <select id="gender" name="gender" onChange={handleInput} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">-- Select Option --</option>
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="mt-3 grid gap-4 mb-3 md:grid-cols-4">
                        <div>
                            <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900">Urine Color</label>
                            <select id="color" name="color" onChange={handleInput} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">-- Select Option --</option>
                                <option value="0">Light Yellow</option>
                                <option value="1">Straw</option>
                                <option value="2">Amber</option>
                                <option value="3">Brown</option>
                                <option value="4">Yellow</option>
                                <option value="5">Dark Yellow</option>
                                <option value="6">Reddish Yellow</option>
                                <option value="7">Reddish</option>
                                <option value="8">Light Red</option>
                                <option value="9">Red</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="transparency" className="block mb-2 text-sm font-medium text-gray-900">Transparency</label>
                            <select id="transparency" name="transparency" onChange={handleInput} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">-- Select Option --</option>
                                <option value="0">Clear</option>
                                <option value="1">Slightly Hazy</option>
                                <option value="2">Hazy</option>
                                <option value="3">Cloudy</option>
                                <option value="4">Turbid</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="phlevel" className="block mb-2 text-sm font-medium text-gray-900">pH Level</label>
                            <input type="number" name="phlevel" id="phlevel" onChange={handleInput} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="4-8" required />
                        </div>
                        <div>
                            <label htmlFor="gravity" className="block mb-2 text-sm font-medium text-gray-900">Specific Gravity</label>
                            <input type="text" name="gravity" id="gravity" onChange={handleInput} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label htmlFor="glucose" className="block mb-2 text-sm font-medium text-gray-900">Glucose</label>
                            <select id="glucose" name="glucose" onChange={handleInput} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">-- Select Option --</option>
                                <option value="0">NEGATIVE</option>
                                <option value="1">TRACE</option>
                                <option value="2">1+</option>
                                <option value="3">2+</option>
                                <option value="4">3+</option>
                                <option value="5">4+</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="protein" className="block mb-2 text-sm font-medium text-gray-900">Protein</label>
                            <select id="protein" name="protein" onChange={handleInput} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">-- Select Option --</option>
                                <option value="0">NEGATIVE</option>
                                <option value="1">TRACE</option>
                                <option value="2">1+</option>
                                <option value="3">2+</option>
                                <option value="4">3+</option>
                            </select>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="mt-5 grid gap-4 mb-4 md:grid-cols-4">
                        <div>
                            <label htmlFor="epithcells" className="block mb-2 text-sm font-medium text-gray-900">Epithelial Cells</label>
                            <select id="epithcells" name="epithcells" onChange={handleInput} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">-- Select Option --</option>
                                <option value="0">None Seen</option>
                                <option value="1">Rare</option>
                                <option value="2">Few</option>
                                <option value="3">Occasional</option>
                                <option value="4">Moderate</option>
                                <option value="5">Loaded</option>
                                <option value="6">Plenty</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="mucous" className="block mb-2 text-sm font-medium text-gray-900">Mucous Threads</label>
                            <select id="mucous" name="mucous" onChange={handleInput} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">-- Select Option --</option>
                                <option value="0">None Seen</option>
                                <option value="1">Rare</option>
                                <option value="2">Few</option>
                                <option value="3">Occasional</option>
                                <option value="4">Moderate</option>
                                <option value="5">Loaded</option>
                                <option value="6">Plenty</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="urates" className="block mb-2 text-sm font-medium text-gray-900">Amorphous Urates</label>
                            <select id="urates" name="urates" onChange={handleInput} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">-- Select Option --</option>
                                <option value="0">None Seen</option>
                                <option value="1">Rare</option>
                                <option value="2">Few</option>
                                <option value="3">Occasional</option>
                                <option value="4">Moderate</option>
                                <option value="5">Loaded</option>
                                <option value="6">Plenty</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="bacteria" className="block mb-2 text-sm font-medium text-gray-900">Bacteria</label>
                            <select id="bacteria" name="bacteria" onChange={handleInput} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">-- Select Option --</option>
                                <option value="0">None Seen</option>
                                <option value="1">Rare</option>
                                <option value="2">Few</option>
                                <option value="3">Occasional</option>
                                <option value="4">Moderate</option>
                                <option value="5">Loaded</option>
                                <option value="6">Plenty</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* This button should randomize the values */}
                {/* <button type="button" className="transition ease-in-out duration-300 border border-blue-500 hover:text-white mr-3.5 text-black hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:hover:bg-blue-700">Randomize</button> */}

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

            <div className='my-5 flex'>
                <h1 className='mr-3.5 text-lg'>Result:</h1>
                {data && 
                <pre className='text-lg'>{data.prediction}</pre>}
            </div>
            <hr></hr>
            <div className='my-20'>
                <p className='my-1.5 text-black text-center sm-3:text-sm'>The model is trained from data taken in a local clinic in Northern Mindanao, Philippines. For more information, you can check out the data source <a className='underline' href='https://www.kaggle.com/datasets/avarice02/urinalysis-test-results'>HERE</a>.</p>
            </div>
        </div>

    );
}