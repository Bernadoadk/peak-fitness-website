import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="h-[60vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">About Peak Fitness</h1>
          <p className="text-xl max-w-2xl">
            Since 1970, we've been dedicated to transforming lives through fitness, 
            building a community of passionate individuals committed to health and wellness.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Peak Fitness, we believe that everyone deserves access to top-quality fitness 
              facilities and expert guidance. Our mission is to create an inclusive environment 
              where people of all fitness levels can achieve their personal goals.
            </p>
            <p className="text-gray-600">
              We're more than just a gym - we're a community of dedicated individuals supporting 
              each other on the journey to better health and wellness.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Users className="h-12 w-12 text-red-500" />, label: "10,000+ Members" },
              { icon: <Target className="h-12 w-12 text-red-500" />, label: "500+ Classes Monthly" },
              { icon: <Award className="h-12 w-12 text-red-500" />, label: "50+ Expert Trainers" },
              { icon: <Heart className="h-12 w-12 text-red-500" />, label: "1000+ Success Stories" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                {stat.icon}
                <div className="mt-2 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Davidson",
                role: "Head Trainer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                bio: "15+ years of experience in personal training and sports nutrition."
              },
              {
                name: "Sarah Martinez",
                role: "Yoga Instructor",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                bio: "Certified yoga instructor with expertise in mindfulness and meditation."
              },
              {
                name: "Mike Reynolds",
                role: "Fitness Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                bio: "Former professional athlete dedicated to helping others achieve their goals."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-red-500 mb-4">{member.role}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Community",
              description: "Building a supportive environment where everyone feels welcome and motivated."
            },
            {
              title: "Excellence",
              description: "Providing top-quality equipment, facilities, and instruction to help you achieve your best."
            },
            {
              title: "Innovation",
              description: "Staying at the forefront of fitness technology and training methodologies."
            }
          ].map((value, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your fitness journey today and become part of something greater.
          </p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;