"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import styles from "./contactpage.module.css";
import glowImg from "../../../assets/group-47330.png";
import image from "../../../assets/image-2.png";
import Link from "next/link";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Store field errors

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const newErrors: { [key: string]: string } = {};

    // Basic validations
    if (!formData.get("first_name"))
      newErrors.first_name = "First name is required.";
    if (!formData.get("last_name"))
      newErrors.last_name = "Last name is required.";
    if (!formData.get("email")) newErrors.email = "Email is required.";

    // If errors exist, update state and exit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
      return;
    }

    // If no errors, clear error state and send email
    setErrors({});

    emailjs
      .sendForm(
        "service_pz9wqid",
        "template_d5m95vh",
        formRef.current,
        "FpweWpvkPjzP9M5Qj"
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setSuccess(false);
        }
      );
  };

  return (
    <div className={`${styles.logo} min-h-screen flex flex-col lg:flex-row`}>
      {/* Left: Contact Form */}
      <div
        className={`${styles.logo} w-full lg:w-1/2 bg-white p-10 flex flex-col justify-center`}
      >
        <h1 className="text-3xl font-bold mb-20">
          <Link href="/" passHref>
            MyAgentIQ
          </Link>
        </h1>

        <div className={`${styles.content} max-w-4xl w-full`}>
          <h2 className="text-3xl font-bold mb-2">Contact information</h2>
          <p className="text-gray-600 mb-10">
            Connect your favorite software and platforms in just a few clicks.
            Eliminate data silos and streamline operations across your entire
            project lifecycle. We will update you as soon as your slot in your
            waitlist is confirmed.
          </p>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="John Doe"
                className={`w-full border-b p-1 focus:outline-none ${
                  errors.first_name ? "border-red-500" : "border-gray-300"
                } focus:border-black`}
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Marvel"
                className={`w-full border-b p-1 focus:outline-none ${
                  errors.last_name ? "border-red-500" : "border-gray-300"
                } focus:border-black`}
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="+91 0000000000"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black p-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@domainname.com"
                className={`w-full border-b p-1 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:border-black`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Company
              </label>
              <input
                type="text"
                name="company"
                placeholder="John Doe"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black p-1"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Website link
              </label>
              <input
                type="text"
                name="website"
                placeholder="https://yourcompany.com"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black p-1"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Service
              </label>
              <input
                type="text"
                name="service"
                placeholder="E.g. AI Agent"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black p-1"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-semibold mb-1">Budget</label>
              <input
                type="text"
                name="budget"
                placeholder="$10,000"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black p-1"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us a bit about your project.."
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black p-1 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
              >
                Send Information
              </button>
              {success && (
                <p className="text-green-600 mt-2">Email sent successfully!</p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`${styles.content} w-full lg:w-1/2 relative flex items-center justify-center bg-black`}
      >
        <Image
          src={glowImg}
          alt="Glow background"
          fill
          className="object-cover opacity-80 top-[-800px]"
        />
        <div className="relative z-10 bg-black/40 bg-opacity-80 p-8 rounded-xl shadow-2xl w-full max-w-2xl text-white m-4">
          <p className="mb-4 text-gray-400">
            While that all sounds amazing, Performance Max isn’t perfect. The
            timeline before people start to see stable performance seems to be
            about 6–8 weeks, so you need to test it for a while. And many
            marketers complain that Performance Max cannibalizes Search
            campaigns, even though Google says that Search campaigns should be
            prioritized over Performance Max. However, we’ll show you how to
            avoid that and other potential pitfalls of Performance Max later in
            this article.
          </p>
          <div className="flex items-center mt-4">
            <Image
              src={image}
              alt="User avatar"
              className="w-8 h-8 rounded-full mr-3 border border-white"
            />
            <p className="font-semibold text-white">
              Manjunath from MyagentIQ.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
