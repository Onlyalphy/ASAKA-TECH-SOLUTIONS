import React from "react";
import { Wind, DollarSign, Shield, Users, BarChart, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Wind Site Selection Tool",
      subtitle: "Geospatial Renewable Energy Planning",
      client: "Renewable Energy Consortium",
      sector: "Energy & Environment",
      duration: "8 months",
      team_size: "5 developers",
      icon: Wind,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      challenge: "The client needed a comprehensive tool to identify optimal locations for wind farm development across East Africa, incorporating multiple data sources including wind patterns, topography, infrastructure access, and environmental regulations.",
      solution: "We developed a sophisticated geospatial application with blockchain integration for data integrity and transparency. The system combines meteorological data, satellite imagery, and regulatory information to provide data-driven recommendations for wind farm locations.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Blockchain", "GIS Systems", "Machine Learning"],
      results: [
        "Reduced site selection time by 75%",
        "Improved accuracy of wind resource assessment by 40%",
        "Enabled transparent decision-making process",
        "Facilitated $50M+ in renewable energy investments"
      ],
      keyFeatures: [
        "Interactive geospatial mapping interface",
        "Real-time weather data integration",
        "Blockchain-based data verification",
        "Automated feasibility scoring",
        "Environmental impact assessment",
        "Regulatory compliance checking"
      ]
    },
    {
      id: 2,
      title: "Smart Payment System for Counties",
      subtitle: "Blockchain-Based Public Fund Management",
      client: "Kenya County Government",
      sector: "Government & Public Sector",
      duration: "12 months",
      team_size: "8 developers",
      icon: DollarSign,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      challenge: "County governments needed a transparent, secure system for managing public fund disbursements while ensuring accountability and reducing opportunities for corruption in the payment process.",
      solution: "We built a comprehensive blockchain-based payment system that provides end-to-end transparency in public fund management. The system features smart contracts for automated approvals, multi-signature wallets for security, and real-time audit trails.",
      technologies: ["Ethereum", "Solidity", "React.js", "Node.js", "MongoDB", "Web3.js"],
      results: [
        "100% transparency in fund disbursement",
        "Reduced payment processing time by 60%",
        "Eliminated fraudulent transactions",
        "Increased public trust in government spending"
      ],
      keyFeatures: [
        "Smart contract automation",
        "Multi-signature approval workflows",
        "Real-time transaction tracking",
        "Public transparency dashboard",
        "Mobile payment integration",
        "Comprehensive audit trails"
      ]
    }
  ];

  const metrics = [
    { number: "2", label: "Major Case Studies", description: "Government and enterprise projects" },
    { number: "$75M+", label: "Value Facilitated", description: "Through our blockchain solutions" },
    { number: "100%", label: "Success Rate", description: "All projects delivered successfully" },
    { number: "85%", label: "Avg. Efficiency Gain", description: "Process improvement for clients" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Studies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real impact, real results. Explore how we've helped organizations across Africa 
              solve complex challenges with innovative blockchain solutions.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">{metric.number}</h3>
                  <h4 className="font-semibold text-gray-900 mb-1">{metric.label}</h4>
                  <p className="text-sm text-gray-600">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="relative">
                {/* Header */}
                <div className={`bg-gradient-to-br ${study.bgGradient} rounded-3xl p-12 mb-16`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className={`w-16 h-16 bg-gradient-to-br ${study.gradient} rounded-2xl flex items-center justify-center mb-8`}>
                        <study.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">{study.title}</h2>
                      <p className="text-xl text-gray-700 mb-6">{study.subtitle}</p>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                          <p className="text-gray-700">{study.client}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Sector</h4>
                          <p className="text-gray-700">{study.sector}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                          <p className="text-gray-700">{study.duration}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Team Size</h4>
                          <p className="text-gray-700">{study.team_size}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6">
                          <study.icon className="w-16 h-16 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Project Showcase</h3>
                        <p className="text-gray-600">Interactive demo available upon request</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-3 gap-12">
                  {/* Challenge & Solution */}
                  <div className="lg:col-span-2 space-y-12">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Solution</h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">{study.solution}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        {study.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="bg-gray-50 px-4 py-2 rounded-lg text-center">
                            <span className="text-sm font-medium text-gray-700">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-8">
                    {/* Results */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Key Results</h3>
                      <div className="space-y-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>
                      <div className="space-y-3">
                        {study.keyFeatures.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < caseStudies.length - 1 && (
                  <div className="mt-32 border-t border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Project Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The proven methodology behind every successful case study
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Discovery",
                description: "Deep dive into requirements, challenges, and objectives with stakeholder interviews."
              },
              {
                icon: BarChart,
                title: "Strategy",
                description: "Develop comprehensive roadmap with clear milestones and success metrics."
              },
              {
                icon: Shield,
                title: "Implementation",
                description: "Agile development with regular updates, testing, and security audits."
              },
              {
                icon: CheckCircle,
                title: "Delivery",
                description: "Deployment, training, and ongoing support to ensure project success."
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready for Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can help your organization achieve similar results 
            with our proven blockchain solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:info@asakatech.co.ke"
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="tel:+254701513729"
              className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-500 hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

