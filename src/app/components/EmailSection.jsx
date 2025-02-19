import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";


const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
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
                    <Link href="" className='rounded-full bg-gradient-to-t hover:from-purple-400 hover:bg-pink-600'><FaGithub className='text-5xl' /></Link>
                    <Link href="" className='hover:text-[#0a67c3]'><FaLinkedin className='text-5xl' /></Link>

                </div>
            </div>
            <div>
                <form className="flex flex-col">
                    <div className='mb-6'>//email
                        <label
                            htmlFor="email"
                            className='text-white block mb-2 text-sm font-medium'>
                            Your Email
                        </label>
                        <input
                            type="email"
                            id='email'
                            className='bg-[#33353F] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            required
                            placeholder='example@gmail.com'
                        />
                    </div>
                    <div className='mb-6'>//subject
                        <label
                            htmlFor="subject"
                            className='text-white block mb-2 text-sm font-medium'>
                            Subject
                        </label>
                        <input
                            type="text"
                            id='subject'
                            className='bg-[#33353F] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            required
                            placeholder='example@gmail.com'
                        />
                    </div>
                    <div className='mb-6'>//topic
                        <label htmlFor="email" className='text-white block text-sm font-medium'>
                            Your Email
                        </label>
                        <input
                            type="email"
                            id='email'
                            className='bg-[#33353F] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            required
                            placeholder='example@gmail.com'
                        />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EmailSection