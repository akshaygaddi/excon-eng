'use client'

import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Phone,
    Mail,
    MapPin,
    Send,
    MessageCircle,
    Clock,
    Building
} from 'lucide-react';


const ContactSection = () => {
    const contactCards = [
        {
            icon: Phone,
            title: "Call Our Experts",
            description: "Get immediate technical assistance",
            details: [
                { icon: Clock, text: "Mon-Sat: 9:00 AM - 6:00 PM" },
                { text: "+91 (080) 2839-4920" }
            ],
            actionText: "Schedule a Call",
            variant: "default" as const
        },
        {
            icon: Building,
            title: "Visit Our Facility",
            description: "See our machines in action",
            details: [
                { icon: MapPin, text: "SRS Main Road, Peenya 1st Stage" },
                { text: "Bangalore, Karnataka" }
            ],
            actionText: "Get Directions",
            variant: "primary" as const
        },
        {
            icon: Mail,
            title: "Email Us",
            description: "Detailed technical inquiries",
            details: [
                { text: "info@exconengineering.com" },
                { text: "Response within 2 hours" }
            ],
            actionText: "Send Email",
            variant: "default" as const
        }
    ];

    return (
        <section className="w-full py-24 bg-gradient-to-b from-gray-50/50 to-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Let's Engineer Your Success Together
                    </h2>
                    <p className="text-lg text-gray-600">
                        Whether you need precision machining or technical consultation,
                        our team of experts is ready to support your project requirements.
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {contactCards.map((card, index) => (
                        <Card
                            key={index}
                            className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                                card.variant === 'primary'
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-white hover:-translate-y-1'
                            }`}
                        >
                            <CardContent className="p-6">
                                <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-6 ${
                                    card.variant === 'primary'
                                        ? 'bg-white/20'
                                        : 'bg-orange-50'
                                }`}>
                                    <card.icon className={`w-6 h-6 ${
                                        card.variant === 'primary'
                                            ? 'text-white'
                                            : 'text-orange-500'
                                    }`} />
                                </div>

                                <h3 className={`text-xl font-semibold mb-2 ${
                                    card.variant === 'primary'
                                        ? 'text-white'
                                        : 'text-gray-900'
                                }`}>
                                    {card.title}
                                </h3>

                                <p className={`mb-6 ${
                                    card.variant === 'primary'
                                        ? 'text-white/90'
                                        : 'text-gray-600'
                                }`}>
                                    {card.description}
                                </p>

                                <div className="space-y-3 mb-6">
                                    {card.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            {detail.icon && (
                                                <detail.icon className={`w-4 h-4 ${
                                                    card.variant === 'primary'
                                                        ? 'text-white/80'
                                                        : 'text-gray-500'
                                                }`} />
                                            )}
                                            <span className={
                                                card.variant === 'primary'
                                                    ? 'text-white/90'
                                                    : 'text-gray-600'
                                            }>
                        {detail.text}
                      </span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className={`w-full ${
                                        card.variant === 'primary'
                                            ? 'bg-white text-orange-500 hover:bg-white/90'
                                            : 'bg-orange-500 text-white hover:bg-orange-600'
                                    }`}
                                >
                                    {card.actionText}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Contact Form Card */}
                <Card className="max-w-3xl mx-auto border-0 shadow-xl">
                    <CardHeader className="text-center pb-6">
                        <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                        <CardDescription>
                            Fill out the form below and we'll respond within 2 business hours
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <Input
                                    placeholder="Full Name"
                                    className="h-12"
                                />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                    className="h-12"
                                />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <Input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="h-12"
                                />
                            </div>
                            <div>
                                <Select>
                                    <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Select Service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="wire-cut">Wire Cut EDM</SelectItem>
                                        <SelectItem value="drilling">EDM Drilling</SelectItem>
                                        <SelectItem value="cnc">High Speed CNC</SelectItem>
                                        <SelectItem value="other">Other Services</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Textarea
                            placeholder="Tell us about your project requirements..."
                            className="min-h-[120px] resize-none"
                        />

                        <Button className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white">
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default ContactSection;