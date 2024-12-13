'use client'

import React, { useState, useEffect } from 'react';
import {
    Menu, X, ChevronDown, Phone, Mail, MapPin,
    Gauge, Wrench, Cpu, Hammer, MessageSquare,
    Clock, ArrowRight, ShieldCheck, LucideIcon
} from 'lucide-react';

interface DropdownItem {
    title: string;
    description: string;
    icon: LucideIcon;
    badge?: string;
}

interface NavItem {
    name: string;
    icon: LucideIcon;
    dropdownContent: DropdownItem[];
}

interface ContactInfo {
    icon: LucideIcon;
    text: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const navItems: NavItem[] = [
        {
            name: 'Products',
            icon: Hammer,
            dropdownContent: [
                {
                    title: 'Wire Cut EDM',
                    description: 'High-precision cutting solutions',
                    icon: Gauge,
                    badge: 'Popular'
                },
                {
                    title: 'EDM Drilling',
                    description: 'Advanced drilling technology',
                    icon: Cpu
                },
                {
                    title: 'CNC Machines',
                    description: 'State-of-the-art CNC systems',
                    icon: Wrench,
                    badge: 'New'
                }
            ]
        },
        {
            name: 'Services',
            icon: MessageSquare,
            dropdownContent: [
                {
                    title: '24/7 Support',
                    description: 'Round-the-clock technical assistance',
                    icon: Clock
                },
                {
                    title: 'Training Programs',
                    description: 'Expert machine operation training',
                    icon: ShieldCheck
                },
                {
                    title: 'Consulting',
                    description: 'Technical consulting services',
                    icon: MessageSquare
                }
            ]
        }
    ];

    const contactInfo: ContactInfo[] = [
        { icon: Phone, text: '+1 234 567 890', href: 'tel:+1234567890' },
        { icon: Mail, text: 'info@excon.com', href: 'mailto:info@excon.com' },
        { icon: MapPin, text: 'Peenya 1st Stage, Bangalore', href: '#location' }
    ];

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const handleDropdownClick = (itemName: string): void => {
        setActiveDropdown(activeDropdown === itemName ? null : itemName);
    };

    return (
        <nav className="relative z-50">
            {/* Top Info Bar - Now more responsive */}
            <div className="bg-gray-900 text-white py-2">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                        <div className="flex flex-wrap justify-center sm:justify-start gap-4 w-full sm:w-auto">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="flex items-center space-x-2 text-sm hover:text-orange-400 transition-all"
                                >
                                    <item.icon className="w-4 h-4" />
                                    <span className="hidden sm:inline">{item.text}</span>
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                            <a href="#support" className="hover:text-orange-400">Support</a>
                            <span className="hidden sm:inline">|</span>
                            <a href="#contact" className="hover:text-orange-400">Contact</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Enhanced responsiveness */}
            <div className={`sticky top-0 w-full transition-all duration-300 ${
                isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-lg' : 'bg-white'
            }`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo - More compact on mobile */}
                        {/* Logo with image */}
                        <a href="/" className="flex-shrink-0 group">
                            <div className="flex items-center space-x-3">
                                <img
                                    src="https://upmlfvhnengzfglbutei.supabase.co/storage/v1/object/public/rooms/logo_32.png" // Replace with your actual logo path
                                    alt="Excon Engineering"
                                    className="w-60 h-20 lg:w-70 lg:h-20 object-contain transition-transform group-hover:scale-105 "
                                />
                                {/*<div className="text-xl lg:text-2xl font-bold text-gray-900">*/}
                                {/*    EXCON<span className="text-orange-500">.</span>*/}
                                {/*</div>*/}
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 px-3 py-2 rounded-lg group-hover:bg-orange-50 transition-all">
                                        <item.icon className="w-4 h-4" />
                                        <span>{item.name}</span>
                                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                    </button>

                                    <div className="absolute top-full left-0 w-64 lg:w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                                            {item.dropdownContent.map((dropItem) => (
                                                <a
                                                    key={dropItem.title}
                                                    href="#"
                                                    className="flex items-start p-3 hover:bg-orange-50 transition-colors"
                                                >
                                                    <div className="mt-1 p-2 rounded-lg bg-orange-100 text-orange-600">
                                                        <dropItem.icon className="w-4 h-4" />
                                                    </div>
                                                    <div className="ml-3">
                                                        <div className="flex items-center">
                                                            <span className="font-medium text-gray-900">{dropItem.title}</span>
                                                            {dropItem.badge && (
                                                                <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-orange-100 text-orange-600 rounded-full">
                                                                    {dropItem.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-gray-600 mt-0.5">{dropItem.description}</p>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <a
                                href="#quote"
                                className="inline-flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
                            >
                                <span>Get Quote</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation - Improved animation and layout */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
                    }`}
                >
                    <div className="container mx-auto px-4 py-2 bg-white">
                        <div className="space-y-2">
                            {navItems.map((item) => (
                                <div key={item.name} className="border-b border-gray-100 last:border-0">
                                    <button
                                        onClick={() => handleDropdownClick(item.name)}
                                        className="flex items-center justify-between w-full p-3 text-left text-gray-700 hover:text-orange-500"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <item.icon className="w-5 h-5" />
                                            <span>{item.name}</span>
                                        </div>
                                        <ChevronDown className={`w-5 h-5 transition-transform ${
                                            activeDropdown === item.name ? 'rotate-180' : ''
                                        }`} />
                                    </button>

                                    <div className={`space-y-1 px-3 pb-2 ${activeDropdown === item.name ? 'block' : 'hidden'}`}>
                                        {item.dropdownContent.map((dropItem) => (
                                            <a
                                                key={dropItem.title}
                                                href="#"
                                                className="flex items-start p-2 rounded-lg hover:bg-orange-50 transition-colors"
                                            >
                                                <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
                                                    <dropItem.icon className="w-4 h-4" />
                                                </div>
                                                <div className="ml-3">
                                                    <div className="flex items-center">
                                                        <span className="font-medium text-gray-900">{dropItem.title}</span>
                                                        {dropItem.badge && (
                                                            <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-orange-100 text-orange-600 rounded-full">
                                                                {dropItem.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-gray-600 mt-0.5">{dropItem.description}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="py-4">
                            <a
                                href="#quote"
                                className="flex items-center justify-center space-x-2 w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors shadow-md"
                            >
                                <span>Get Quote</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;