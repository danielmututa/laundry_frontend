import React from 'react';

interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center">
      <div className="mb-6">
        <img src={icon} alt={title} className="w-24 h-24" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: '/icons/wash-icon.svg',
      title: 'Wash service',
      description: 'Ultricies posuere quisque sollicitudin ut senectus nascetur semper turpism sem turpis dictumst habitant enim.'
    },
    {
      icon: '/icons/dry-icon.svg',
      title: 'Dry service',
      description: 'Tincidunt magna luctus porta egestas morbi commodo nullam mauris enim pretium ante lacus morbi id viverra.'
    },
    {
      icon: '/icons/fold-icon.svg',
      title: 'Fold service',
      description: 'Quam quis aliquet facilisis amet feugiat a sit adipiscing morbi sociis dapibus amet pellentesque.'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-800">A wide range </span>
            <span className="text-blue-400">of services</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellusolm mollis sit aliquam sit nullam neque ultrices dolor sit amet conse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-6">
          <a href="#packages" className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-4 px-8 rounded-full transition-colors">
            Browse packages
          </a>
          <a href="#services" className="border border-gray-300 hover:border-gray-400 text-gray-800 font-medium py-4 px-8 rounded-full transition-colors">
            Our services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;