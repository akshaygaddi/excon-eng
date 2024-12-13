'use client'
import React from 'react';
import { motion } from 'motion/react';
import {
    Clock, Shield, Users,
    Hammer, ChartBar, Award,
    Check, ArrowRight
} from 'lucide-react';

const WhyUsSection = () => {
    const achievements = [
        {
            icon: Clock,
            stat: "Since 2015",
            label: "Industry Experience",
            description: "Delivering excellence in engineering solutions for nearly a decade."
        },
        {
            icon: Users,
            stat: "500+",
            label: "Satisfied Clients",
            description: "Building lasting partnerships through exceptional service quality."
        },
        {
            icon: Hammer,
            stat: "15+",
            label: "Premium Brands",
            description: "Authorized partner for leading industrial machinery manufacturers."
        }
    ];

    const keyFeatures = [
        {
            title: "Quality Compliance",
            description: "ISO 9001:2015 certified processes ensuring consistent quality in every project.",
            points: [
                "Stringent quality control measures",
                "Regular equipment calibration",
                "Documented quality procedures",
                "Continuous improvement protocols"
            ]
        },
        {
            title: "Technical Expertise",
            description: "Highly skilled team with extensive experience in precision engineering.",
            points: [
                "Specialized technical knowledge",
                "Ongoing professional development",
                "Industry-specific expertise",
                "Advanced problem-solving capabilities"
            ]
        },
        {
            title: "Customer Support",
            description: "Dedicated support ensuring maximum uptime and operational efficiency.",
            points: [
                "24/7 technical assistance",
                "Rapid response times",
                "Preventive maintenance",
                "Comprehensive documentation"
            ]
        }
    ];

    return (
        <section className="relative border-t-2 border-orange-200 bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-900 mb-4"
                    >
                        Why Industry Leaders Choose Us
                    </motion.h2>
                    <p className="text-lg text-gray-600">
                        A trusted engineering partner delivering precision, reliability, and excellence since 2015.
                    </p>
                </div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <item.icon className="w-6 h-6 text-gray-900" />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">
                                        {item.stat}
                                    </div>
                                    <div className="text-sm font-medium text-gray-600 mb-3">
                                        {item.label}
                                    </div>
                                    <p className="text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Key Features */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {keyFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-white p-8 rounded-xl shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {feature.description}
                            </p>
                            <ul className="space-y-3">
                                {feature.points.map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Client Focus Section */}
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
                    <div className="relative p-12 lg:p-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Your Success Is Our Priority
                                </h3>
                                <p className="text-gray-300 mb-8">
                                    We maintain the highest standards of service quality and customer satisfaction through our comprehensive support and maintenance programs.
                                </p>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-50 transition-all"
                                >
                                    Partner With Us
                                    <ArrowRight className="w-4 h-4" />
                                </motion.a>
                            </div>
                            <div className="flex justify-end">
                                <img
                                    src="https://upmlfvhnengzfglbutei.supabase.co/storage/v1/object/public/rooms/logo_32.png"
                                    alt="Engineering Excellence"
                                    className="rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;