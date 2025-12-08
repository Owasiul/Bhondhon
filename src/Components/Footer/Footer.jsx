import { Facebook, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ----- Left Section ----- */}
        <div>
          <h2 className="text-2xl font-semibold text-green-400 mb-3">
            Community Events
          </h2>
          <p className="leading-relaxed">
            Join us in making a difference in our communities through
            social service events, environmental initiatives, and
            volunteer activities.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <button className="btn btn-circle hover:text-blue-500">
              <Facebook/>
            </button>
            <button className="btn btn-circle hover:text-pink-500">
              <Instagram/>
            </button>
            <button className="btn btn-circle hover:text-blue-500">
              <Linkedin/>
            </button>
          </div>
        </div>

        {/* ----- Quick Links ----- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a className="hover:text-green-400" href="#">Home</a></li>
            <li><a className="hover:text-green-400" href="#">Browse Events</a></li>
            <li><a className="hover:text-green-400" href="#">Create Event</a></li>
          </ul>
        </div>

        {/* ----- Contact ----- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <p>Email: info@Bhondhon.com</p>
          <p className="mt-2">Phone: +880 1234-567890</p>
          <p className="mt-2">Dhaka, Bangladesh</p>
        </div>
      </div>

      <hr className="border-gray-700 mt-10" />
    </footer>
    );
};

export default Footer;