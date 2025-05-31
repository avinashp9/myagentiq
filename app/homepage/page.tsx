import React, { JSX } from "react";
import Navbar from "../component/Navbar/Navbar";
import { FaClock } from "react-icons/fa";
import ellipse14032 from "@/assets/ellipse-1403-2.svg";
import ellipse14033 from "@/assets/ellipse-1403-3.svg";
import ellipse1403 from "@/assets/ellipse-1403.svg";
import frame48098965 from "@/assets/frame-48098965.svg";
import group47330 from "@/assets/group-47330.png";
import group47332 from "@/assets/group-47332.png";
import image2 from "@/assets/image-2.png";
import image from "@/assets/image.svg";
import line66 from "@/assets/line-66.svg";
import line69 from "@/assets/line-69.svg";
import maskGroup2 from "@/assets/mask-group-2.png";
import maskGroup3 from "@/assets/mask-group-3.png";
import maskGroup4 from "@/assets/mask-group-4.png";
import maskGroup5 from "@/assets/mask-group-5.png";
import maskGroup8 from "@/assets/mask-group-8.png";
import maskGroup9 from "@/assets/mask-group-9.png";
import maskGroup11 from "@/assets/mask-group-11.png";
import maskGroup12 from "@/assets/mask-group-12.png";
import maskGroup13 from "@/assets/mask-group-13.png";
import maskGroup14 from "@/assets/mask-group-14.png";
import maskGroup18 from "@/assets/mask-group-18.png";
import maskGroup19 from "@/assets/mask-group-19.png";
import maskGroup from "@/assets/mask-group.png";
import vector1182 from "@/assets/vector-118-2.svg";
import vector1183 from "@/assets/vector-118-3.svg";
import vector1184 from "@/assets/vector-118-4.svg";
import vector118 from "@/assets/vector-118.svg";
import Image from "next/image";
import Links from "next/link";
import Footer from "../component/Footer/Footer";
import {
  Mail,
  Phone,
  Linkedin,
  Pencil,
  Link,
  LayoutDashboard,
  Users,
  Shuffle,
  Activity,
} from "lucide-react";

type Step = {
  day: string;
  type: string;
  title: string;
  description?: string;
  stats: Record<string, number>;
  variantButton?: boolean;
  extraVariant?: string;
  priority?: string;
  timer?: string;
};
const steps: Step[] = [
  {
    day: "Day 0",
    type: "email",
    title: "New Thread",
    description: "Can you point me in the right direction?",
    stats: { delivered: 0, opened: 57, clicked: 21, replies: 0, interested: 2 },
    variantButton: true,
  },
  {
    day: "Day 2",
    type: "call",
    title: "Instructions",
    stats: { delivered: 0, opened: 57, clicked: 21, replies: 0, interested: 2 },
    timer: "10 Minutes",
  },
  {
    day: "Day 7",
    type: "email",
    title: "Reply: Confident approach",
    description: "",
    stats: { delivered: 0, opened: 57, clicked: 21, replies: 0, interested: 2 },
    variantButton: true,
    extraVariant: "Reply: Creating a scarcity",
    priority: "High",
  },
  {
    day: "Day 8",
    type: "linkedin",
    title: "Instructions",
    stats: { delivered: 0, opened: 57, clicked: 21, replies: 0, interested: 2 },
    timer: "10 Minutes",
  },
];

