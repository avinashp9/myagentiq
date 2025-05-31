"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import myAgentIq from "../../../assets/my-agent-iq.svg";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  // Form state for contact form inputs
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Success message state
  const [success, setSuccess] = useState(false);

  // Handles input change for name, email, and message
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handles form submission and sends email using EmailJS
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fsk59qi", // Replace with your EmailJS service ID
        "template_2l93km1", // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "vdCj-JbAtcSIW4H1v" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccess(true);
          setForm({ name: "", email: "", message: "" }); // Reset form
        },
        () => {
          setSuccess(false);
        }
      );
  };

  return (
    <div className="bg-black text-white text-sm md:text-base">
      <div className={styles["footer-container"]}>
        <div className={styles["footer-top-bar"]}>
          <div className={styles["footer-top-bar-wraper"]}>
            {/* SITE MAP Column */}
            <div className={styles["footer-column"]}>
              <div className={styles["footer-column-title"]}>SITE MAP</div>
              <div className={styles["pricing-card-uppercontent2"]}>
                <div className={styles["footer-link-underlined"]}>Homepage</div>
                <div className={styles["footer-link"]}>Resources</div>
                <div className={styles["footer-link"]}>Blog</div>
                <div className={styles["footer-link"]}>Integrations</div>
                <div className={styles["footer-link"]}>Pricing</div>
              </div>
            </div>

            {/* FEATURES Column */}
            <div className={styles["footer-link-colomun"]}>
              <div className={styles["footer-column-title"]}>FEATURES</div>
              <div className={styles["pricing-card-uppercontent2"]}>
                <div className={styles["footer-link"]}>AI voice agents</div>
                <div className={styles["footer-link"]}>CRM Integration</div>
                <div className={styles["footer-link"]}>Activity Tracking</div>
                <div className={styles["footer-link"]}>Prospect Statistics</div>
                <div className={styles["footer-link"]}>Emotion tracking</div>
                <div className={styles["footer-link"]}>Automated Outreach</div>
                <div className={styles["footer-link"]}>AI Dialers</div>
              </div>
            </div>

            {/* SUPPORT Column */}
            <div className={styles["footer-link-colomun"]}>
              <div className={styles["footer-column-title"]}>SUPPORT</div>
              <div className={styles["pricing-card-uppercontent2"]}>
                <div className={styles["footer-link"]}>FAQ</div>
                <div className={styles["footer-link"]}>Documentation</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={styles["footer-link-contact-wrapper"]}
          >
            <div className={styles["footer-column-title"]}>
              SEND US AN EMAIL
            </div>
            <div className={styles["footer-quat"]}>
              If you still have more doubts send us an email and we would gladly
              answer your queries
            </div>
            <div className={styles["contact-section"]}>
              <div className={styles["contact-row"]}>
                <input
                  type="text"
                  name="name"
                  placeholder="First name"
                  value={form.name}
                  onChange={handleChange}
                  className={styles["name-text"]}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className={styles["email-text"]}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                className={styles["email-text"]}
                rows={4}
                required
              />
              <button type="submit" className={styles["send-btn"]}>
                <span className={styles["send-btn-text"]}>Send Mail</span>
              </button>

              {/* Success Message */}
              {success && (
                <div className="text-green-400 mt-2 text-sm">
                  Email sent successfully!
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Footer Bottom Bar */}
        <div className={`${styles["footer-bottom-bar"]} mt-10 flex-col`}>
          <div className="flex justify-end w-full pr-1">
            <div className="flex gap-2 text-right scale-90">
              {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-white text-black rounded-full p-1 hover:scale-105 transition"
                  >
                    <Icon className="w-3 h-3" />
                  </a>
                )
              )}
            </div>
          </div>

          <div className="flex justify-between items-center w-full flex-wrap gap-4">
            <div className={styles["copyright-text"]}>
              2025 MyagentX Sales management. All rights reserved
            </div>
            <div className={styles["rightside-text"]}>
              <div className={styles["copyright-text"]}>
                <span className="flex gap-3 text-right pr-2">
                  <span>Terms & Conditions </span>
                  <span>Privacy Policy</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <Image
          className={styles["my-agent-IQ"]}
          alt="My agent IQ"
          src={myAgentIq}
        />
      </div>
    </div>
  );
};

export default Footer;
