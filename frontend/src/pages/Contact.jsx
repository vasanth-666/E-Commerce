import React from 'react';

const Contact = () => {
  return (
    <div className="max-padd-container py-16">
      <h2 className="text-center text-3xl font-semibold mb-8">Contact Us</h2>
      <div className="flex justify-center gap-16">
        {/* Contact Info Section */}
        <div className="flex-1 bg-white shadow-lg p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Our Office</h3>
          <p className="mb-4">123 shopping,salem,Tamilnadu</p>
          <p className="mb-4">Phone: +91 1234567890</p>
          <p className="mb-4">Email: support@gmail.com</p>

          <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
          <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 bg-white shadow-lg p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Enter your full name" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Enter your email" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="w-full py-2 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
