import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-full">
      {/* Newsletter Section */}
      <div className="bg-gray-50 p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-start mb-6 md:mb-0">
            <div className="bg-blue-400 rounded-full p-4 mr-4 flex items-center justify-center">
              {/* Envelope icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Subscribe to our newsletter</h3>
              <p className="text-gray-600 mt-1">
                Lorem ipsum dolor sit amet consectetur quis quis facilisi elementum risus accumsan.
              </p>
            </div>
          </div>
          
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-l-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-64"
            />
            <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-r-full transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-gray-200 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-blue-600 p-2 rounded mr-2 flex items-center justify-center">
              {/* Laundry icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 5a3 3 0 015.83-.78A3 3 0 0115 5v1h1a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h1V5zm7 1h-4v1h4V6zm-7 2v7h12V8H5z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-blue-400 font-bold text-xl">FreshWash</span>
            
            <div className="ml-6 text-gray-500 text-sm">
              Copyright © FreshWash | Designed by{" "}
              <a href="#" className="text-blue-400 hover:underline">Xperitech Lab</a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300">
              {/* Facebook icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300">
              {/* Twitter icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300">
              {/* Instagram icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;