"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { contactInfo } from "@/data/Contactus/contactData";
import SuccessPopup from "./SuccessPopUp";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    contact: "",
    service: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzkUXB0m557HBuFweM2o612fVuIPxomXBGeCqCobysgV0mckcj_hvF1sNRl0yI3EVlY/exec";

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      const res = await fetch(scriptURL, {
        method: "POST",
        body: form, // <-- no headers needed
      });

      const text = await res.text();
      console.log("Response:", text);

      setFormData({
        name: "",
        email: "",
        subject: "",
        contact: "",
        service: "",
        message: "",
      });
      setShowPopup(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Check console for details.");
    }
  };

  return (
    <section
      className="py-20 px-4 sm:px-8 lg:px-20 relative overflow-hidden pt-30"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Animated Background Circles */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse"
        initial={{ x: -100, y: -100 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full opacity-10 blur-3xl animate-ping"
        initial={{ x: 100, y: 100 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Info */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How Can We Assist You?
          </h2>
          <p className="mb-6" style={{ color: "var(--text-color1)" }}>
            If you have questions, need more information, or are interested in
            discussing potential partnership opportunities, please feel free to
            reach out. We're here to help you with:
          </p>
          <ul
            className="list-disc list-inside space-y-1 mb-6"
            style={{ color: "var(--text-color1)" }}
          >
            {contactInfo.services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold mb-2">Get in Touch Today</h3>
          <div
            className="space-y-4 text-sm"
            style={{ color: "var(--text-color1)" }}
          >
            {contactInfo.phones.map((phone, i) => (
              <p key={i} className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-400" />{" "}
                <span className="font-bold">
                  Phone:{" "}
                  <a
                    href={`tel:${phone.number.replace(/\s+/g, "")}`}
                    className="hover:text-blue-400 transition"
                  >
                    <span className="font-normal"> {phone.number}</span>
                  </a>
                </span>
              </p>
            ))}
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <span className="font-bold">
                {" "}
                Email:{" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-blue-400 transition"
                >
                  <span className="font-normal">{contactInfo.email}</span>
                </a>
              </span>
            </p>
            {contactInfo.addresses.map((address, i) => (
              <p key={i} className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="font-bold">
                  {" "}
                  {i === 0 ? "Head Office:  " : "Branch Office:  "}{" "}
                  <span className="font-normal">{address}</span>
                </span>
              </p>
            ))}
            <p className="flex items-center gap-2">
              <FaClock className="text-blue-400" />{" "}
              <span className="font-bold">
                Business Hours:{" "}
                <span className="font-normal">{contactInfo.businessHours}</span>
              </span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl shadow-lg w-full relative z-10 border border-blue-500"
          style={{
            backgroundColor: "var(--bg-main5)",
            color: "var(--text-color)",
          }}
        >
          <motion.h3
            className="text-2xl font-bold mb-6 flex items-center gap-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Send us a <span className="text-blue-500">message</span>
          </motion.h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {[
              { type: "text", name: "name", label: "Your Name" },
              { type: "email", name: "email", label: "Your Email" },
              { type: "text", name: "subject", label: "Subject" },
              { type: "text", name: "contact", label: "Contact No." },
              {
                type: "select",
                name: "service",
                label: "Service",
                options: [
                  "Brand Awareness",
                  "Programmatic Advertising",
                  "Social Media Marketing",
                  "Influencer Marketing",
                ],
              },
            ].map(({ type, name, label, options }) => (
              <div key={name} className="relative">
                {type === "select" ? (
                  <>
                    <select
                      id={name}
                      name={name}
                      required
                      value={formData[name]}
                      onChange={handleChange}
                      className="peer w-full appearance-none p-3 pt-5 rounded border border-gray-700 focus:outline-none focus:border-blue-400 bg-transparent text-white placeholder-transparent"
                      style={{
                        backgroundColor: "var(--bg-main6)",
                        color: "var(--text-color)",
                      }}
                    >
                      <option value="" disabled>
                        -- Please Select --
                      </option>
                      {options.map((opt, idx) => (
                        <option
                          key={idx}
                          value={opt}
                          className="text-black bg-white"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>

                    <label
                      htmlFor={name}
                      className="absolute left-3 text-sm text-gray-400 transition-all duration-200 
                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                        peer-focus:top-2 peer-focus:text-sm"
                    >
                      {label}
                    </label>
                  </>
                ) : (
                  <>
                    <input
                      type={type}
                      id={name}
                      name={name}
                      required
                      value={formData[name]}
                      onChange={handleChange}
                      className="peer w-full p-3 pt-5 rounded border border-gray-700 focus:outline-none focus:border-blue-400 placeholder-transparent"
                      placeholder=" "
                      style={{
                        color: "var(--text-color)",
                      }}
                    />

                    <label
                      htmlFor={name}
                      className="absolute left-3 text-sm text-gray-400 transition-all duration-200 
                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                        peer-focus:top-2 peer-focus:text-sm"
                    >
                      {label}
                    </label>
                  </>
                )}
              </div>
            ))}

            {/* Textarea Field */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="peer w-full p-3 pt-5 rounded border border-gray-700 focus:outline-none focus:border-blue-400 placeholder-transparent"
                placeholder=" "
                style={{
                  backgroundColor: "var(--bg-main6)",
                  color: "var(--text-color)",
                }}
              ></textarea>

              <label
                htmlFor="message"
                className="absolute left-3 text-sm text-gray-400 transition-all duration-200 
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                  peer-focus:top-2 peer-focus:text-sm"
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-black font-semibold py-3 rounded hover:bg-blue-800 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <SuccessPopup show={showPopup} onClose={() => setShowPopup(false)} />
      )}  
    </section>
  );
};

export default page;
