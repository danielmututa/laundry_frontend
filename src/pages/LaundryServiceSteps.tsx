import React from 'react';
import ScrollReveal from '../components/SrcollReveal/ScrollReveal';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const LaundryServiceSteps: React.FC = () => {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Prepare all your clothes",
      description: "Tellus dui dictumst laoreet netus consectetur blandit volutpat nunc. Gravida volutpat pharetra sem neque.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-400">
          <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm9 5v8H6v-8h12z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "We'll pick up your clothes",
      description: "Volutpat convallis vestibulum odio arcu tempor, elit ultrices. Non lorem aenean posuere sed netus purus.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-400">
          <path d="M19.15 8a2 2 0 0 0-1.72-1H15V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.18a3 3 0 0 0 5.64 0h2.36a3 3 0 0 0 5.82 1a2.94 2.94 0 0 0 0-1H19a1 1 0 0 0 1-1v-5a1.04 1.04 0 0 0-.13-.46L19.15 8zM7.5 17a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm2.5-3H7V6h8v8H9.78a3 3 0 0 0-1.78-1v1zm6.5 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm3-3h-1.42a3 3 0 0 0-1.58-1v1h-2V9h2.28l1.72 2.42V14z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Have them back the next day",
      description: "Aenean dolor blandit morbi nec felis felis lacus. Dapibus neque, aliquet amet, tortor imperdiet. Nulla eu mauris.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-400">
          <path d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3c0 4.31 1.8 6.91 4.82 7A6 6 0 0 0 11 17.91V20H7v2h10v-2h-4v-2.09A6 6 0 0 0 17.18 15c3-.1 4.82-2.7 4.82-7V5a1 1 0 0 0-1-1zM4 8V6h2v6.83C4.22 12.08 4 9.3 4 8zm14 4.83V6h2v2c0 1.3-.22 4.08-2 4.83z" />
        </svg>
      ),
    },
  ];

  const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
    return (
      <div className="flex items-start space-x-4 mb-8">
        <div className="flex-shrink-0 w-12 h-12 text-blue-400">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-navy-800 mb-1">
            {number}. {title}
          </h3>
          <p className="text-gray-500 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row">
          {/* Left image area with left scroll reveal */}
          <ScrollReveal 
            direction="left" 
            delay={0.2} 
            className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8"
          >
            <div className="relative h-full">
              <div className="rounded-lg overflow-hidden shadow-lg h-full">
                <img 
                  src="/api/placeholder/600/600" 
                  alt="Person with blue clothing near washing machine" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
          
          {/* Right content area with up scroll reveal */}
          <ScrollReveal 
            direction="up" 
            delay={0.4} 
            className="lg:w-1/2 lg:pl-8"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-2">
              We offer you high-quality <span className="text-blue-400">laundry pickup & delivery</span> services
            </h2>
            <div className="mt-10">
              {steps.map((step) => (
                <Step key={step.number} {...step} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default LaundryServiceSteps;