'use client'
import React, { useState } from 'react'
// import Arrow from '../../Images/Arrow.svg'
import Image from 'next/image'
import emailjs from 'emailjs-com';
import { AiOutlineUp } from 'react-icons/ai'
import Link from 'next/link';

function Contacts() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState('Send')
    const [sent, setSent] = useState('')


    async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
        try {
            e.preventDefault();
            const formElement = e.target as HTMLFormElement
            setLoading('Sending...')
            await emailjs.sendForm(process.env.SERVICE_ID!, process.env.TEMPLATE_ID!, formElement, 'zsiK0xqbTMvXz4UCQ')
            setEmail("")
            setMessage("")
            setName("")
            setSent('sent')
            setLoading('Send')
            console.log(e.target)
            console.log('success')
        } catch (e) {
            console.log(e)
            setSent('failed')
            setLoading('Send')
        }
    }
    function updateText(action: string, value: string) {
        switch (action) {
            case "EMAIL":
                setEmail(value.toLowerCase().replace(/[^a-zA-Z0-9@.]/g, ''))
                break;
            case "MESSAGE":
                setMessage(value)
                break
            case "NAME":
                setName(value)
                break;
        }
    }


    return (
        <div className={`md:z-10 h-full pl-6 pr-3 pt-20 md:pt-8 justify-center  text-white-50 font-poppins`}>
            <h1 className="text-3xl md:pl-56 md:text-8xl"><span className="text-primary-purple">L</span>et&apos;s <span className="text-primary-purple">C</span>onnect</h1>
            <p className="text-sm pt-2 md:pl-56 md:w-4/5 md:pt-4">I&apos;d love to hear about what you&apos;re working on and how I could help. I&apos;m currently looking for a new role and open to opportunities in the domain of web development. I&apos;m also open to discussing ideas and doing a project together.
            </p>
            <p className="text-sm pt-2 md:pl-56 md:w-4/5 md:pt-4">Feel free to drop a message :)
            </p>

            <form className=" mt-3 flex flex-col gap-y-3" onSubmit={onSubmitHandler}>


                <input required value={name} name="name" className=" z-10 md:ml-56 md:pl-4 p-2 w-72 bg-gray-950 rounded btn-emboss-plus outline-none" placeholder="Name" onChange={(e) => updateText("NAME", e.target.value)}></input>

                <input required value={email} name="email" className=" z-10 md:ml-56 md:pl-4 p-2 w-72 bg-gray-950 rounded btn-emboss-plus outline-none" placeholder="Email" onChange={(e) => updateText("EMAIL", e.target.value)}></input>

                <textarea required name="message" value={message} className=" z-10 md:w-1/2 md:pl-4 p-2 md:ml-56 rounded btn-emboss-plus h-20 md:h-44 bg-gray-950 resize-none outline-none" placeholder="Message" onChange={(e) => updateText("MESSAGE", e.target.value)}></textarea>

                <p className={`text-green-600 md:pl-56 p-0 ${sent === 'send' ? 'visible' : 'hidden'} `}>Thank you for your message!! I will get back to you soon :)</p>
                <p className={`text-red-600 md:pl-56 p-0 ${sent === 'failed' ? '' : 'hidden'} `}>Oops! something went wrong. you can directly mail to <strong>yashrewa00@gmail.com</strong></p>
                <button className="bg-gray-950 z-10 md:ml-56  text-primary-purple btn-emboss-plus w-36 p-2 " type='submit'>{loading}</button>
            </form>

            <button type="submit" className={`z-10 animate-bounce w-16 h-16 btn-emboss absolute bottom-4 right-0 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center `}><Link href='/'><AiOutlineUp className='text-4xl text-primary-purple' /></Link></button>
        </div>
    )
}


export default Contacts