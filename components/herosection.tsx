'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
    Shield, Award, Clock,
    ChevronRight, ArrowRight,
    Factory, Hammer, Users
} from 'lucide-react';

const HeroSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        {
            title: "Precision Engineering Solutions",
            description: "Industry-leading machinery and expert technical services, trusted by manufacturing leaders worldwide.",
            image: "https://upmlfvhnengzfglbutei.supabase.co/storage/v1/object/public/rooms/mc1.png",
            stats: [
                { icon: Factory, value: "15+", label: "Years Experience" },
                { icon: Hammer, value: "24/7", label: "Technical Support" },
                { icon: Users, value: "500+", label: "Satisfied Clients" }
            ]
        },
        {
            title: "Advanced Technical Services",
            description: "Comprehensive maintenance and specialized support ensuring maximum operational efficiency.",
            image: "https://upmlfvhnengzfglbutei.supabase.co/storage/v1/object/public/rooms/mc2%20(1).png",
            stats: [
                { icon: Clock, value: "2Hr", label: "Response Time" },
                { icon: Shield, value: "100%", label: "Quality Assured" },
                { icon: Award, value: "ISO", label: "9001:2015 Certified" }
            ]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full bg-white">
            <div className="absolute inset-0 bg-gray-50/50" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="relative space-y-8">
                        {/* Premium Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm"
                        >
                            <Award className="w-4 h-4 text-orange-500" />
                            <span className="text-sm font-medium text-gray-800">ISO 9001:2015 Certified</span>
                        </motion.div>

                        {/* Main Content */}
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                {slides[activeSlide].title}
                            </h1>
                            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                                {slides[activeSlide].description}
                            </p>
                        </div>

                        {/* Statistics Grid */}
                        <div className="grid grid-cols-3 gap-6">
                            {slides[activeSlide].stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <div className="absolute -top-3 -left-3 p-2 bg-orange-50 rounded-lg border border-orange-100">
                                        <stat.icon className="w-4 h-4 text-orange-500" />
                                    </div>
                                    <div className="pt-2">
                                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                        <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="flex gap-4 pt-4">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-all shadow-lg shadow-gray-900/10"
                            >
                                Schedule Consultation
                                <ArrowRight className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                                href="#capabilities"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all"
                            >
                                Our Capabilities
                                <ChevronRight className="w-4 h-4" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Right Content - Image Section */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={slides[activeSlide].image}
                                alt="Industrial Excellence"
                                className="w-full aspect-[4/3] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

                            {/* Image Overlay Content */}
                            <div className="absolute bottom-0 inset-x-0 p-8">
                                <div className="flex justify-between items-end text-white">
                                    <div>
                                        <div className="text-sm font-medium opacity-80">Trusted Partner</div>
                                        <div className="text-2xl font-bold mt-2">Industry Excellence</div>
                                    </div>
                                    <button
                                        onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
                                        className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
                                        aria-label="Next slide"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Slide Navigation */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-1">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSlide(index)}
                                    className={`h-1 rounded-full transition-all duration-300 ${
                                        index === activeSlide
                                            ? 'w-8 bg-gray-900'
                                            : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;