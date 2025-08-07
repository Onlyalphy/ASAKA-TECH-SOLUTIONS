import React from "react";
import { Star, Quote, Users, Award, CheckCircle } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Asaka Tech Solutions helped us rethink how we manage public payments. Their blockchain expertise is unmatched, and the transparency they brought to our fund disbursement process has completely transformed our operations.",
      author: "Sarah Mwangi",
      position: "County Finance Officer",
      organization: "Kiambu County Government",
      location: "Kenya",
      rating: 5,
      project: "Smart Payment System",
      avatar: "SM",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      quote: "Professional, precise, and deeply knowledgeable. The smart contract audit they performed identified critical vulnerabilities we hadn't noticed. I highly recommend them for any blockchain security needs.",
      author: "Dr. James Ochieng",
      position: "CTO & Tech Lead",
      organization: "East Africa Development NGO",
      location: "Nairobi, Kenya",
      rating: 5,
      project: "Smart Contract Audit",
      avatar: "JO",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      quote: "The wind site selection tool exceeded all our expectations. The integration of blockchain for data integrity and the sophisticated geospatial analysis capabilities have revolutionized our renewable energy planning process.",
      author: "Maria Santos",
      position: "Project Manager",
      organization: "Renewable Energy Consortium",
      location: "East Africa",
      rating: 5,
      project: "Wind Site Selection Tool",
      avatar: "MS",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      id: 4,
      quote: "Working with Asaka Tech was a game-changer for our organization. Their deep understanding of both technology and the African context made them the perfect partner for our digital transformation journey.",
      author: "Robert Kimani",
      position: "Director of Operations",
      organization: "Agricultural Cooperative Union",
      location: "Central Kenya",
      rating: 5,
      project: "Supply Chain Platform",
      avatar: "RK",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      quote: "The team's commitment to excellence and attention to detail is remarkable. They didn't just build us a system; they provided a comprehensive solution that addressed all our transparency and accountability needs.",
      author: "Grace Wanjiku",
      position: "Program Director",
      organization: "Transparency International Kenya",
      location: "Nairobi, Kenya",
      rating: 5,
      project: "Transparency Platform",
      avatar: "GW",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      id: 6,
      quote: "Exceptional technical expertise combined with outstanding project management. They delivered our mobile application on time, within budget, and exceeded our quality expectations.",
      author: "David Mutua",
      position: "IT Manager",
      organization: "Machakos County",
      location: "Machakos, Kenya",
      rating: 5,
      project: "Mobile Revenue App",
      avatar: "DM",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const stats = [
    { number: "100%", label: "Client Satisfaction", description: "Every client recommends our services" },
    { number: "50+", label: "Projects Delivered", description: "Successful implementations across sectors" },
    { number: "4.9/5", label: "Average Rating", description: "Consistently high client reviews" },
    { number: "95%", label: "Repeat Clients", description: "Long-term partnerships built on trust" }
  ];

  const clientLogos = [
    "County Government of Kiambu",
    "Ministry of Digital Affairs",
    "Renewable Energy Consortium", 
    "Agricultural Cooperative Union",
    "East Africa Development NGO",
    "Transparency International Kenya"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hear from the organizations we've helped transform with our blockchain solutions. 
              Real feedback from real clients across Africa.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                  <h4 className="font-semibold text-gray-900 mb-1">{stat.label}</h4>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
              >
                {/* Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-200" />
                </div>

                {/* Quote */}
                <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light italic">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-lg">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-blue-600 font-medium text-sm">{testimonial.position}</p>
                      <p className="text-gray-600 text-sm">{testimonial.organization}</p>
                      <p className="text-gray-500 text-xs">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted By Leading Organizations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to work with government agencies, NGOs, and private enterprises across East Africa
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{client.split(' ').map(word => word[0]).slice(0, 2).join('')}</span>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Testimonial */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes Us Different?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clients consistently highlight these key differentiators
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Technical Excellence",
                quote: "Their deep blockchain expertise and attention to security details is unmatched in the region.",
                author: "CTO, Major NGO"
              },
              {
                icon: Users,
                title: "Client Partnership",
                quote: "They don't just deliver code - they become true partners invested in our long-term success.",
                author: "Director, County Government"
              },
              {
                icon: CheckCircle,
                title: "Reliable Delivery",
                quote: "Every milestone was met on time, with quality that exceeded our expectations consistently.",
                author: "Project Manager, Energy Sector"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <testimonial.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{testimonial.title}</h3>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-blue-600 font-medium text-sm">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Experience the same level of excellence and partnership that our clients rave about. 
            Let's discuss your blockchain project today.
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
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

