import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

function Location() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Find Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-red-500 h-6 w-6" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-600">
                    123 Fitness Street<br />
                    Gym City, GC 12345
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-red-500 h-6 w-6" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-600">(555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-red-500 h-6 w-6" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-600">info@peakfitness.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-red-500 h-6 w-6" />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-gray-600">
                    Monday - Friday: 5:00 AM - 11:00 PM<br />
                    Saturday - Sunday: 7:00 AM - 9:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Get a Free Day Pass</h2>
            <p className="mb-6">
              Want to check out our facilities? Get a free day pass and experience
              everything Peak Fitness has to offer.
            </p>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
              Claim Free Pass
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px]">
            {/* Replace with actual map implementation */}
            <div className="h-full flex items-center justify-center text-gray-500">
              Interactive Map Coming Soon
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Gym Interior"
              className="rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Gym Equipment"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              q: "Is parking available?",
              a: "Yes, we offer free parking for all members in our secure parking lot."
            },
            {
              q: "Are there lockers available?",
              a: "Yes, we provide lockers free of charge. Please bring your own lock."
            },
            {
              q: "Do you offer towel service?",
              a: "Yes, fresh towels are available for a small fee or included with premium memberships."
            },
            {
              q: "Is there a dress code?",
              a: "We require appropriate athletic wear and closed-toe shoes for your safety."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Location;