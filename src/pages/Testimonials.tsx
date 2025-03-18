import React from 'react';

interface TestimonialProps {
  name: string;
  location: string;
  testimonial: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, location, testimonial, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 bg-blue-100 rounded-full overflow-hidden mb-6">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 text-blue-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 text-center mb-6">{testimonial}</p>
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-blue-400">{location}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "John Carter",
      location: "Los Angeles, CA",
      testimonial: "Ac ridiculus ultricies dolor amet quam ornare ultricies vitae tortor. Metus, donec facilisis porttitor integerdomer egestas felis condimentum.",
      image: "/path/to/john-image.jpg"
    },
    {
      name: "Sophie Moore",
      location: "Los Angeles, CA",
      testimonial: "Metus, donec facilisis porttitorinteger domer egestas felis condime ntumac ridiculus ultricies dolor amet quam ornare ultricies vitae felis ac.",
      image: "/path/to/sophie-image.jpg"
    },
    {
      name: "Matt Cannon",
      location: "Los Angeles, CA",
      testimonial: "Integerdomer egestas felis condimen tumac ridiculus ultricies dolor amet quam ornare ultricies vitae tortormet tusdonec facilisis porttitor felis dolor.",
      image: "/path/to/matt-image.jpg"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">What our testimonials</h2>
          <h3 className="text-4xl font-bold text-blue-400 mb-6">say about us</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              testimonial={testimonial.testimonial}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;