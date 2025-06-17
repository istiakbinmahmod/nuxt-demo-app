'use client';

import { ArrowRight, Code, Palette, Smartphone, Globe, BarChart, Shield } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration'],
    color: 'from-blue-600 to-blue-700',
    bgColor: 'from-blue-50 to-blue-100',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
    color: 'from-purple-600 to-purple-700',
    bgColor: 'from-purple-50 to-purple-100',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that engage users and drive conversions through thoughtful user experience.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-pink-600 to-pink-700',
    bgColor: 'from-pink-50 to-pink-100',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to solve your unique business challenges and streamline operations.',
    features: ['Enterprise Solutions', 'System Integration', 'Cloud Architecture', 'DevOps'],
    color: 'from-green-600 to-green-700',
    bgColor: 'from-green-50 to-green-100',
  },
  {
    icon: BarChart,
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies that align technology with your business objectives for maximum impact.',
    features: ['Technology Consulting', 'Digital Transformation', 'Analytics & Insights', 'Growth Strategy'],
    color: 'from-orange-600 to-orange-700',
    bgColor: 'from-orange-50 to-orange-100',
  },
  {
    icon: Shield,
    title: 'Security & Support',
    description: 'Robust security measures and ongoing support to ensure your digital assets are protected and optimized.',
    features: ['Security Audits', '24/7 Monitoring', 'Performance Optimization', 'Maintenance'],
    color: 'from-teal-600 to-teal-700',
    bgColor: 'from-teal-50 to-teal-100',
  },
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Services That
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Drive Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            From concept to launch, we provide end-to-end digital solutions tailored to your unique business needs and goals.
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
                alt="Digital innovation workspace"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of digital services designed to transform your business and accelerate growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`group p-8 rounded-2xl bg-gradient-to-br ${service.bgColor} hover:shadow-xl transition-all duration-300`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Discovery</h3>
              <p className="text-gray-600">
                We dive deep into understanding your business, goals, and challenges to create a solid foundation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive strategy and roadmap tailored to your specific objectives and timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Execution</h3>
              <p className="text-gray-600">
                Our expert team brings the vision to life with cutting-edge technology and best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Launch & Support</h3>
              <p className="text-gray-600">
                We ensure a smooth launch and provide ongoing support to maximize your investment's value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help you achieve your digital goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}