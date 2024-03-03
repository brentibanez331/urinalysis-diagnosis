import styles from './nav.module.css';

export default function Navbar({
    backgroundColor, 
    fontSize,
}:{
    backgroundColor: string,
    fontSize: number
}) {
    return (
        <nav className="h-12 w-full xl:px-40 lg:px-20 md:px-20 sm:px-20 sm-2:px-10 sm-3:px-2.5 border-y bg-white flex justify-between items-center shadow">
            <div><a href="#" className='font-bold text-3xl'>UTD</a></div>
            <div>
                <ul className='flex'>
                    <li className='transition ease-in-out duration-150 hover:opacity-50'><a href="https://github.com/brentibanez331/urinalysis-ph" target="_blank">Github</a></li>
                    <li className="sm-3:ml-2 sm-2:ml-3 md:ml-10 transition ease-in-out duration-150 hover:opacity-50"><a href="https://www.kaggle.com/datasets/avarice02/urinalysis-test-results" target="_blank">Dataset</a></li>
                    <li className="sm-3:ml-2 sm-2:ml-3 md:ml-10 transition ease-in-out duration-150 hover:opacity-50"><a href="https://www.linkedin.com/in/renibanez/" target="_blank">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    );
}