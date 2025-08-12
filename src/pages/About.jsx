import React from "react";
import { Compass, Shield, Code, Users, CheckCircle } from "lucide-react";
import AlphonceImage from "../assets/Alphonce.jpg";
import { Blocks } from "lucide-react";

export default function About() {
  const expertise = [
    {
      icon: Shield,
      title: "Blockchain Consulting",
      desc: "Strategic integration for real-world impact"
    },
    {
      icon: CheckCircle,
      title: "Smart Contract Audits",
      desc: "Precision code reviews for security and reliability"
    },
    {
      icon: Blocks,
      title: "Asset Tokenization",
      desc: "Digitization of assets for more liquidity and security"
    }
  ];

  const whyChooseUs = [
    "Deep understanding of governance and public sector needs",
    "Proven track record in blockchain implementation",
    "Commitment to ethical, scalable tech solutions",
    "Personalized consulting and hands-on support"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Asaka Tech</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're pioneering the future of blockchain technology in Africa, empowering organizations 
              with secure, scalable, and smart solutions that drive transparency and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Mission */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Compass className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
                Empowering Transparency Through Technology
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Asaka Tech Solutions, we believe that trust is built on transparency — and technology is the bridge. 
                Our mission is to help organizations unlock the potential of blockchain to create systems that are 
                secure, efficient, and accountable.
              </p>
            </div>
            
            {/* Expertise */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h3>
                <p className="text-gray-600 mb-6">
                  Whether you're a government agency seeking better fund management, an NGO aiming for operational clarity, 
                  or an enterprise exploring decentralized solutions — we're your trusted partner.
                </p>
                <div className="space-y-4">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform -rotate-3"></div>
              <div className="relative w-full h-96 bg-white p-8 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <img 
                    src={AlphonceImage}
                    alt="Alphonce Ochieng - Founder & Lead Consultant" 
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
                  />
                  <h3 className="text-2xl font-bold text-gray-900">Alphonce Ochieng</h3>
                  <p className="text-blue-600 font-medium">Founder & Lead Consultant</p>
                </div>
              </div>
            </div>
            
            <div className="lg:order-first">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet the Founder</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Alphonce is a blockchain strategist and software developer with a passion for solving societal 
                challenges through technology. With a background in decentralized systems and a sharp analytical 
                mind, he's led projects that improve governance, streamline payments, and enhance transparency 
                across sectors.
              </p>
              <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg">
                <p className="text-lg text-gray-700 italic">
                  "I started Asaka Tech Solutions to bring clarity and accountability to systems that matter most — 
                  from public finance to humanitarian aid."
                </p>
                <p className="text-right mt-4 font-semibold text-gray-900">— Alphonce</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300">
                <CheckCircle className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <p className="font-medium text-gray-800">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can help your organization leverage blockchain technology 
            for maximum impact and efficiency.
          </p>
          <div className="flex justify-center">
            <a
              href={`mailto:info@asakatech.co.ke`}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

