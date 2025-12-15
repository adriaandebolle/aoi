import React from "react";
import { Shield, Award, Users } from "lucide-react";

const AboutPage = ({ t }) => (
  <div className="py-20 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-5xl font-bold text-center mb-4">{t.about.title}</h1>
      <p className="text-2xl text-center text-gray-600 mb-12">
        {t.about.subtitle}
      </p>
      <div className="bg-white p-12 rounded-lg shadow-lg mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {t.about.description}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          {t.about.extra}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-[#b9a55c]" />
          <h3 className="text-xl font-bold mb-3">{t.about.discretion}</h3>
          <p className="text-gray-600">{t.about.discretionText}</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <Award className="w-16 h-16 mx-auto mb-4 text-[#b9a55c]" />
          <h3 className="text-xl font-bold mb-3">{t.about.expertise}</h3>
          <p className="text-gray-600">{t.about.expertiseText}</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <Users className="w-16 h-16 mx-auto mb-4 text-[#b9a55c]" />
          <h3 className="text-xl font-bold mb-3">{t.about.results}</h3>
          <p className="text-gray-600">{t.about.resultsText}</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-black to-gray-900 text-white p-12 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold mb-6">{t.about.method}</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-black">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t.about.step1}</h3>
              <p className="text-gray-300">{t.about.step1Text}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-black">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t.about.step2}</h3>
              <p className="text-gray-300">{t.about.step2Text}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-black">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t.about.step3}</h3>
              <p className="text-gray-300">{t.about.step3Text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;