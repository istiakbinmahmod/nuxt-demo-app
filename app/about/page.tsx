'use client';

import { Award, Heart, Lightbulb, Target, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                We're Building the
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Future of Digital</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded with a vision to bridge the gap between creativity and technology, Nexus Digital has been at the forefront of digital innovation for over a decade.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by a passion for excellence and a commitment to creating digital solutions that make a real difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Purpose-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Every project starts with understanding your 'why'. We align our solutions with your business objectives to create meaningful impact.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation First</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of trends and embrace emerging technologies to deliver cutting-edge solutions that give you a competitive advantage.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Human-Centered</h3>
              <p className="text-gray-600 leading-relaxed">
                Technology should serve people. We design with empathy, focusing on user experience and creating solutions that people love to use.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We're perfectionists at heart. Every line of code, every pixel, every interaction is crafted with meticulous attention to detail.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Spirit</h3>
              <p className="text-gray-600 leading-relaxed">
                Your success is our success. We work as an extension of your team, fostering open communication and shared ownership.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Agile & Adaptive</h3>
              <p className="text-gray-600 leading-relaxed">
                The digital landscape moves fast. We embrace change, iterate quickly, and adapt our strategies to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Modern office workspace"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  What started as a small team of passionate developers and designers has grown into a full-service digital agency trusted by companies worldwide. Our journey began with a simple belief: technology should empower, not complicate.
                </p>
                <p>
                  Over the years, we've evolved alongside the digital landscape, always staying true to our core values while embracing new technologies and methodologies. From startups to Fortune 500 companies, we've helped organizations transform their digital presence and achieve their goals.
                </p>
                <p>
                  Today, we're proud to be at the forefront of digital innovation, continuously pushing boundaries and setting new standards for what's possible in the digital realm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}