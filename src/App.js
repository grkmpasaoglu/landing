import React, { useEffect, useState, useRef } from "react";
import { color, motion } from "framer-motion";
import {
  Code,
  Gamepad2,
  Radio,
  Users,
  CloudCog,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroLogoRef = useRef(null);
  const headerLogoRef = useRef(null);

  // Refs for sections to enable smooth scrolling
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (elementRef) => {
    const offset = -90; // 20px yukarısı için negatif değer
    const elementPosition = elementRef.current?.getBoundingClientRect().top || 0;
    const offsetPosition = window.pageYOffset + elementPosition + offset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
  

  useEffect(() => {
    const heroLogo = heroLogoRef.current;
    const headerLogo = headerLogoRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(heroLogo, {
            scale: 1 - progress,
            opacity: 1 - progress,
            y: progress * 50,
          });
          gsap.to(headerLogo, {
            scale: progress,
            opacity: progress,
          });
        },
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Color Palette - Tech-Inspired Cool Tones
  const colors = {
    primary: "#455461", // A muted blue-gray
    secondary: "#5D6D7A", // A slightly lighter blue-gray
    accent: "#8F9FAC", // A soft blue-gray
    background: "#1B2A37", // A dark blue-gray
    text: "#041420", // A very dark blue
  };

  const services = [
    {
      icon: <Gamepad2 className="w-12 h-12" style={{ color: "#c72030" }} />,
      title: "Mobile Game & App Development",
      description:
        "Innovative mobile solutions tailored to your business needs.",
    },
    {
      icon: (
        <Code
          className="w-12 h-12 text-emerald-600"
          style={{ color: "#c72030" }}
        />
      ),
      title: "Software Development",
      description:
        "Custom software solutions that drive your business forward.",
    },
    {
      icon: (
        <Radio
          className="w-12 h-12 text-indigo-600"
          style={{ color: "#c72030" }}
        />
      ),
      title: "In-Store Radio Development",
      description: "Engaging audio experiences for retail and hospitality.",
    },
    {
      icon: (
        <Users
          className="w-12 h-12 text-blue-500"
          style={{ color: "#c72030" }}
        />
      ),
      title: "HRM & CRM Solutions",
      description:
        "Streamline your human resources and customer relationship management.",
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center text-[#1F2937] font-sans">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 z-50 h-1 bg-blue-600"
        style={{
          width: `${scrollProgress}%`,
          transition: "width 0.2s ease-out",
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="logo" className="w-32 h-16"></img>
          </div>
          <nav>
            <ul className="flex space-x-6">
              {[
                { name: "Services", ref: servicesRef },
                { name: "About", ref: aboutRef },
                { name: "Contact", ref: contactRef }
              ].map((item) => (
                <li
                  key={item.name}
                  className="text-gray-700 hover:text-[#c72030] transition-colors cursor-pointer"
                  onClick={() => scrollToSection(item.ref)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/3065064/pexels-photo-3065064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundBlendMode: "overlay",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          className="text-center text-white max-w-4xl px-4"
        >
          <h2 className="text-5xl font-bold mb-6 text-shadow">
            Technology Solutions for Modern Businesses
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-shadow">
            Empowering businesses through cutting-edge technology and innovative
            solutions
          </p>
          <button
            className="px-8 py-3 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
            style={{
              background: "linear-gradient(to right, white, black)",
              boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.4)",
            }}
          >
            Get Started
          </button>
        </motion.div>
      </div>

      {/* Services Section */}
      <div 
        ref={servicesRef} 
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <h3
          className="text-4xl font-bold text-center mb-12"
          style={{ color: colors.primary }}
        >
          Our Services
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h4
                  className="ml-4 text-xl font-semibold"
                  style={{ color: colors.primary }}
                >
                  {service.title}
                </h4>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <motion.div
        ref={aboutRef}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        className="max-w-7xl mx-auto px-4 py-16 bg-white"
      >
        <h3
          className="text-4xl font-bold text-center mb-12"
          style={{ color: colors.primary }}
        >
          About Nyxtopia
        </h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4 text-gray-700 text-justify">
              Nyxtopia OÜ is a forward-thinking technology company dedicated to
              delivering innovative solutions that transform businesses. We
              combine cutting-edge technology with creative problem-solving to
              help our clients stay ahead in the digital landscape.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3" style={{ color: "#c72030" }}/>
                <span>Expert team of developers and designers</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3" style={{ color: "#c72030" }}/>
                <span>Customized solutions for unique business challenges</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3" style={{ color: "#c72030" }} />
                <span>Commitment to innovation and quality</span>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-xl h-72" style={{backgroundColor:colors.primary}}>
            <h4
              className="text-2xl font-semibold mb-6"
              style={{ color: "white" }}
            >
              Our Mission
            </h4>
            <p className="text-white">
              To empower businesses by providing state-of-the-art technology
              solutions that drive growth, efficiency, and innovation.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Us Section */}
      <motion.div
        ref={contactRef}
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <h3
          className="text-4xl font-bold text-center mb-12"
          style={{ color: colors.primary }}
        >
          Contact Us
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg h-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="w-full p-3 rounded-lg text-white font-semibold"
                style={{ backgroundColor: colors.primary }}
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
              <Mail className="w-10 h-10 mr-4" style={{ color: "#c72030" }} />
              <div>
                <h4 className="font-semibold">Email Addresses</h4>
                <p className="text-gray-600">info@nyxtopia.com</p>
                <p className="text-gray-600">14614272@eesti.ee</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
              <Phone className="w-10 h-10 mr-4" style={{ color: "#c72030" }} />
              <div>
                <h4 className="font-semibold">Phone Numbers</h4>
                <p className="text-gray-600">+49 017615135969</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
              <MapPin className="w-10 h-10 mr-4" style={{ color: "#c72030" }} />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600">Tallinn, Estonia</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold mb-4">Our Location</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2030.4734197458385!2d24.756541!3d59.418892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1702046768345!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer
        className="py-8 mt-12"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <p>© 2024 Nyxtopia OÜ. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}