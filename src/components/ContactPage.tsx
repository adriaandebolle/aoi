import React from "react";
import { Mail, MapPin, Shield } from "lucide-react";

const ContactPage = ({
  t,
  formData,
  setFormData,
  services,
  language,
  handleSubmit,
}) => (
  <div className="py-20 bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-5xl font-bold text-center mb-4">
        {t.contact.title}
      </h1>
      <p className="text-center text-gray-600 mb-12 text-lg">
        {t.contact.subtitle}
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-6">{t.contact.details}</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#b9a55c] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">{t.contact.email}</p>
                  <a
                    href="mailto:contact@artofinvestigations.be"
                    className="text-gray-600 hover:text-[#b9a55c]"
                  >
                    contact@artofinvestigations.be
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#b9a55c] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">{t.contact.location}</p>
                  <p className="text-gray-600">{t.contact.locationText}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="w-6 h-6 text-[#b9a55c] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">{t.contact.recognition}</p>
                  <p className="text-gray-600">
                    {t.contact.recognitionText1}
                  </p>
                  <p className="text-gray-600">
                    {t.contact.recognitionText2}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-black to-gray-900 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{t.contact.rates}</h3>
            <p className="text-gray-300">{t.contact.ratesText}</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">
            {t.contact.form.title}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                {t.contact.form.name} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b9a55c]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                {t.contact.form.email}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b9a55c]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                {t.contact.form.phone}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b9a55c]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                {t.contact.form.company}
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b9a55c]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                {t.contact.form.service}
              </label>
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b9a55c]"
              >
                <option value="">{t.contact.form.selectService}</option>
                <optgroup label={t.services.corporate.title}>
                  {services[language].corporate.map((s, i) => (
                    <option key={i} value={s}>
                      {s}
                    </option>
                  ))}
                </optgroup>
                <optgroup label={t.services.digital.title}>
                  {services[language].digital.map((s, i) => (
                    <option key={i} value={s}>
                      {s}
                    </option>
                  ))}
                </optgroup>
                <optgroup label={t.services.private.title}>
                  {services[language].private.map((s, i) => (
                    <option key={i} value={s}>
                      {s}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                {t.contact.form.message}
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#b9a55c]"
              ></textarea>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                required
                checked={formData.privacy}
                onChange={(e) =>
                  setFormData({ ...formData, privacy: e.target.checked })
                }
                className="mt-1 mr-2"
              />
              <label className="text-sm">
                {t.contact.form.privacy} *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#b9a55c] to-[#a98f3a] text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;