const iconMap: { [key: string]: JSX.Element } = {
  email: <Mail className="w-4 h-4 text-white" />,
  call: <Phone className="w-4 h-4 text-white" />,
  linkedin: <Linkedin className="w-4 h-4 text-white" />,
};
const HomePage = (): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-full px-4 md:px-0 bg-base-100 overflow-x-hidden relative">
      {/* Main wrapper */}
      <div className="relative w-full max-w-full md:max-w-[1524px] text-base-content bg-base-100 overflow-visible md:overflow-hidden h-[4000px] md:h-[6676px]">
        {/* Content stack */}
        <div className="relative w-full max-w-full md:max-w-[1524px] h-auto md:h-[8176px] left-0 md:-left-[2px]">
          {/* the second light */}
          <Image
            className="group absolute top-[1017px] left-[2px] w-full max-w-[1524px] h-[1037px] hidden md:block"
            alt="Group"
            src={group47332}
          />
          {/* the bottom animation effect */}

          <div className="background-effects">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="div-wrapper">
                  <div className="div">
                    <div className="ellipse z-30" />

                    <Image
                      className="mask-group"
                      alt="Mask group"
                      src={maskGroup3}
                    />

                    <Image className="vector" alt="Vector" src={vector1183} />

                    <Image className="img" alt="Mask group" src={maskGroup11} />

                    <Image
                      className="mask-group-2"
                      alt="Mask group"
                      src={maskGroup9}
                    />

                    <Image
                      className="ellipse-2"
                      alt="Ellipse"
                      src={ellipse14032}
                    />
                  </div>
                </div>

                <div className="div-wrapper">
                  <div className="div">
                    <div className="ellipse" />

                    <Image
                      className="mask-group"
                      alt="Mask group"
                      src={image}
                    />

                    <Image className="vector" alt="Vector" src={vector118} />

                    <Image className="img" alt="Mask group" src={maskGroup14} />

                    <Image
                      className="mask-group-2"
                      alt="Mask group"
                      src={maskGroup12}
                    />

                    <Image className="ellipse-2" alt="Ellipse" src={image} />
                  </div>
                </div>
              </div>
            </div>

            <div className="group-2">
              <div className="overlap-2">
                <div className="group-3">
                  <div className="overlap-group-2">
                    <div className="ellipse-3" />

                    <Image
                      className="mask-group-3"
                      alt="Mask group"
                      src={maskGroup4}
                    />

                    <Image className="vector-2" alt="Vector" src={vector1182} />

                    <Image
                      className="mask-group-4"
                      alt="Mask group"
                      src={maskGroup18}
                    />

                    <Image
                      className="mask-group-5"
                      alt="Mask group"
                      src={maskGroup8}
                    />

                    <Image
                      className="ellipse-4"
                      alt="Ellipse"
                      src={ellipse14033}
                    />
                  </div>
                </div>

                <div className="group-3">
                  <div className="overlap-group-2">
                    <div className="ellipse-3" />

                    <Image
                      className="mask-group-3"
                      alt="Mask group"
                      src={maskGroup2}
                    />
                    {/* the right side */}
                    <Image className="vector-2" alt="Vector" src={vector1184} />

                    <Image
                      className="mask-group-4"
                      alt="Mask group"
                      src={maskGroup19}
                    />

                    <Image
                      className="mask-group-5"
                      alt="Mask group"
                      src={maskGroup}
                    />

                    <Image
                      className="ellipse-4"
                      alt="Ellipse"
                      src={ellipse1403}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* the shiny moon in the herro section */}
          <Image className="group-4" alt="Group" src={group47330} />

          <Navbar />
          {/* hero text container */}
          <div className="hero-container">
            <div className="hero-container-wrapper">
              <div className="hero-text-container">
                <div className="hero-heading-wrapperading-wrapper">
                  <p className="hero-headline">
                    Your AI Sales Agent for Real Estate Success
                  </p>
                </div>

                <p className="hero-subtitle">
                  Supercharge your real estate business with an intelligent
                  sales agent that never sleeps. Our AI engages leads, follows
                  up instantly, and manages conversations just like a
                  top-performing human rep—so you can focus on closing deals,
                  not chasing them.
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-5">
              <Links href="/homepage/contactpage" passHref>
                <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-[#FF5B1F] bg-[radial-gradient(circle_at_center,_#FF5B1F,_#FFA76B,_transparent)] text-white text-lg font-bold rounded-full shadow-lg hover:bg-[#FF5B1F] hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  {/* Pulsing Icon */}
                  <svg
                    className="w-6 h-6 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 21v-2a4 4 0 00-3-3.87M12 3a9 9 0 100 18 9 9 0 000-18z" />
                  </svg>

                  {/* Button Text */}
                  <span>Become a Member</span>

                  {/* Badge */}
                  {/* <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-white text-pink-600 text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                    Join Now
                  </span> */}
                </div>
              </Links>
            </div>
          </div>
          <div>
            <ul className="mobile-feature-list">
              <li>Retargeting Prospects</li>
              <li>AI Voice Agent</li>
              <li>Calendar Integration</li>
              <li>AI Dialers</li>
              <li>CRM Integration</li>
            </ul>
          </div>

          {/* product text */}
          <div className="product-section">
            <div className="product-header">
              <p className="section-heading">
                The product you wish you had, So we built it for you
              </p>

              {/* <p className="section-Paragraph">
                Supercharge your real estate business with an intelligent sales
                agent that never sleeps. Our AI engages leads, follows up
                instantly, and manages conversations just like a top-performing
                human rep—so you can focus.
              </p> */}
            </div>

            <div className="mobile-product product-features-grid">
              <div className="product-navigation-panel">
                <div className="product-image-wraper">
                  <Image
                    className="product-image"
                    alt="Frame"
                    src={frame48098965}
                  />

                  <div className="product-sidebar-wraper">
                    <div className="sidebar-frame">
                      <div className="nav-item">
                        {/* <Image
                          className="img-2"
                          alt="Mage dashboard bar"
                          src={mageDashboardBarNotification}
                        /> */}
                        <LayoutDashboard className="w-4 h-4 text-gray-300" />

                        <div className="text-inactive">Dashboard</div>
                      </div>

                      <div className="nav-item">
                        {/* <Image
                          className="img-2"
                          alt="Octicon people"
                          src={octiconPeople16}
                        /> */}
                        <Users className="w-4 h-4 text-gray-300" />

                        <div className="text-inactive">Prospects</div>
                      </div>

                      <div className="nav-item--active">
                        {/* <Image
                          className="img-2"
                          alt="Typcn flow switch"
                          src={typcnFlowSwitch}
                        /> */}
                        <Shuffle className="w-4 h-4 text-gray-300" />

                        <div className="text-active">Sequences</div>
                      </div>

                      <div className="nav-item">
                        {/* <Image
                          className="img-2"
                          alt="Jam activity"
                          src={jamActivity}
                        /> */}
                        <Activity className="w-4 h-4 text-gray-300" />

                        <div className="text-inactive">Activity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Product-leftcontainer">
                <div className="Product-leftcontainer-wraper-1">
                  <div className="Product-leftcontainer-wraper-2">
                    <div className="Product-leftcontainer-wraper-3 mt-6">
                      <div className="product-title">
                        Persona Sequence: High Touch
                      </div>
                      <Pencil className="w-4 h-4 text-gray-300" />

                      {/* <Image
                        className="pencil-icon"
                        alt="Material symbols"
                        src={materialSymbolsEditOutline}
                      /> */}

                      {/* <div className="material-symbols" /> */}
                    </div>
                  </div>

                  <div className="link-wraper">
                    {/* <Image
                      className="link-icon"
                      alt="Material symbols"
                      src={materialSymbolsLinkRounded}
                    /> */}
                    <Link className="w-4 h-4 text-gray-300" />

                    <div className="product-side-text-wrapper">
                      Assign to Prospect
                    </div>
                  </div>
                </div>

                <div className="big-product-image">
                  <div className="bg-[#0E0E0E]   py-8 px-4 space-y-3 text-white font-sans">
                    {steps.map((step, i) => (
                      <div
                        key={i}
                        className="bg-[#1B1B1B] border border-[#2A2A2A] rounded-lg"
                      >
                        <div className="flex items-start justify-between p-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-black p-1.5 rounded-sm">
                              {iconMap[step.type]}
                            </div>
                            <div>
                              <p className="text-xs text-white/60 mb-1">
                                {step.day} -{" "}
                                {step.type === "email"
                                  ? "Manual Email"
                                  : step.type === "call"
                                  ? "Call"
                                  : "LinkedIn Task"}
                              </p>
                              <h2 className="text-base font-semibold leading-snug">
                                {step.title}
                              </h2>
                              {step.description && (
                                <p className="text-sm text-white/60 mt-1">
                                  {step.description}
                                </p>
                              )}
                              {step.extraVariant && (
                                <p className="text-sm text-white/60 mt-1">
                                  2. {step.extraVariant}
                                </p>
                              )}
                              {step.variantButton && (
                                <button className="text-xs text-blue-500 mt-1">
                                  + Add Email Variant
                                </button>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-col items-end text-xs text-white/60">
                            {step.priority && (
                              <span className="text-red-500 font-medium">
                                Priority: {step.priority}
                              </span>
                            )}
                            {step.timer && (
                              <span className="bg-[#2A2A2A] px-2 py-0.5 rounded text-xs mt-2">
                                {step.timer}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-5 border-t border-[#2A2A2A] text-center text-xs text-white/60">
                          {[
                            "Delivered",
                            "Opened",
                            "Clicked",
                            "Replies",
                            "Interested",
                          ].map((label, j) => {
                            const value = step.stats[label.toLowerCase()];
                            const isInterested = label === "Interested";
                            return (
                              <div key={j} className="py-2">
                                <div
                                  className={`text-sm font-semibold ${
                                    isInterested ? "text-red-500" : "text-white"
                                  }`}
                                >
                                  {value}%
                                </div>
                                <div className="b">{label}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Toolkit Section */}
          <div className="toolkit-section">
            <div className="toolkit-header">
              <p className="toolkit-heading">
                The Automated AI Toolkit that works for you
              </p>
            </div>

            <div className="product-sidebar-wraper">
              <div className="product-sidebar-topcards-wraper">
                <div className="toolkit-card">
                  <div className="toolkit-card-content">
                    <div className="toolkit-card-header">
                      Prospect Statistics
                    </div>

                    {/* <p className="toolkit-card-paragraph">
                      Supercharge your real estate business with an intelligent
                      sales agent that never sleeps. Our AI engages leads,
                      follows up instantly, and manages conversations just like
                      a top-performing human rep—so you can focus.Supercharge
                      your real estate business with an intelligent sales agent
                      that never sleeps. Our AI engages leads, follows up
                      instantly, and manages conversations just like a
                      top-performing human rep—so you can focus.
                    </p> */}
                  </div>
                  <div className="toolkit-card1-image" />
                </div>

                <div className="toolkit-card">
                  <div className="toolkit-card-content">
                    <div className="toolkit-card-header">Dashboard</div>

                    {/* <p className="toolkit-card-paragraph">
                      Our AI engages leads, follows up instantly, and manages
                      conversations just like a top-performing human rep—so you
                      can focus.Supercharge your real estate business with an
                      intelligent sales agent that never sleeps. Our AI engages
                      leads, follows up instantly.
                    </p> */}
                  </div>

                  <div className="toolkit-card2-image" />
                </div>
              </div>

              <div className="Product-leftcontainer-wraper-1">
                <div className="toolkit-small-card">
                  <div className="toolkit-card3-image" />

                  <div className="toolkit-card-content">
                    <div className="toolkit-card-header">
                      Editable Sequences
                    </div>

                    {/* <p className="toolkit-card-bottomparagraph">
                      Sso you can focus.Supercharge your real estate business
                      with an intelligent sales agent that never sleeps.
                    </p> */}
                  </div>
                </div>

                <div className="toolkit-middle-card">
                  <div className="toolkit-card-content">
                    <p className="toolkit-card-header">
                      Editable Threads for your liking
                    </p>

                    {/* <p className="toolkit-card-paragraph">
                      Sso you can focus.Supercharge your real estate business
                      with an intelligent sales agent that never sleeps. Our AI
                      engages leads, follows up instantly, and manages
                      conversations
                    </p> */}
                  </div>

                  <div className="toolkit-card4-image" />
                </div>

                <div className="toolkit-small-card2">
                  <div className="toolkit-card-content">
                    <div className="toolkit-card-header">Integrations</div>

                    {/* <p className="toolkit-card-bottomparagraph">
                      Sso you can focus.Supercharge your real estate business
                      with an intelligent sales agent that never sleeps. Our AI
                      engages leads, follows up instantly, and manages
                      conversations
                    </p> */}
                  </div>

                  <div className="toolkit-card5-image" />
                </div>
              </div>
              {/* mobile view */}
              <div className="m-Product-leftcontainer-wraper-1">
                <div className="m-toolkit-small-card">
                  <div className="m-toolkit-card3-image" />

                  <div className="m-toolkit-card-content">
                    <div className="m-toolkit-card-header">
                      Editable Sequences
                    </div>

                    {/* <p className="toolkit-card-bottomparagraph">
                      Sso you can focus.Supercharge your real estate business
                      with an intelligent sales agent that never sleeps.
                    </p> */}
                  </div>
                </div>
                <div className="m-toolkit-small-card2">
                  <div className="m-toolkit-card5-image" />

                  <div className="m-toolkit-card-content">
                    <div className="m-toolkit-card-header">Integrations</div>

                    {/* <p className="toolkit-card-bottomparagraph">
                      Sso you can focus.Supercharge your real estate business
                      with an intelligent sales agent that never sleeps.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Membership CTA Section */}
          <div className="membership-cta-section">
            <Image
              className="mountain-mask"
              alt="Mask group"
              src={maskGroup13}
            />

            <div className="toolkit-content">
              <div className="section-heading-wrapper">
                <p className="section-heading2">
                  AI-Powered Outreach in Just 3 Steps
                </p>
              </div>

              <div className="hero-button-group">
                <div className="btn-primary">
                  <div className="btn-primary-text-wrapper">
                    <Links href="/homepage/contactpage" passHref>
                      Become a member
                    </Links>
                  </div>
                </div>

                <div className="btn-secondary">
                  <div className="btn-secondary-wrapper">
                    <Image className="image" alt="Image" src={image2} />

                    <Image className="image-2" alt="Image" src={image2} />
                  </div>

                  <div className="btn-secondary-text-wrapper">
                    <Links href="/homepage/comingsoon" passHref>
                      About Us
                    </Links>
                  </div>
                </div>
              </div>
            </div>

            <div className="Line-image-section">
              <Image className="image-2" alt="Image" src={image2} />

              <div className="Line-image-section2">
                <Image className="line" alt="Line" src={line66} />

                <Image
                  className="logo-bt-lines"
                  alt="Group"
                  src={frame48098965}
                />

                <Image className="line" alt="Line" src={line66} />
              </div>

              <Image className="image-2" alt="Image" src={image2} />
            </div>
          </div>
          {/* the background light behind the priview */}
          <Image
            className="absolute top-[4100px] right-0 w-full max-w-[962px] h-[917px] sm:top-[4120px] sm:right-0 sm:p-[10px]"
            alt="Mask group"
            src={maskGroup5}
          />

          {/* get a glibs text container */}
          <div className="show-example-section">
            <div className="show-example-section-wraper mobile-responsive-example">
              {/* Right Section - Text */}
              <div className="right-example-section">
                <div className="hero-text-container">
                  <div className="example-title">
                    <p className="example-title-wraper">
                      Get a Glimpse of our Sequence Editor
                    </p>
                  </div>

                  <div className="example-btn-section">
                    <div className="example-primary-btn">
                      <div className="example-btn-text text-white">
                        Email Threads
                      </div>
                    </div>

                    <div className="example-secondary-btn">
                      <div className="example-btn-text text-white">
                        Call Transcript
                      </div>
                    </div>
                  </div>
                </div>

                {/* <p className="example-bottom-paragraph">
                  Supercharge your real estate business with an intelligent
                  sales agent that never sleeps. Our AI engages leads, follows
                  up instantly, and manages conversations just like a
                  top-performing human rep—so you can focus.
                </p> */}
              </div>

              {/* Left Section - Image + Call Preview */}

              <div className="imageglimbs left-example-section">
                <div className="bg-[#0E0E0E] text-white px-4 md:px-8 py-6 flex flex-col space-y-4">
                  <div className="text-sm text-gray-400">
                    Edit Sequence &gt;{" "}
                    <span className="text-white font-medium">
                      Generate Call
                    </span>
                  </div>

                  <h1 className="text-2xl font-semibold">Call Preview</h1>
                  <p className="text-gray-400">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>

                  <div className="mobile-left-section mobile-columns flex flex-col md:flex-row gap-6 mt-6">
                    {/* Left Side: Threads */}
                    <div className="flex-container w-full md:w-1/2 space-y-4">
                      {[1, 2, 3].map((thread) => (
                        <div
                          key={thread}
                          className="bg-[#1C1C1E] rounded-lg border border-[#333] hover:border-[#00FF9D] p-4 space-y-3"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-orange-400 font-semibold">
                              Generated thread {thread}
                            </span>
                            <div className="flex items-center text-gray-400 text-sm gap-1">
                              <FaClock className="w-3.5 h-3.5" />
                              <span>10 Minutes</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-300 ">
                            🛈{" "}
                            <strong>
                              INSTRUCTIONS FOR USING THIS SEQUENCE:
                            </strong>
                            <br />
                            When building a Persona Sequence strategy, you
                            should create one sequence for each of your key
                            buyer personas...
                          </p>
                        </div>
                      ))}
                      <button className="w-full bg-[#1F1F1F] text-white border border-[#444] rounded-lg py-2 hover:border-white">
                        ♻️ Regenerate Call
                      </button>
                    </div>

                    {/* Right Side: Transcript */}
                    <div className="w-full md:w-1/2 bg-[#1C1C1E] rounded-lg p-6 flex flex-col justify-between">
                      <div className="overflow-y-auto max-h-[500px] pr-2 space-y-4">
                        {[...Array(6)].map((_, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between text-sm text-gray-400">
                              <span className="font-medium text-white">
                                Speaker
                              </span>
                              <span>01:05:55</span>
                            </div>
                            <p className="text-sm text-gray-300 ">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
                        <button className="bg-[#2C2C2E] text-white py-2 px-6 rounded-md">
                          Cancel
                        </button>
                        <button className="bg-[#FF5522] text-white py-2 px-6 rounded-md font-medium">
                          Use this transcript
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Image className="line-3" alt="Line" src={line69} />
          {/* animation background container */}
          <div className="Animated-container">
            <div className="section-heading-wrapper">
              <p className="section-heading2">
                Take the First Step Toward Smarter Sales
              </p>
            </div>

            <div className="hero-button-group">
              <div className="btn-primary">
                <div className="btn-primary-text-wrapper">
                  <Links href="/homepage/contactpage" passHref>
                    Become a member
                  </Links>
                </div>
              </div>

              <div className="btn-secondary">
                <div className="btn-secondary-wrapper">
                  <Image className="image" alt="Image" src={image2} />

                  <Image className="image-2" alt="Image" src={image2} />
                </div>

                <div className="btn-secondary-text-wrapper">
                  <Links href="/homepage/comingsoon" passHref>
                    About Us
                  </Links>
                </div>
              </div>
            </div>
          </div>

          {/* footer part */}
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
