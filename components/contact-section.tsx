'use client'

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
    Phone, Mail, MapPin, Clock,
    Send, ChevronRight, MessageCircle,
    CheckCircle2
} from 'lucide-react';

const ContactSection = () => {
    const [formStatus, setFormStatus] = useState('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            details: "Available 24/7 for urgent support",
            action: "Call Now",
            link: "tel:+1234567890"
        },
        {
            icon: Mail,
            title: "Email Us",
            details: "Get a response within 2 hours",
            action: "Send Email",
            link: "mailto:contact@example.com"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: "SRS Main Road, Near KEB Office, Peenya 1st Stage",
            action: "Get Directions",
            link: "#location"
        }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulate form submission
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="relative  border-t-2 border-orange-200 bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-12">
                        {/* Section Header */}
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold text-gray-900 mb-4"
                            >
                                Get in Touch
                            </motion.h2>
                            <p className="text-lg text-gray-600">
                                Ready to discuss your engineering requirements? Our technical team is here to help.
                            </p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={method.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <method.icon className="w-6 h-6 text-gray-900" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {method.title}
                                        </h3>
                                        <p className="text-gray-600 mb-3">
                                            {method.details}
                                        </p>
                                        <a
                                            href={method.link}
                                            className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-orange-500"
                                        >
                                            {method.action}
                                            <ChevronRight className="w-4 h-4 ml-1" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Response Promise */}
                        {/*<div className="bg-gray-900 p-6 rounded-xl text-white">*/}
                        {/*    <div className="flex items-center space-x-4 mb-4">*/}
                        {/*        <Clock className="w-6 h-6" />*/}
                        {/*        <h3 className="text-lg font-semibold">Quick Response Promise</h3>*/}
                        {/*    </div>*/}
                        {/*    <p className="text-gray-300 mb-4">*/}
                        {/*        We understand the importance of timely support in manufacturing operations. Our team ensures:*/}
                        {/*    </p>*/}
                        {/*    <ul className="space-y-2">*/}
                        {/*        <li className="flex items-center text-sm text-gray-300">*/}
                        {/*            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />*/}
                        {/*            Initial response within 2 hours*/}
                        {/*        </li>*/}
                        {/*        <li className="flex items-center text-sm text-gray-300">*/}
                        {/*            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />*/}
                        {/*            24/7 emergency support*/}
                        {/*        </li>*/}
                        {/*        <li className="flex items-center text-sm text-gray-300">*/}
                        {/*            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />*/}
                        {/*            On-site technical assistance when needed*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center space-x-3 mb-8">
                                <MessageCircle className="w-6 h-6 text-gray-900" />
                                <h3 className="text-xl font-bold text-gray-900">
                                    Send Us a Message
                                </h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Required
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                                            required
                                        >
                                            <option value="">Select Service</option>
                                            <option value="wire-cut">Wire Cut EDM</option>
                                            <option value="drilling">EDM Drilling</option>
                                            <option value="cnc">CNC Solutions</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Details
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                                        required
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all disabled:opacity-70"
                                >
                                    {formStatus === 'submitting' ? (
                                        <>Sending...</>
                                    ) : formStatus === 'success' ? (
                                        <>
                                            <CheckCircle2 className="w-4 h-4" />
                                            Message Sent
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;