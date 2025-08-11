"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { contactData } from "../constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: "success",
        text: "Your message has been sent successfully! I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="space-y-8 py-4" id="contact">
      {/* Header section */}
      <div>
        <h3 className="text-2xl font-bold mb-5 flex items-center">
          <span className="text-primary">Get</span>
          <span className="ml-2 dark:text-white">In Touch</span>
          <span className="ml-4 h-px w-32 bg-primary/30"></span>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          {contactData?.description || "Feel free to reach out to me!"}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="md:col-span-1 space-y-6">
          {contactData?.email && (
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Email
                </h3>
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-gray-800 dark:text-white hover:underline"
                >
                  {contactData.email}
                </a>
              </div>
            </div>
          )}

          {contactData?.phone && (
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary shrink-0">
                <FaPhone />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Phone
                </h3>
                <a
                  href={`tel:${contactData.phone}`}
                  className="text-gray-800 dark:text-white hover:underline"
                >
                  {contactData.phone}
                </a>
              </div>
            </div>
          )}

          {contactData?.location && (
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {contactData.location}
                </p>
              </div>
            </div>
          )}

          {/* Availability */}
          {contactData?.availability?.status && (
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                Availability
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    contactData.availability.status === "Available"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></div>
                <span className="font-medium text-gray-800 dark:text-white">
                  {contactData.availability.status}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {contactData.availability.message || "Not provided"}
              </p>
            </div>
          )}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Send Me a Message
          </h3>

          {submitMessage && (
            <div
              className={`p-4 mb-4 rounded-lg ${
                submitMessage.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
