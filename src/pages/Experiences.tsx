import React from 'react';

const Experiences: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-900 text-white">
      {/* Left content area */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          We have over 20 years of experience in 
          <span className="text-blue-400"> laundry services</span>
        </h2>
        
        <div className="grid grid-cols-2 gap-8">
          {/* First row of stats */}
          <div>
            <div className="text-5xl md:text-6xl font-bold">
              300k<span className="text-blue-400">+</span>
            </div>
            <p className="text-lg text-gray-300 mt-2">Happy customers</p>
          </div>
          
          <div>
            <div className="text-5xl md:text-6xl font-bold">
              80<span className="text-blue-400">+</span>
            </div>
            <p className="text-lg text-gray-300 mt-2">Laundry machines</p>
          </div>
          
          {/* Second row of stats */}
          <div>
            <div className="text-5xl md:text-6xl font-bold">
              100<span className="text-blue-400">%</span>
            </div>
            <p className="text-lg text-gray-300 mt-2">Customer satisfaction</p>
          </div>
          
          <div>
            <div className="text-5xl md:text-6xl font-bold">
              20<span className="text-blue-400">+</span>
            </div>
            <p className="text-lg text-gray-300 mt-2">Staff members</p>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <button className="bg-blue-400 hover:bg-blue-500 text-white py-4 px-8 rounded-full font-medium transition duration-300">
            About us
          </button>
          <button className="border border-white hover:bg-white hover:text-slate-900 text-white py-4 px-8 rounded-full font-medium transition duration-300">
            Browse all services
          </button>
        </div>
      </div>
      
      {/* Right image area */}
      <div className="w-full md:w-1/2 relative">
        <img 
          src="/api/placeholder/600/800" 
          alt="Mother and daughter doing laundry together" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Experiences;