import styles from './nav.module.css';

export default function Navbar({
    backgroundColor, 
    fontSize,
}:{
    backgroundColor: string,
    fontSize: number
}) {
    return (
        <nav className="h-12 w-full px-40 border-y bg-white flex justify-between items-center shadow">
            <div><a href="#" className='font-bold text-3xl'>UTD</a></div>
            <div>
                <ul className='flex'>
                    <li className='transition ease-in-out duration-150 hover:opacity-50'><a href="" target="_blank">Github</a></li>
                    <li className="ml-10 transition ease-in-out duration-150 hover:opacity-50"><a href="https://www.kaggle.com/datasets/avarice02/urinalysis-test-results" target="_blank">Dataset</a></li>
                    <li className="ml-10 transition ease-in-out duration-150 hover:opacity-50"><a href="https://www.linkedin.com/in/renibanez/" target="_blank">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    );
}