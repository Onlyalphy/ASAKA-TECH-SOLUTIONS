import React, { useState } from "react";
import { ExternalLink, Code, Smartphone, Globe, Filter } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Wind Site Selection Dashboard",
      category: "web-app",
      type: "Web Application",
      client: "Renewable Energy Consortium",
      description: "Comprehensive geospatial tool for optimal wind farm site selection with real-time data integration.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "GIS", "Blockchain"],
      image: "dashboard",
      status: "completed"
    },
    {
      id: 2,
      title: "Smart Payment Portal",
      category: "blockchain",
      type: "Blockchain DApp",
      client: "Kenya County Government",
      description: "Transparent public fund management system with smart contract automation and audit trails.",
      technologies: ["Ethereum", "Solidity", "React.js", "Web3.js"],
      image: "blockchain",
      status: "completed"
    },
    {
      id: 3,
      title: "County Revenue Mobile App",
      category: "mobile",
      type: "Mobile Application",
      client: "County Government",
      description: "Mobile application for citizens to pay taxes and access government services seamlessly.",
      technologies: ["React Native", "Node.js", "MongoDB", "Payment APIs"],
      image: "mobile",
      status: "completed"
    },
    {
      id: 4,
      title: "NGO Transparency Platform",
      category: "web-app",
      type: "Web Platform",
      client: "International NGO",
      description: "Donor transparency and project tracking platform with blockchain verification.",
      technologies: ["Next.js", "Blockchain", "PostgreSQL", "Analytics"],
      image: "platform",
      status: "completed"
    },
    {
      id: 5,
      title: "Supply Chain Tracker",
      category: "blockchain",
      type: "Blockchain Solution",
      client: "Agricultural Cooperative",
      description: "End-to-end supply chain transparency for agricultural products from farm to market.",
      technologies: ["Hyperledger", "React.js", "IoT Integration"],
      image: "supply-chain",
      status: "completed"
    },
    {
      id: 6,
      title: "Government Services Portal",
      category: "web-app",
      type: "Government Platform",
      client: "Ministry of Digital Affairs",
      description: "Unified digital platform for citizen services with identity verification and document management.",
      technologies: ["React.js", "Node.js", "Digital Identity", "APIs"],
      image: "gov-portal",
      status: "completed"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", count: portfolioItems.length },
    { id: "web-app", label: "Web Applications", count: portfolioItems.filter(item => item.category === "web-app").length },
    { id: "blockchain", label: "Blockchain", count: portfolioItems.filter(item => item.category === "blockchain").length },
    { id: "mobile", label: "Mobile Apps", count: portfolioItems.filter(item => item.category === "mobile").length }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "web-app": return Globe;
      case "blockchain": return Code;
      case "mobile": return Smartphone;
      default: return Globe;
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From sleek dashboards to robust blockchain systems — our portfolio speaks for itself. 
              Explore the diverse range of solutions we've delivered across Africa.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "15+", label: "Government Clients" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "3", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                  <p className="font-semibold text-gray-900">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white sticky top-20 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center mr-6">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              <span className="font-medium text-gray-700">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{category.label}</span>
                <span className={`text-sm px-2 py-0.5 rounded-full ${
                  activeFilter === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => {
              const CategoryIcon = getCategoryIcon(item.category);
              return (
                <div 
                  key={item.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <CategoryIcon className="w-16 h-16 text-gray-400" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.category === "blockchain" ? "bg-purple-100 text-purple-700" :
                        item.category === "web-app" ? "bg-blue-100 text-blue-700" :
                        item.category === "mobile" ? "bg-green-100 text-green-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-blue-600 mb-3">{item.client}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          +{item.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform group-hover:scale-105">
                      View Project Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks that power our innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React.js", "Node.js", "Blockchain", "Solidity", "PostgreSQL", "MongoDB",
              "Next.js", "React Native", "Web3.js", "Ethereum", "AWS", "Docker"
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{tech.charAt(0)}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Want to Join Our Portfolio?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Let's create something amazing together. Discuss your project and see 
            how we can bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:info@asakatech.co.ke"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </a>
            <a
              href="tel:+254701513729"
              className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-500 hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

