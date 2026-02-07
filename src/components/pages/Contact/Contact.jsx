import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const stores = [
  {
    name: "Broadway Store",
    address: "1260 Broadway, San Francisco, CA 94109",
    phone: "(208) 555-0112",
    email: "broadway@example.com",
  },
  {
    name: "Valencia Store",
    address: "1501 Valencia St, San Francisco, CA 94110",
    phone: "(208) 555-0132",
    email: "valencia@example.com",
  },
  {
    name: "Emeryville Store",
    address: "1034 36th St, Emeryville, CA 94608",
    phone: "(148) 555-0185",
    email: "emeryville@example.com",
  },
  {
    name: "Alameda Store",
    address: "1433 High St, Alameda, CA 94501",
    phone: "(145) 555-0135",
    email: "alameda@example.com",
  },
];

const Contact = () => {
  return (
    <div className="px-4 md:px-16 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12">Our Contacts</h1>

      {/* Stores */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {stores.map((store, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="font-semibold text-xl mb-2">{store.name}</h2>
            <p className="text-gray-600 mb-2">{store.address}</p>
            <p className="flex items-center text-gray-600 mb-1">
              <FaPhoneAlt className="mr-2" /> {store.phone}
            </p>
            <p className="flex items-center text-gray-600">
              <FaEnvelope className="mr-2" /> {store.email}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="border p-3 rounded w-full" />
            <input type="email" placeholder="Your Email" className="border p-3 rounded w-full" />
          </div>
          <input type="text" placeholder="Subject" className="border p-3 rounded w-full" />
          <textarea placeholder="Message" className="border p-3 rounded w-full h-32"></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>

      {/* Get in Touch / Social */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center gap-6 text-blue-600 text-xl">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Contact;
