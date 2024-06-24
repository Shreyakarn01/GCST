import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        name: "Sara T.",
        message: "I was amazed by the accuracy and convenience of the digital eye checkup for anemia detection. The process was quick, and the results were provided in a clear and understandable manner."
    },
    {
        name: "John M.",
        message: "The digital eye checkup for anemia was a game-changer for me. It was non-invasive and provided me with valuable insights into my health. Highly recommended!"
    },
    {
        name: "Emily R.",
        message: "I was skeptical at first, but the digital eye checkup for anemia was surprisingly accurate. It's a great option for anyone looking for a hassle-free way to monitor their health."
    },
    {
        name: "David S.",
        message: "I had been feeling fatigued for weeks, and the digital eye checkup revealed that I had anemia. Thanks to this innovative technology, I was able to seek treatment early and improve my health."
    },
    {
        name: "Sophia L.",
        message: "As someone with a busy schedule, the digital eye checkup for anemia was incredibly convenient. I got my results quickly and was able to take action to improve my health."
    },
    {
        name: "Michael B.",
        message: "The digital eye checkup for anemia was a seamless experience. The staff was professional, and the technology was impressive. I would definitely use this service again."
    },
    {
        name: "Jessica W.",
        message: "I was impressed by the level of detail provided in my digital eye checkup results. It gave me a comprehensive overview of my health and motivated me to make positive changes."
    },
    {
        name: "Daniel H.",
        message: "The digital eye checkup for anemia was easy to use, and the results were delivered promptly. It's a great tool for monitoring your health from the comfort of your home."
    }
];

const TestimonialSection = () => {
    return (
        <section className="py-10 bg-gray-100 mb-20 -mt-44">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Customer Testimonials</h2>
                    <h5 className="text-lg mt-2">Prioritising patient health.</h5>
                </div>
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    responsive={{
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 3
                        }
                    }}

                    navContainerClass="owl-nav flex justify-between items-center mt-4"
                    navClass={[
                        "owl-prev text-4xl text-gray-500",
                        "owl-next text-4xl text-gray-500"
                    ]}
                    navText={[
                        '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>',
                        '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>'
                    ]}
                >
                    {testimonials.map((testimonial, index) => (
                        <div className="item" key={index}>
                            <div className="shadow-lg p-6 bg-blue-200 rounded-2xl hover:bg-blue-100 transition-transform duration-300 hover:scale-105 mx-2">
                                {/* <img
                                    loading="lazy"
                                    src=""
                                    className="testimonial-quotes-img testimonial-rotate-quotes-img mx-auto mb-4"
                                    alt="left quotes sign"
                                /> */}
                                <p className="text-gray-600 h-24 overflow-hidden pt-4">{testimonial.message}</p>
                                <h4 className="text-xl font-bold mb-2 h-16 overflow-hidden pt-4">{testimonial.name}</h4>
                                {/* <img
                                    loading="lazy"
                                    src=""
                                    className="testimonial-quotes-img mx-auto mt-4"
                                    alt="left quotes sign"
                                /> */}
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    );
};

export default TestimonialSection;
