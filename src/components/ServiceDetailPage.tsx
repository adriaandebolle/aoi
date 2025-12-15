import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetailPage = ({ t, setFormData, formData }) => {
  const { categoryKey } = useParams();
  const details = t.serviceDetails[categoryKey];
  const category = t.services[categoryKey].title;

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          to="/services"
          className="text-[#b9a55c] mb-8 hover:underline flex items-center"
        >
          {t.services.backToServices}
        </Link>

        <h1 className="text-5xl font-bold mb-8">{category}</h1>

        <div className="space-y-8">
          {details.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-[#b9a55c]">
                {item.title}
              </h2>
              <p className="text-gray-700 mb-6">{item.description}</p>
              <Link
                to="/contact"
                onClick={() => {
                  setFormData({ ...formData, service: item.title });
                }}
                className="bg-gradient-to-r from-[#b9a55c] to-[#a98f3a] text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                {t.services.contactUs}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;