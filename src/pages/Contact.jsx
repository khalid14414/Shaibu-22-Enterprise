import React from "react";

const ContactPage = () => {
  return (
    <section className="bg-white px-4 md:px-8" id="contact">
        <div className="bg-green-900 mb-16 text-white text-center py-12">
  <h1 className="text-4xl font-bold">Contact Us</h1>
  <p className="mt-2 text-sm">We’re here to help. Let’s connect.</p>
</div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-green-900 mb-6">Get In Touch</h2>
          <p className="text-gray-700 mb-4">
            We'd love to hear from you. Whether you're curious about our products, a partnership, or just want to talk — we're ready to answer all questions.
          </p>

          <div className="space-y-4 text-gray-600 text-sm">
            <p>
              📍 Ejura Sekyedumase Municipal  
            </p>
            <p>
              📞 Phone: <a href="tel:0554466361" className="text-green-800 hover:underline">0554466361</a>
            </p>
            <p>
              📧 Email: <a href="mailto:shaibuyahaya81@gmail.com" className="text-green-800 hover:underline">shaibuyahaya81@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Optional Google Map */}
      <div className="mt-16 w-full h-64">
        <iframe
          title="Shaibu 22 Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112951.15081199132!2d-0.28632669576545594!3d5.545342813894912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf977b315ea169%3A0x2aaf4fbb30ab22b5!2sAblekuma%2C%20Accra!5e0!3m2!1sen!2sgh!4v1749690504642!5m2!1sen!2sgh"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-md shadow"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
