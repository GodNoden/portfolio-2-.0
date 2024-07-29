import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";


const EmailSection = () => {
    return (
        <section
            className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>
                    Let's Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I'm always looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I'll
                    try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <a href="" className='rounded-full bg-gradient-to-t hover:from-purple-400 hover:bg-pink-600'><FaGithub className='text-5xl' /></a>
                    <a href="" className='hover:text-[#0a67c3]'><FaLinkedin className='text-5xl' /></a>

                </div>
            </div>
        </section>
    )
}

export default EmailSection