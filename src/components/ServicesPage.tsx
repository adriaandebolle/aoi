import React from "react";
import { Link } from "react-router-dom";

const ServicesPage = ({ t, services, language }) => (
  <div className="py-20 bg-gray-50 min-h-screen">
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-5xl font-bold text-center mb-4">
        {t.services.title}
      </h1>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
        {t.services.subtitle}
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <Link
          to="/services/corporate"
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#b9a55c]">
            {t.services.corporate.title}
          </h2>
          <p className="text-gray-600 mb-6">
            {t.services.corporate.description}
          </p>
          <ul className="space-y-3">
            {services[language].corporate.map((service, i) => (
              <li key={i} className="flex items-start">
                <span className="text-[#b9a55c] mr-2">•</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-[#b9a55c] font-semibold hover:underline">
            {t.services.moreInfo}
          </div>
        </Link>

        <Link
          to="/services/digital"
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#b9a55c]">
            {t.services.digital.title}
          </h2>
          <p className="text-gray-600 mb-6">
            {t.services.digital.description}
          </p>
          <ul className="space-y-3">
            {services[language].digital.map((service, i) => (
              <li key={i} className="flex items-start">
                <span className="text-[#b9a55c] mr-2">•</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-[#b9a55c] font-semibold hover:underline">
            {t.services.moreInfo}
          </div>
        </Link>

        <Link
          to="/services/private"
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#b9a55c]">
            {t.services.private.title}
          </h2>
          <p className="text-gray-600 mb-6">
            {t.services.private.description}
          </p>
          <ul className="space-y-3">
            {services[language].private.map((service, i) => (
              <li key={i} className="flex items-start">
                <span className="text-[#b9a55c] mr-2">•</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-[#b9a55c] font-semibold hover:underline">
            {t.services.moreInfo}
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default ServicesPage;