import React from 'react';
import { ArrowRight, Activity, Users, Trophy, Clock } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section 
        className="h-[90vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transform Your Body,<br />Transform Your Life
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Join Peak Fitness and experience state-of-the-art facilities, expert trainers, and a supportive community dedicated to helping you achieve your fitness goals.
          </p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors inline-flex items-center gap-2">
            Start Your Journey <ArrowRight />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Peak Fitness?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer more than just a gym - we provide a complete fitness experience designed to help you reach your peak potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <Activity className="h-12 w-12 text-red-500" />,
              title: "Modern Equipment",
              description: "State-of-the-art facilities and latest fitness technology"
            },
            {
              icon: <Users className="h-12 w-12 text-red-500" />,
              title: "Expert Trainers",
              description: "Certified professionals to guide your fitness journey"
            },
            {
              icon: <Trophy className="h-12 w-12 text-red-500" />,
              title: "Proven Results",
              description: "Thousands of success stories and transformations"
            },
            {
              icon: <Clock className="h-12 w-12 text-red-500" />,
              title: "24/7 Access",
              description: "Train on your schedule with round-the-clock access"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8">
            Join now and get 50% off your first month membership
          </p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors">
            Claim Offer
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;