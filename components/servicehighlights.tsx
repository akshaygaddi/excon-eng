'use client'
import React from 'react';
import { motion } from 'motion/react';
import {
    Cpu, Settings, Hammer,
    ArrowRight, Monitor, Gauge,
    Shield, Maximize2
} from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            icon: Cpu,
            title: "Wire Cut EDM",
            description: "High-precision wire cutting with accuracy up to 0.01mm. Perfect for complex geometries and hard materials.",
            image: "https://upmlfvhnengzfglbutei.supabase.co/storage/v1/object/public/rooms/mc2%20(1).png", // Placeholder for DK7735 image
            specs: [
                "Work Table: 280 x 380mm",
                "XY Traverse: 200 x 210mm",
                "Z Height: 200mm",
                "Max Taper: ±3°",
                "Workpiece Weight: 200 Kg",
                "Closed Loop System"
            ]
        },
        {
            icon: Hammer,
            title: "EDM Drilling",
            description: "Advanced EDM hole drilling for high-precision applications. Achieve extremely small-diameter holes with superior surface finish.",
            image: "https://upmlfvhnengzfglbutei.supabase.co/storage/v1/object/public/rooms/edm-drill.png", // Placeholder for DB703 image
            specs: [
                "High dimensional accuracy",
                "Burr-free results",
                "Fine surface finish",
                "Blind & through holes",
                `Minimal diameter: 0.005"`,
                "Advanced debris removal"
            ]
        },
        {
            icon: Settings,
            title: "High Speed CNC Wire EDM",
            description: "State-of-the-art CNC wire cutting with advanced servo drives and closed loop system for superior performance.",
            image: "https://upmlfvhnengzfglbutei.supabase.co/storage/v1/object/public/rooms/highspeed.png", // Placeholder for QHSF400 image
            specs: [
                "Max Speed: 150mm²/min",
                "Accuracy: 0.01mm",
                "Surface Finish: Ra 1.00",
                "Windows 7 BMXP System",
                "Auto centre & edge find",
                "4-Axes synthesizer"
            ]
        }
    ];

    return (
        <section id="capabilities" className="relative border-t-2 border-orange-200 bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-900 mb-4"
                    >
                        Advanced Engineering Capabilities
                    </motion.h2>
                    <p className="text-lg text-gray-600">
                        Industry-leading precision manufacturing solutions powered by cutting-edge machinery and technical expertise.
                    </p>
                </div>

                {/* Services Stack */}
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`grid lg:grid-cols-2 gap-8 items-center ${
                                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                            }`}
                        >
                            {/* Image Section */}
                            <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full aspect-4/3 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

                                    {/* Image Overlay */}
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <div className="flex items-center space-x-2 text-white">
                                            <Maximize2 className="w-5 h-5" />
                                            <span className="text-sm font-medium">View Specifications</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                                <div className="space-y-6">
                                    {/* Service Header */}
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            <service.icon className="w-6 h-6 text-gray-900" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-lg text-gray-600">
                                        {service.description}
                                    </p>

                                    {/* Specifications Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {service.specs.map((spec, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center space-x-2 text-sm text-gray-600"
                                            >
                                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Link */}
                                    <motion.a
                                        href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        whileHover={{ x: 5 }}
                                        className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-orange-500 transition-colors"
                                    >
                                        View Technical Details
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/10"
                    >
                        Request Technical Consultation
                        <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;