'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    ChevronRight, ChevronLeft,
    Maximize2, ArrowRight,
    Timer, Target, Award,
    Plus, Check
} from 'lucide-react';



interface Category {
    id: string;
    label: string;
}

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    specs: string[];
    outcomes: string[];
}

// Define prop types for any motion components if needed
type MotionDivProps = {
    children: React.ReactNode;
    className?: string;
};

const ProjectGallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    const categories: Category[] = [
        { id: 'all', label: 'All Projects' },
        { id: 'wire-cut', label: 'Wire Cut EDM' },
        { id: 'drilling', label: 'EDM Drilling' },
        { id: 'cnc', label: 'CNC Solutions' }
    ];

    const projects: Project[] = [
        {
            id: 1,
            title: "High-Precision Die Components",
            category: "wire-cut",
            image: "/api/placeholder/600/400",
            specs: [
                "Tolerance: ±0.005mm",
                "Material: Hardened Steel",
                "Surface Finish: Ra 0.8"
            ],
            outcomes: [
                "50% reduction in production time",
                "Zero defect rate",
                "Extended tool life"
            ]
        },
        {
            id: 2,
            title: "Aerospace Part Manufacturing",
            category: "drilling",
            image: "/api/placeholder/600/400",
            specs: [
                "Hole Diameter: 0.3mm",
                "Depth Ratio: 20:1",
                "Material: Titanium Alloy"
            ],
            outcomes: [
                "Met AS9100 standards",
                "100% inspection pass rate",
                "Delivery ahead of schedule"
            ]
        },
        {
            id: 3,
            title: "Precision Medical Instruments",
            category: "cnc",
            image: "/api/placeholder/600/400",
            specs: [
                "Accuracy: ±0.01mm",
                "Material: Surgical Steel",
                "Complex 3D Profiles"
            ],
            outcomes: [
                "FDA compliance achieved",
                "Bio-compatible finish",
                "Scale production ready"
            ]
        },
        {
            id: 4,
            title: "Industrial Mold Manufacturing",
            category: "wire-cut",
            image: "/api/placeholder/600/400",
            specs: [
                "Size: 400 x 300mm",
                "Material: Tool Steel",
                "Taper Angle: 2°"
            ],
            outcomes: [
                "30% cost reduction",
                "Improved cycle time",
                "Enhanced durability"
            ]
        }
    ];

    const filteredProjects: Project[] = selectedCategory === 'all'
        ? projects
        : projects.filter((project: Project) => project.category === selectedCategory);

    const handleCategorySelect = (categoryId: string): void => {
        setSelectedCategory(categoryId);
    };

    const handleProjectClick = (project: Project): void => {
        setActiveProject(project);
    };

    const handleCloseModal = (): void => {
        setActiveProject(null);
    };

    return (
        <section className="relative bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-900 mb-4"
                    >
                        Engineering Excellence in Action
                    </motion.h2>
                    <p className="text-lg text-gray-600">
                        Explore our portfolio of precision engineering projects delivering exceptional results for industry leaders.
                    </p>
                </div>

                {/* Category Navigation */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-100 rounded-lg p-1">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                                    selectedCategory === category.id
                                        ? 'bg-white text-gray-900 shadow-sm'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative aspect-4/3 rounded-t-xl overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />

                                {/* Image Overlay */}
                                <div className="absolute bottom-0 inset-x-0 p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <button
                                        onClick={() => setActiveProject(project)}
                                        className="inline-flex items-center text-sm text-white/90 hover:text-white"
                                    >
                                        <Maximize2 className="w-4 h-4 mr-2" />
                                        View Details
                                    </button>
                                </div>
                            </div>

                            {/* Project Specs Preview */}
                            <div className="p-6 bg-gray-50 rounded-b-xl">
                                <div className="space-y-2">
                                    {project.specs.slice(0, 2).map((spec, index) => (
                                        <div key={index} className="flex items-center text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />
                                            {spec}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Details Modal */}
                <AnimatePresence>
                    {activeProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-gray-900/60 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.95 }}
                                className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setActiveProject(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    <Plus className="w-6 h-6 rotate-45" />
                                </button>

                                <div className="grid md:grid-cols-2 gap-8 p-8">
                                    {/* Project Image */}
                                    <div className="relative rounded-xl overflow-hidden">
                                        <img
                                            src={activeProject.image}
                                            alt={activeProject.title}
                                            className="w-full aspect-4/3 object-cover"
                                        />
                                    </div>

                                    {/* Project Details */}
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {activeProject.title}
                                        </h3>

                                        {/* Technical Specifications */}
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-600 mb-3">
                                                Technical Specifications
                                            </h4>
                                            <div className="space-y-2">
                                                {activeProject.specs.map((spec, index) => (
                                                    <div key={index} className="flex items-center text-sm text-gray-600">
                                                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />
                                                        {spec}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Project Outcomes */}
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-600 mb-3">
                                                Project Outcomes
                                            </h4>
                                            <div className="space-y-2">
                                                {activeProject.outcomes.map((outcome, index) => (
                                                    <div key={index} className="flex items-center text-sm text-gray-600">
                                                        <Check className="w-4 h-4 text-orange-500 mr-3" />
                                                        {outcome}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <motion.a
                                            href="#contact"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all"
                                        >
                                            Discuss Your Project
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ProjectGallery;