import React from 'react'
import { motion } from 'framer-motion'
import { FaAdversal, FaEnvelope, FaGithub, FaGithubAlt, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.05 }}
            id="contact"
            className="py-20 bg-dark-200"
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-center font-bold text-3xl mb-4 '>Get in
                    <span className='text-purple '> Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have an idea for boosting your business or sales ? Lets Talk</p>
                {/*Form*/}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {/*Contact Fomr*/}
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2' >Your Name</label>
                                <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text" />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb-2' >E-Mail Address</label>
                                <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text" />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb-2' >Leave Your Message</label>
                                <textarea className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text" />
                            </div>
                            <button className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-500 transition duration-300 cursor-pointer' type='submit'>
                                Send
                            </button>
                        </form>
                    </div>
                    {/*Contact Details*/}
                    <div className='space-y-6'>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-bold mb-2'>Location</h3>
                                <p className='text-gray-400'>Lahore, Pakistan</p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-bold mb-2'>E-Mail</h3>
                                <p className='text-gray-400'>salman.leo2@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-bold mb-2'>Phone</h3>
                                <p className='text-gray-400'>+92-3477477777</p>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <h3>Vist My GitHub Account </h3>
                            <div className='flex space-x-4'>
                                <a href="https://github.com/salmanameer2" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white '>
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Contact
