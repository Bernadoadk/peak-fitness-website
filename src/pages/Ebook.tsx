import React from 'react';
import { Book, Check } from 'lucide-react';

function Ebook() {
  const features = [
    'Comprehensive workout plans for all levels',
    'Detailed exercise instructions with form guides',
    'Nutrition plans and meal prep ideas',
    'Progress tracking templates',
    'Recovery and mobility routines',
    'Access to exclusive video content'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Transform Your Fitness Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Download our comprehensive fitness guide and take the first step towards achieving your goals.
          </p>
          
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="text-green-500 h-6 w-6" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <div className="text-3xl font-bold mb-2">$29.99</div>
            <div className="text-gray-600">One-time purchase, lifetime access</div>
          </div>

          <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors flex items-center gap-2">
            <Book className="h-5 w-5" />
            Download E-Book Now
          </button>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Fitness E-Book Preview"
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
            <div className="text-2xl font-bold text-red-500">200+</div>
            <div className="text-gray-600">Pages of Content</div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Readers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Fitness Enthusiast',
              content: 'This e-book completely transformed my approach to fitness. The workout plans are easy to follow and the results are amazing!'
            },
            {
              name: 'Mike Peterson',
              role: 'Amateur Athlete',
              content: "The nutrition advice alone is worth the price. I've seen significant improvements in my performance since following the meal plans."
            },
            {
              name: 'Emily Chen',
              role: 'Beginner',
              content: 'As someone new to fitness, this guide has been invaluable. The detailed instructions and progress tracking tools keep me motivated.'
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-gray-500 text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ebook;