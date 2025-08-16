import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const sections = [
    {
      title: "Who We Are",
      content:
        "ONETH CORPORATION is a multi-service enterprise built to redefine convenience, quality, and trust in the real estate, hospitality, and service industries. From land management and house rentals to hotel bookings, restaurant services, sports, agriculture, and deliveries — we bring a diverse range of solutions under one trusted name.",
    },
    {
      title: "Our Vision",
      content:
        "To become a leading hub where people, businesses, and opportunities connect seamlessly — improving lives through innovation, reliability, and excellence.",
    },
    {
      title: "Our Mission",
      content:
        "To provide top-tier services that are accessible, efficient, and customer-focused, while empowering communities and driving sustainable growth.",
    },
    {
      title: "What We Do",
      content: `- Real Estate & Land Management – Helping clients buy, sell, rent, and manage properties with transparency and professionalism.\n
- Hospitality – Offering smooth hotel bookings, restaurant experiences, and leisure services.\n
- Delivery & Logistics – Fast and reliable delivery solutions for goods and services.\n
- Specialized Services – Agriculture, sports facilities, and other community-focused projects.`,
    },
    {
      title: "Why Choose Us?",
      content: `- Trusted Expertise – Years of experience across multiple industries.\n
- Innovative Solutions – Technology-driven platforms for seamless user experiences.\n
- Customer First – Our clients are at the heart of everything we do.\n
- Multi-Sector Reach – One brand, many services, all under one roof.`,
    },
  ];

  // Framer Motion variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-black text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">ONETH CORPORATION</h1>
          <ul className="flex gap-6">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-500">
          About Us
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
                {section.title}
              </h3>
              <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} ONETH CORPORATION. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
