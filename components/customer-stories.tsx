'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    ChevronLeft,
    ChevronRight,
    Star,
    Quote,
    ArrowRight,
    Building2,
    Timer,
    Target,
    TrendingUp
} from 'lucide-react';

const CustomerSuccess = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [activeCaseStudy, setActiveCaseStudy] = useState(0);

    const testimonials = [
        {
            name: "John Anderson",
            position: "Production Manager",
            company: "Automotive Precision Ltd",
            image: "/api/placeholder/100/100",
            content: "Excon Engineering's wire-cutting EDM services have transformed our production capabilities. Their precision and reliability are unmatched in the industry.",
            rating: 5,
            stats: {
                accuracy: "±0.01mm",
                timeReduction: "40%",
                productivity: "60%"
            }
        },
        {
            name: "Sarah Chen",
            position: "Technical Director",
            company: "MedTech Solutions",
            image: "/api/placeholder/100/100",
            content: "Their expertise in micro-drilling has been crucial for our medical device components. The quality and consistency of their work is exceptional.",
            rating: 5,
            stats: {
                accuracy: "±0.005mm",
                timeReduction: "35%",
                productivity: "55%"
            }
        },
        {
            name: "Michael Roberts",
            position: "Operations Head",
            company: "Aerospace Dynamics",
            image: "/api/placeholder/100/100",
            content: "Working with Excon has significantly improved our manufacturing efficiency. Their technical support and quick turnaround time are outstanding.",
            rating: 5,
            stats: {
                accuracy: "±0.008mm",
                timeReduction: "45%",
                productivity: "70%"
            }
        }
    ];

    const caseStudies = [
        {
            title: "Automotive Component Optimization",
            industry: "Automotive",
            challenge: "Complex transmission components requiring ultra-precise tolerances",
            solution: "Custom EDM wire-cutting process with automated quality control",
            results: [
                "Achieved ±0.01mm accuracy",
                "Reduced production time by 40%",
                "Zero defect rate in production"
            ],
            image: "/api/placeholder/600/400",
            stats: {
                accuracy: "±0.01mm",
                efficiency: "+40%",
                quality: "100%"
            }
        },
        {
            title: "Medical Device Manufacturing",
            industry: "Healthcare",
            challenge: "Micro-precision components for surgical instruments",
            solution: "Advanced EDM drilling with custom tooling solutions",
            results: [
                "Achieved ±0.005mm accuracy",
                "35% faster production cycle",
                "ISO 13485 compliance"
            ],
            image: "/api/placeholder/600/400",
            stats: {
                accuracy: "±0.005mm",
                efficiency: "+35%",
                quality: "100%"
            }
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-orange-500 font-medium mb-4"
                    >
                        Success Stories
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Our Clients Achieve Excellence
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-600"
                    >
                        Real results from industry leaders who trust our expertise
                    </motion.p>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative mb-20">
                    <div className="max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTestimonial}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="bg-white rounded-2xl shadow-lg p-8"
                            >
                                <div className="flex flex-col lg:flex-row gap-8 items-center">
                                    {/* Client Info */}
                                    <div className="flex-shrink-0 text-center lg:text-left">
                                        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto lg:mx-0 mb-4">
                                            <img
                                                src={testimonials[activeTestimonial].image}
                                                alt={testimonials[activeTestimonial].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                                <Star key={i} className="inline-block w-4 h-4 text-orange-500 fill-orange-500" />
                                            ))}
                                        </div>
                                        <h3 className="font-bold text-gray-900">
                                            {testimonials[activeTestimonial].name}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {testimonials[activeTestimonial].position}
                                        </p>
                                        <p className="text-orange-500 text-sm">
                                            {testimonials[activeTestimonial].company}
                                        </p>
                                    </div>

                                    {/* Testimonial Content */}
                                    <div className="flex-grow">
                                        <Quote className="w-10 h-10 text-orange-200 mb-4" />
                                        <p className="text-gray-600 text-lg mb-6">
                                            {testimonials[activeTestimonial].content}
                                        </p>

                                        {/* Achievement Stats */}
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="text-center p-3 bg-orange-50 rounded-lg">
                                                <Target className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                                                <div className="font-bold text-gray-900">
                                                    {testimonials[activeTestimonial].stats.accuracy}
                                                </div>
                                                <div className="text-sm text-gray-600">Accuracy</div>
                                            </div>
                                            <div className="text-center p-3 bg-orange-50 rounded-lg">
                                                <Timer className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                                                <div className="font-bold text-gray-900">
                                                    {testimonials[activeTestimonial].stats.timeReduction}
                                                </div>
                                                <div className="text-sm text-gray-600">Time Saved</div>
                                            </div>
                                            <div className="text-center p-3 bg-orange-50 rounded-lg">
                                                <TrendingUp className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                                                <div className="font-bold text-gray-900">
                                                    {testimonials[activeTestimonial].stats.productivity}
                                                </div>
                                                <div className="text-sm text-gray-600">Productivity</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Case Studies */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            {/* Case Study Image */}
                            <div className="relative h-48">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent z-10" />
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-lg px-3 py-1">
                                    <div className="flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-orange-500" />
                                        <span className="text-sm font-medium text-gray-900">
                      {study.industry}
                    </span>
                                    </div>
                                </div>
                            </div>

                            {/* Case Study Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {study.title}
                                </h3>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Challenge:</h4>
                                        <p className="text-gray-600">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Solution:</h4>
                                        <p className="text-gray-600">{study.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-2">Results:</h4>
                                        <ul className="space-y-2">
                                            {study.results.map((result, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-gray-600">
                                                    <ChevronRight className="w-4 h-4 text-orange-500" />
                                                    {result}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <button className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors">
                                    Read Full Case Study
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerSuccess;