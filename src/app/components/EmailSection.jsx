"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";


const EmailSection = () => {

    const [emailSubmitted, setEmailSubmited] = useState(false);

    const handleSubmit = async (e) => {
        e.pregentDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(data);
        const endPoint = '/api/send';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }

        const response = await fetch(endPoint, options);
        const resData = await response.json();
        console.log(resData);


        if (response.status === 'success') {
            console.log('Email sent!');
            setEmailSubmited(true);
        }
    }

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='bg-gradient-to-r from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg top-3/4 absolute -left-4 transform -translate-x-1/2 -translate-1/2' />
            <div className='bg-gradient-to-r from-secondary-600 to-transparent rounded-full h-80 w-80 z-0 blur-lg top-1/4 absolute -right-4 transform -translate-x-1/2 -translate-1/2' />
            <div className='z-10'></div>
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
                    <Link href="" className='rounded-full bg-gradient-to-t hover:from-primary-400 hover:bg-secondary-600'><FaGithub className='text-5xl' /></Link>
                    <Link href="" className='hover:text-[#0a67c3]'><FaLinkedin className='text-5xl' /></Link>

                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label
                            htmlFor="email"
                            className='text-white block mb-2 text-sm font-medium'>
                            Your Email
                        </label>
                        <input
                            name='email'
                            type="email"
                            id='email'
                            className='bg-[#33353F] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            required
                            placeholder='example@gmail.com'
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor="subject"
                            className='text-white block mb-2 text-sm font-medium'>
                            Subject
                        </label>
                        <input
                            name='subject'
                            type="text"
                            id='subject'
                            className='bg-[#33353F] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            required
                            placeholder='I have a propposal for you!'
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor="message"
                            className='text-white block text-sm font-medium'>
                            Message
                        </label>
                        <textarea
                            name="message"
                            id='email'
                            className='bg-[#33353F] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            required
                            placeholder="Let 's talk aobut . . ."
                        />

                    </div>
                    <button
                        type='submit'
                        className='bg-gradient-to-r from-primary-400 to-secondary-600 text-white font-medium rounded-lg py-2.5 mt-4 w-60'>
                        Send
                    </button>
                    {
                        emailSubmitted && (
                            <p className='text-green-500 text-sm mt-2'>
                                Email sent successfully!
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection