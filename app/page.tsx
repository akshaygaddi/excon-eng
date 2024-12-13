
import React from 'react'
import HeroSection from "@/components/herosection";
import WhyChooseUs from "@/components/why-us-section";
import ServicesSection from "@/components/servicehighlights";
import ContactSection from "@/components/contact-section";

const Page = () => {
    return (
        <main>
            <HeroSection/>
            <ServicesSection/>
            <WhyChooseUs />
            <ContactSection/>
        </main>
    )
}
export default Page
