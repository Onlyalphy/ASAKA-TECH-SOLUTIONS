import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Shield, Code, Zap, ArrowRight, CheckCircle, Star } from "lucide-react";
import { BlocksIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-magenta-600/5" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Trusted by Government Agencies & Enterprises
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Secure.
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
                Scalable.
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-600 to-pink-600">
                Smart.
              </span>{" "}
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed font-light">
              Blockchain Solutions for the Future of<br />
              <span className="font-medium text-gray-800">Governance and Enterprise</span>
            </p>
            
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              We help enterprises, NGOs, and government agencies harness blockchain technology 
              for transparency, efficiency, and trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to={createPageUrl("Contact")}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center"
              >
                Book a Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to={createPageUrl("Contact")}
                className="group bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert blockchain solutions tailored to your organization's unique needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                icon: Shield,
                title: "Blockchain Consulting",
                description: "Strategic guidance to help you integrate blockchain into your operations with confidence.",
                color: "blue"
              },
              {
                icon: CheckCircle,
                title: "Smart Contract Audits",
                description: "Rigorous code reviews to ensure your smart contracts are secure, efficient, and error-free.",
                color: "green"
              },
              {
                icon: BlocksIcon,
                title: "Asset Tokenization",
                description: "Asset digitization for more liquidity and security, built with modern tech stacks.",
                color: "purple"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real Impact, Real Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore how we've helped organizations like yours solve complex challenges with blockchain
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {[
              {
                title: "Land Registry App",
                description: "A real-estate app that redefines land ownership and acquisition.",
                icon: Zap,
                gradient: "from-green-500 to-emerald-600"
              },
              {
                title: "Smart Payment System for Counties",
                description: "A blockchain-based solution improving transparency in public fund disbursement across Kenya.",
                icon: Shield,
                gradient: "from-blue-500 to-indigo-600"
              }
            ].map((study, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${study.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <study.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{study.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to={createPageUrl("CaseStudies")}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {[
              {
                quote: "Asaka Tech Solutions helped us rethink how we manage public payments. Their blockchain expertise is unmatched.",
                author: "County Finance Officer",
                location: "Kenya",
                rating: 5
              },
              {
                quote: "Professional, precise, and deeply knowledgeable. Highly recommend for smart contract audits.",
                author: "NGO Tech Lead",
                location: "East Africa",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to={createPageUrl("Testimonials")}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read More Testimonials
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Transform Your Systems?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's talk about how blockchain can work for you. Book a consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              to={createPageUrl("Contact")}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
            <div className="flex items-center">
              <span className="font-semibold">📧 info@asakatech.co.ke</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">📞 +254 701 513 729</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">📍 Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

