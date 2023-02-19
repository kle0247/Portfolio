import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Sidebar = () => {
    return (
        <div>
            <img
                src='/KL.jpg'
                alt='profile pic'
                className='object-cover w-32 h-32 mx-auto rounded-full md:w-32 md:h-32 lg:w-full lg:h-full'
            />
            <h3 className='my-4 text-xl font-medium tracking-wide md:text-xl lg:text-3xl'>
                <span>
                    Karolyn Le
                </span>
            </h3>
            <p>
                Software Engineer
            </p>
            <div className='flex justify-around my-5 text-violet-500'>
                <a href='https://github.com/kle0247'>
                    <AiFillGithub className='w-12 h-12' />
                </a>
                <a href='https://www.linkedin.com/in/karolyn-le/'>
                    <AiFillLinkedin className='w-12 h-12' />
                </a>
            </div>
        </div>
    )
};

export default Sidebar;