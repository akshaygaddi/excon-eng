'use client'

import React from 'react';
import {
    Phone, Mail, MapPin,
    Facebook, Linkedin, Twitter,
    Clock, Award, Shield
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const companyLinks = [
        { label: "About Us", href: "#about" },
        { label: "Our Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
    ];

    const serviceLinks = [
        { label: "Wire Cut EDM", href: "#wire-cut" },
        { label: "EDM Drilling", href: "#drilling" },
        { label: "High Speed CNC", href: "#cnc" },
        { label: "Technical Support", href: "#support" }
    ];

    const certifications = [
        { icon: Award, label: "ISO 9001:2015 Certified" },
        { icon: Shield, label: "Industry Safety Standards" },
        { icon: Clock, label: "24/7 Technical Support" }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://upmlfvhnengzfglbutei.supabase.co/storage/v1/object/public/rooms/logo_32.png"
                                alt="Excon Engineering"
                                className="h-10"
                            />
                        </div>

                        {/* Certifications */}
                        <div className="space-y-3">
                            {certifications.map((cert, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <cert.icon className="w-5 h-5 text-orange-500" />
                                    <span className="text-sm text-gray-300">
                                        {cert.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            {serviceLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                                <p className="text-gray-300 text-sm">
                                    SRS Main Road, Near KEB Office,
                                    Peenya 1st Stage,
                                    Bangalore
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-orange-500" />
                                <a
                                    href="tel:+1234567890"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    +1 (234) 567-890
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-orange-500" />
                                <a
                                    href="mailto:contact@example.com"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    contact@example.com
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <div className="flex space-x-4">
                                <a
                                    href="#facebook"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#linkedin"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="#twitter"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-gray-400">
                            © {currentYear} Excon Engineering. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <a href="#privacy" className="hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="hover:text-white transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;