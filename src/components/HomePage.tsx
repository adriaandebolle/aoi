import { Link } from "react-router-dom";
import { Shield, Award, Users } from "lucide-react";
import logo from "./../assets/logo.svg";

const HomePage = ({ t }) => (
  <div>
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-700 to-yellow-900 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto bg-black rounded-full flex items-center justify-center shadow-2xl">
            <img src={logo} alt="logo" className="w-16 h-16" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#b9a55c] to-[#a98f3a] bg-clip-text text-transparent">
          {t.hero.title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        <Link
          to="/services"
          className="bg-gradient-to-r from-[#b9a55c] to-[#a98f3a] text-black px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          {t.hero.cta}
        </Link>
      </div>
    </section>

    {/* USP Section */}
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.about.discretion}</h3>
            <p className="text-gray-600">{t.usp.discretion}</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.about.expertise}</h3>
            <p className="text-gray-600">{t.usp.expertise}</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#b9a55c] to-[#a98f3a] rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.about.results}</h3>
            <p className="text-gray-600">{t.usp.results}</p>
          </div>
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          {t.services.title}
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          {t.services.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Link
            to="/services/corporate"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <h3 className="text-2xl font-bold mb-4 group-hover:text-[#b9a55c] transition-colors">
              {t.services.corporate.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {t.services.corporate.description}
            </p>
            <div className="text-[#b9a55c] font-semibold">
              {t.services.readMore}
            </div>
          </Link>

          <Link
            to="/services/digital"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <h3 className="text-2xl font-bold mb-4 group-hover:text-[#b9a55c] transition-colors">
              {t.services.digital.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {t.services.digital.description}
            </p>
            <div className="text-[#b9a55c] font-semibold">
              {t.services.readMore}
            </div>
          </Link>

          <Link
            to="/services/private"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <h3 className="text-2xl font-bold mb-4 group-hover:text-[#b9a55c] transition-colors">
              {t.services.private.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {t.services.private.description}
            </p>
            <div className="text-[#b9a55c] font-semibold">
              {t.services.readMore}
            </div>
          </Link>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
        <p className="text-xl text-gray-300 mb-8">{t.cta.subtitle}</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-[#b9a55c] to-[#a98f3a] text-black px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          {t.nav.contact}
        </Link>
      </div>
    </section>
  </div>
);

export default HomePage;
