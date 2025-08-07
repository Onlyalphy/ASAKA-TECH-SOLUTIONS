import React from "react";
import { 
  Shield, 
  CheckCircle, 
  Code, 
  ArrowRight,
  GitMerge,
  BrainCircuit,
  Landmark,
  Fingerprint
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: "Blockchain Consulting",
      description: "We guide enterprises, NGOs, and government agencies in adopting blockchain solutions that enhance transparency, security, and operational efficiency. From strategy to deployment, we help you navigate the decentralized landscape with confidence.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Smart Contract Audits",
      description: "Our rigorous audit process ensures your smart contracts are secure, bug-free, and optimized for performance. We identify vulnerabilities, verify logic, and provide actionable recommendations — so your code does what it's meant to do, safely.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: GitMerge,
      title: "Web3 Integration & Development",
      description: "Step into the decentralized web. We build and integrate Web3 applications that connect seamlessly with blockchain networks, enabling features like tokenization, decentralized identity, and wallet-based access.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: BrainCircuit,
      title: "AI-Powered Blockchain Analytics",
      description: "Unlock insights from your blockchain data using AI. We develop custom analytics tools that use machine learning to detect anomalies, forecast trends, and support decision-making — ideal for public finance and supply chains.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Landmark,
      title: "Smart Governance Systems",
      description: "We design blockchain-based platforms that improve governance processes — from transparent budgeting to automated compliance. These systems help counties, ministries, and NGOs build trust with stakeholders.",
      gradient: "from-cyan-500 to-sky-600"
    },
    {
      icon: Fingerprint,
      title: "Decentralized Identity & Credentialing",
      description: "Empower users with secure, verifiable digital identities. We implement decentralized identity (DID) systems for NGOs, education institutions, and government agencies for privacy-preserving authentication.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Code,
      title: "Custom Web & Mobile Development",
      description: "Need a scalable platform to support your mission? We build responsive web and mobile apps tailored to your needs, using modern frameworks and secure backend systems.",
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your organization's 
              operations with transparency, security, and efficiency at the forefront.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed min-h-[144px]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Analysis" },
              { step: "02", title: "Strategy & Planning" },
              { step: "03", title: "Implementation" },
              { step: "04", title: "Support & Optimization" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform -translate-y-0.5"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Let's talk about how these technologies can transform your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to={createPageUrl("Contact")}
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to={createPageUrl("Contact")}
              className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-500 hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

