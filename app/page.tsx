'use client';

import { Search, Target, TrendingUp, Users, Award, BarChart3, Mail, Phone, MapPin, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-primary fill-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Dream Finds
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary transition">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition">Contact</a>
            </div>
            <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition">
              Get Started
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Dream Products</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're a premier digital marketing agency that helps brands connect with their perfect customers through data-driven strategies and innovative campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-primary text-white px-8 py-4 rounded-full hover:bg-secondary transition flex items-center justify-center">
                  Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#services" className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition text-center">
                  Our Services
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-3xl absolute"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition">
                    <TrendingUp className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Growth</h3>
                    <p className="text-gray-600 text-sm">250% Avg ROI</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition mt-8">
                    <Users className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Reach</h3>
                    <p className="text-gray-600 text-sm">10M+ Audience</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition">
                    <Award className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Awards</h3>
                    <p className="text-gray-600 text-sm">50+ Industry</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition mt-8">
                    <BarChart3 className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Clients</h3>
                    <p className="text-gray-600 text-sm">500+ Happy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive digital marketing solutions tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">SEO Optimization</h3>
              <p className="text-gray-600 mb-4">
                Boost your search engine rankings and drive organic traffic with our proven SEO strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  Keyword Research
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  On-Page SEO
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  Link Building
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Social Media Marketing</h3>
              <p className="text-gray-600 mb-4">
                Engage your audience and build brand awareness across all major social platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  Content Strategy
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  Community Management
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  Paid Advertising
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Performance Analytics</h3>
              <p className="text-gray-600 mb-4">
                Track, measure, and optimize your campaigns with advanced analytics and reporting.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  Real-Time Tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  Custom Dashboards
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  ROI Analysis
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Email Marketing</h3>
              <p className="text-gray-600 mb-4">
                Create compelling email campaigns that convert leads into loyal customers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  Campaign Design
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  A/B Testing
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  Automation
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Content Marketing</h3>
              <p className="text-gray-600 mb-4">
                Tell your brand story with engaging content that resonates with your audience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  Blog Writing
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  Video Production
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary mr-2" />
                  Infographics
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">PPC Advertising</h3>
              <p className="text-gray-600 mb-4">
                Maximize your ad spend with targeted pay-per-click campaigns that deliver results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  Google Ads
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  Facebook Ads
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                  Campaign Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Why Choose Dream Finds?</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're not just another marketing agency. We're your strategic partner in growth, dedicated to finding the perfect connection between your brand and your dream customers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Data-Driven Approach</h3>
                    <p className="text-gray-600">Every decision backed by analytics and insights</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">500+ successful campaigns and counting</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                    <p className="text-gray-600">Certified professionals across all marketing disciplines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">250%</div>
                    <div className="text-gray-600">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10M+</div>
                    <div className="text-gray-600">Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                    <div className="text-gray-600">Awards Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real partnerships</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Dream Finds transformed our online presence completely. Our sales increased by 300% in just 6 months!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JD
                </div>
                <div>
                  <div className="font-bold">Jessica Davis</div>
                  <div className="text-gray-600 text-sm">CEO, TechStart</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Professional, creative, and results-driven. The best marketing partner we've ever worked with."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MR
                </div>
                <div>
                  <div className="font-bold">Michael Roberts</div>
                  <div className="text-gray-600 text-sm">Founder, EcoGoods</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Their attention to detail and strategic thinking helped us reach customers we never thought possible."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SK
                </div>
                <div>
                  <div className="font-bold">Sarah Kim</div>
                  <div className="text-gray-600 text-sm">CMO, FashionHub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's discuss how we can help grow your business</p>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="company">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition font-bold"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-4 mr-6">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email Us</h3>
                    <p className="text-gray-600">contact@dreamfinds.com</p>
                    <p className="text-gray-600">support@dreamfinds.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary rounded-full p-4 mr-6">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-4 mr-6">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                    <p className="text-gray-600">123 Marketing Boulevard</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-8 h-8 text-primary fill-primary" />
                <span className="text-2xl font-bold">Dream Finds</span>
              </div>
              <p className="text-gray-400">
                Your partner in digital marketing excellence.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">SEO</a></li>
                <li><a href="#services" className="hover:text-white transition">Social Media</a></li>
                <li><a href="#services" className="hover:text-white transition">PPC</a></li>
                <li><a href="#services" className="hover:text-white transition">Content Marketing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest insights</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg flex-1 text-gray-900"
                />
                <button className="bg-primary px-4 py-2 rounded-r-lg hover:bg-secondary transition">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dream Finds Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
