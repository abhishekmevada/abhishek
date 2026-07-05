import "../style/Homev.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrDocumentUser } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaGitlab } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoLocationSharp, IoCodeSlashSharp } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import studentpredication from "/studentpredication.png";
import heartdiseasedetection from "/heartdiseasedetection.png";
import ecommerce from "/ecommerce.png";
import passwordmanager from "/passwordmanager.png";
import taskmanager from "/taskmanager.png";
import blog from "/blog.png";
import connectcables from "/connectcables.png";
import ratanindustries from "/ratanindustries.png";
import yashrajcab from "/yashrajcab.png";
import inventry_management from "/inventry_management.png";
import hospitalappok from "/hospitalappo.png";
import projectmanagement from "/projectmanagement.png";
import ecommerce58 from "/ecommerce58.png";
import aboutImg from "/myimg.jpg";
import {
  CodeXml,
  Server,
  Database,
  GitBranch,
  ChartPie,
  Route,
  Logs,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Homev() {
  const [heroproject, setHeroproject] = useState([
    {
      id: 1,
      projectName: "Project Management System",
      projectImg: "./projectmanagement.png",
      projectDescription:
        "Streamlines project planning, task management, and team collaboration through a secure role-based dashboard.",
      projectSkill: ["React", "Node", "Express.js", "MongoDB"],
      projectLink: "https://project-management-system-058.netlify.app/",
      projectGithub:
        "https://gitlab.com/abhishekmevada/project-management-system",
    },
    {
      id: 2,
      projectName: "E-Commerce",
      projectImg: "./ecommerce58.png",
      projectDescription:
        "A complete online shopping platform featuring secure authentication, product management, cart, and order processing.",
      projectSkill: ["React", "Node", "Express.js", "MongoDB"],
      projectLink: "https://ecommerce85.netlify.app/",
      projectGithub: "https://gitlab.com/abhishekmevada/ecommerce",
    },
    {
      id: 3,
      projectName: "Hospital Management System",
      projectImg: "./hospitalappo.png",
      projectDescription:
        "Simplifies appointment booking, doctor scheduling, and patient management through an efficient digital platform.",
      projectSkill: ["React", "Node", "Express.js", "MongoDB"],
      projectLink: "https://hospitalappointnnent.netlify.app/",
      projectGithub: "https://github.com/abhishekmevada/literate-engine",
    },
  ]);
  const [showNav, setShowNav] = useState(false);
  const [showproj, setShowproj] = useState(true);
  const [loading, setLoading] = useState(false);
  const [contactform, setContactform] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setContactform((prev) => ({ ...prev, [name]: value }));
  };

  const contactFun = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phonenumber = "+919510954023";

    const message =
      `Portfolio\n` +
      `Name: ${contactform.name}\n` +
      `Email: ${contactform.email}\n` +
      `Subject: ${contactform.subject}\n` +
      `Message: ${contactform.message}\n`;

    const url = `https://wa.me/${phonenumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "__blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroproject((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 5000);

    if (window.innerWidth > 836) {
      setShowNav(true);
    }

    const img = new Image();

    img.onload = () => {
      setLoading(true);
    };

    return () => {
      img.onload = null;
      clearInterval(interval);
    };
  }, []);

  const top_project = [
    {
      id: 1,
      name: "Ratan Industries",
      type: "CLIENT PROJECT",
      typeid: 1,
      image: ratanindustries,
      description:
        "Designed and developed a React website for a chemical manufacturing business. Built product catalog sections, industry solutions, quality and compliance information, and contact functionality within a professional responsive interface.",
      skills: ["React", "CSS", "TypeScript", "EmailJS"],
      link: "https://ratanindustries.netlify.app/",
    },
    {
      id: 2,
      name: "Yash Raj Cab Services",
      type: "CLIENT PROJECT",
      typeid: 1,
      image: yashrajcab,
      description:
        "Built a responsive React website for a taxi service business. Created clear service pages for local, airport, and outstation bookings, along with mobile-friendly navigation and WhatsApp contact integration.",
      skills: ["React", "CSS", "TypeScript", "WhatsApp Integration"],
      link: "https://yashrajcabservices.netlify.app/",
    },
    {
      id: 3,
      name: "Connect Cables",
      type: "CLIENT PROJECT",
      typeid: 1,
      image: connectcables,
      description:
        "Developed a responsive website for a cable business using HTML, CSS, and JavaScript. Structured the site around company information, products and services, and customer contact details.",
      skills: ["HTML", "CSS", "JavaScript", "EmailJS"],
      link: "https://connectcables.co.in/",
    },
    {
      id: 4,
      name: "Project Management System",
      type: "INTERNSHIP PROJECT",
      typeid: 4,
      image: projectmanagement,
      description:
        "A full-stack project management platform that helps teams plan projects, assign tasks, monitor progress, and collaborate through secure role-based dashboards, real-time project tracking, and automated completion analytics.",
      skills: [
        "REACT",
        "TAILWIND CSS",
        "NODE.JS",
        "EXPRESS",
        "MONGODB",
        "JWT",
        "BCRYPT",
      ],
      link: "https://project-management-system-058.netlify.app/",
      gitlab: "https://gitlab.com/abhishekmevada/project-management-system",
      github: null,
    },
    {
      id: 5,
      name: "E-Commerce Platform",
      type: "INTERNSHIP PROJECT",
      typeid: 4,
      image: ecommerce58,
      description:
        "A full-stack e-commerce platform that enables users to browse products, manage shopping carts, place orders, and securely authenticate accounts through a responsive interface powered by RESTful APIs and scalable backend services.",
      skills: ["REACT", "TAILWIND CSS", "NODE.JS", "EXPRESS", "MONGODB"],
      link: "https://ecommerce85.netlify.app/",
      gitlab: "https://gitlab.com/abhishekmevada/ecommerce",
      github: null,
    },
    {
      id: 6,
      name: "Hospital Appointment System",
      type: "FULL-STACK PROJECT",
      typeid: 2,
      image: hospitalappok,
      description:
        "A full-stack hospital management platform that enables patients to book appointments, doctors to manage consultation schedules, and administrators to oversee healthcare operations through secure role-based access and an intuitive dashboard.",
      skills: ["REACT", "EXPRESS", "NODE.JS", "MONGODB"],
      link: "https://hospitalappointnnent.netlify.app/",
      linkb: "https://hospitalappointnnent.netlify.app/dlogin",
      gitlab: null,
      github: "https://github.com/abhishekmevada/literate-engine",
    },

    {
      id: 7,
      name: "Inventory Management System",
      type: "FULL-STACK PROJECT",
      typeid: 2,
      image: inventry_management,
      description:
        "An AI-powered inventory management system that predicts future product demand using machine learning, helping businesses prevent stock shortages through analytics, automated alerts, and real-time inventory tracking.",
      skills: [
        "PANDAS",
        "MATPLOTLIB",
        "SKLEARN",
        "REACT",
        "EXPRESS",
        "NODE.JS",
        "MONGODB",
      ],
      link: "https://inventrymanagementj.netlify.app/",
      gilab: null,
      github: "https://github.com/abhishekmevada/inventry",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Heart Disease Detector",
      type: "AI/ML PROJECT",
      typeid: 3,
      image: heartdiseasedetection,
      description:
        "A machine learning web application that predicts the likelihood of heart disease using clinical data, providing healthcare professionals and users with quick risk assessments through a simple and responsive interface.",
      skills: ["PANDAS", "MATPLOTLIB", "SKLEARN", "FLASK", "HTML", "CSS", "JS"],
      link: "https://heartdisease.pythonanywhere.com/",
    },

    {
      id: 2,
      name: "EduLens – Student Result Predictor",
      type: "AI/ML PROJECT",
      typeid: 3,
      image: studentpredication,
      description:
        "An educational analytics platform that predicts student academic performance using machine learning, helping educators and students make informed decisions through data-driven performance insights.",
      skills: ["PANDAS", "MATPLOTLIB", "SKLEARN", "FLASK", "HTML", "CSS", "JS"],
      link: "https://studentresultpredictor.pythonanywhere.com/",
    },

    {
      id: 3,
      name: "E-Commerce Platform",
      type: "PERSONAL PROJECT",
      typeid: 5,
      image: ecommerce,
      description:
        "A full-stack e-commerce platform featuring secure authentication, product and vendor management, shopping cart, order processing, group buying, and automated email notifications for a complete online shopping experience.",
      skills: ["HTML", "CSS", "JS", "FLASK", "SQLITE"],
      link: "https://ecommerce8.pythonanywhere.com/",
    },

    {
      id: 4,
      name: "Password Manager",
      type: "PERSONAL PROJECT",
      typeid: 5,
      image: passwordmanager,
      description:
        "A secure password management application that stores user credentials safely and requires an additional identity verification step before revealing sensitive information for enhanced account protection.",
      skills: ["HTML", "CSS", "JS", "FLASK", "SQLITE"],
      link: "https://passwordsmanager.pythonanywhere.com/",
    },

    {
      id: 5,
      name: "Task Manager",
      type: "PERSONAL PROJECT",
      typeid: 5,
      image: taskmanager,
      description:
        "A productivity-focused task management application that helps users organize daily work, track deadlines, and receive timely reminders through a clean, secure, and user-friendly interface.",
      skills: ["HTML", "CSS", "JS", "FLASK", "SQLITE"],
      link: "https://taskmanager5.pythonanywhere.com/",
    },

    {
      id: 6,
      name: "Blog Platform",
      type: "PERSONAL PROJECT",
      typeid: 5,
      image: blog,
      description:
        "A modern blogging platform designed for publishing and managing articles with a clean reading experience, responsive design, and intuitive content organization focused on accessibility and usability.",
      skills: ["HTML", "CSS", "JS", "FLASK", "SQLITE"],
      link: "https://theblogs.pythonanywhere.com/",
    },
  ];

  const skillCategories = [
    {
      ico: <CodeXml />,
      title: "Frontend Development",
      description:
        "Building responsive, accessible, and interactive user interfaces for modern web applications.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      ico: <Server />,
      title: "Backend Development",
      description:
        "Developing secure REST APIs, authentication systems, and server-side application logic.",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "Flask",
        "REST APIs",
        "JWT Authentication",
        "Password Hashing",
      ],
    },
    {
      ico: <Database />,
      title: "Databases",
      description:
        "Designing and managing structured and document-based databases for scalable applications.",
      skills: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "SQLite"],
    },
    {
      ico: <ChartPie />,
      title: "Data Science & Machine Learning",
      description:
        "Using data analysis and machine learning tools to build prediction-based web applications.",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
      ],
    },
    {
      ico: <GitBranch />,
      title: "Tools & Workflow",
      description:
        "Using development tools for version control, API testing, deployment, and collaboration.",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Postman",
        "VS Code",
        "Netlify",
        "PythonAnywhere",
      ],
    },
  ];

  const experiences = [
    {
      id: 1,
      year: "2026",
      exp: [
        {
          id: 1,
          year: "2026",
          type: "Remote Internship",
          company: "CodeSoft",
          role: "MERN Stack Intern",
          title: "Full-Stack Web Application Development",
          description:
            "Completed a remote MERN Stack internship where I developed a Project Management System and an E-Commerce Platform. Implemented JWT authentication, REST APIs, MongoDB database operations, dashboards, task management, shopping cart functionality, and responsive user interfaces.",
          skills: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT Authentication",
            "REST APIs",
          ],
        },
        // {
        //   id: 2,
        //   year: "2026",

        //   type: "Freelance",
        //   company: "Yash Raj Cab Services",
        //   role: "React Developer",
        //   title: "Cab Service Business Website",
        //   description:
        //     "Developed a responsive React website for a cab service business to present its services, booking contact details, and business information. Focused on clear service sections, mobile-friendly navigation, and a professional customer-facing layout.",
        //   skills: ["React.js", "JavaScript", "CSS", "Responsive Design"],
        // },
      ],
    },

    // {
    //   id: 3,
    //   year: "2025",
    //   exp: [
    //     {
    //       id: 3,
    //       year: "2025",
    //       type: "Freelance",
    //       company: "Ratan Industries",
    //       role: "React Developer",
    //       title: "Industrial Business Website",
    //       description:
    //         "Developed a React-based business website for an industrial company. Created structured pages to communicate the company profile, services, and contact information with a responsive layout for desktop and mobile users.",
    //       skills: ["React.js", "JavaScript", "CSS", "Responsive Design"],
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   year: "2024",
    //   exp: [
    //     {
    //       id: 4,
    //       year: "2024",
    //       type: "Freelance",
    //       company: "Connect Cables",
    //       role: "Frontend Developer",
    //       title: "Cable Company Landing Page",
    //       description:
    //         "Developed a business landing page for a cable company using HTML, CSS, and JavaScript. Designed clear content sections for company information, products or services, and customer contact details while maintaining responsive behavior across devices.",
    //       skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    //     },
    //   ],
    // },
  ];

  const openres = () => {
    window.open("Abhishek_Mevada.pdf", "__blank");
  };
  return (
    <>
      <div>
        <header>
          <h1 className="headerName">Abhishek Mevada</h1>
          <button className="navButton" onClick={() => setShowNav(!showNav)}>
            {showNav ? <X /> : <Logs />}
          </button>
          <div
            className="navBox"
            style={{ display: showNav ? "flex" : "none" }}
          >
            <nav>
              <motion.a
                href="#about"
                onClick={() => setShowNav(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                className="navp"
              >
                About{" "}
              </motion.a>
              <motion.a
                href="#projects"
                onClick={() => setShowNav(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.5 }}
                className="navp"
              >
                Projects{" "}
              </motion.a>
              <motion.a
                href="#skills"
                onClick={() => setShowNav(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 1 }}
                className="navp"
              >
                Skills{" "}
              </motion.a>
              <motion.a
                href="#experience"
                onClick={() => setShowNav(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 1.5 }}
                className="navp"
              >
                Experience
              </motion.a>
              <motion.a
                href="#contact"
                onClick={() => setShowNav(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 2 }}
                className="navp"
              >
                Contact{" "}
              </motion.a>
            </nav>
            <div className="headerBox">
              <motion.a
                href="https://github.com/abhishekmevada"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 2.5 }}
                className="headerBoxp"
              >
                <BsGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abhishek-mevada/"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 3 }}
                className="headerBoxp"
              >
                <BsLinkedin />
              </motion.a>
              <motion.p
                onClick={openres}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 3.5 }}
                className="headerBoxp"
              >
                <GrDocumentUser />
              </motion.p>
            </div>
          </div>
        </header>
        <section className="heroSection">
          <div className="heroContainera">
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4 }}
              className="herofirsttil"
            >
              Available for MERN Stack Developer Opportunities
            </motion.p>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 4.5 }}
                className="heroTitle"
              >
                Building Scalable Full-Stack Web Applications with MERN &
                Next.js
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5, duration: 1 }}
                className="heroDescription"
              >
                I'm a MERN Stack Developer specializing in MERN and Next.js,
                focused on building scalable web applications that prioritize
                performance, clean architecture, and intuitive user experiences.
                I've developed 10+ full-stack projects ranging from business
                management systems and e-commerce platforms to healthcare
                solutions and websites for real clients. I enjoy turning
                business requirements into high-performance applications with
                clean architecture, intuitive interfaces, and maintainable code.
              </motion.p>
            </div>
            <div className="heroBox">
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 5.5 }}
                className="ctaButa"
              >
                View Project
              </motion.button>
              <motion.a
                href="Abhishek_Mevada.pdf"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 6 }}
                className="ctaButb"
                download
              >
                Download Resume
              </motion.a>
            </div>
            <div className="heroContainer">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{
                  duration: 0.3,
                  delay: 6.5,
                  y: { duration: 0.1, delay: 0 },
                }}
                className="heroNumberBox"
              >
                <p className="numberBoxpnumber">10+</p>
                <p className="numberBoxpname">Projects Built</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{
                  duration: 0.3,
                  delay: 7,
                  y: { duration: 0.1, delay: 0 },
                }}
                className="heroNumberBox"
              >
                <p className="numberBoxpnumber">3+</p>
                <p className="numberBoxpname">Client Projects</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{
                  duration: 0.3,
                  delay: 7.5,
                  y: { duration: 0.1, delay: 0 },
                }}
                className="heroNumberBox"
              >
                <p className="numberBoxpnumber">15+</p>
                <p className="numberBoxpname">Technologies</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{
                  duration: 0.3,
                  delay: 8,
                  y: { duration: 0.1, delay: 0 },
                }}
                className="heroNumberBox"
              >
                <p className="numberBoxpnumber">1</p>
                <p className="numberBoxpname">Internship Completed</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 8.5 }}
              className="heroContainer"
            >
              <p className="badges">Available Full-Time</p>
              <p className="badges">Open to Remote Opportunities</p>
            </motion.div>
          </div>
          <div className="heroContainerb">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 9 }}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="aaaa"
            >
              {heroproject.map((hproject, index) => (
                <div
                  key={hproject.id}
                  className="heroProjectBox"
                  style={{
                    zIndex: heroproject.length - index,
                    transform: `translateY(${index * 10}px) scale(${1 - index * 0.05})`,
                    transition: "all 2s ease",
                  }}
                >
                  <div className="aheroPro">
                    {loading && <div className="skelationloading"></div>}
                    <img
                      src={hproject.projectImg}
                      onLoad={() => setLoading(false)}
                      className="heroProjectImg"
                      alt={hproject.projectName}
                    />
                  </div>

                  <div className="heroProjectBody">
                    <p className="heroProjectTitle">{hproject.projectName}</p>
                    <p>{hproject.projectDescription}</p>
                    <div className="heroProjectminBox">
                      {hproject.projectSkill.map((hpskil, index) => (
                        <p className="heroProjectskillp" key={index}>
                          {hpskil}
                        </p>
                      ))}
                    </div>
                    <div className="heroProjectlinkBox">
                      <a
                        href={hproject.projectLink}
                        target="__blank"
                        className="projectLink"
                      >
                        <BiWorld className="liveProIco" /> Live Project
                      </a>
                      <a
                        href={hproject.projectGithub}
                        target="__blank"
                        className="projectLinkb"
                      >
                        <FaGitlab /> GitLab
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        <section id="about" className="aboutSection">
          <p style={{ fontSize: "18px" }}>ABOUT</p>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h1 style={{ color: "var(--primary-color)" }}>
              Building Software That Solves Real Business Problems
            </h1>
            <p>
              Delivering scalable web applications through clean architecture,
              performance-focused development, and practical business solutions.
            </p>
          </div>

          <div className="aboutContainer">
            <div className="aboutleftCard">
              <div className="aboutImgBox">
                {loading && <div className="skelationloading"></div>}

                <img
                  onLoad={() => setLoading(false)}
                  onError={() => setLoading(false)}
                  src={aboutImg}
                  alt="Abhishek Mevada"
                  className="aboutImg"
                />
              </div>

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p className="aboutName">Abhishek Mevada</p>
                  <p>MERN Stack Developer</p>
                </div>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <p className="aboutlefticop">
                    <IoLocationSharp /> India
                  </p>
                  <p className="aboutlefticop">
                    <RiGraduationCapFill /> Final-Year Computer Engineering
                    Student
                  </p>
                  <p className="aboutlefticop">
                    <IoCodeSlashSharp />
                    Freelance Web Developer
                  </p>
                </div>

                <p className="badges" style={{ width: "max-content" }}>
                  Open to Full-Time Opportunities
                </p>
              </div>
            </div>
            <div className="aboutrightCard">
              <p>
                I'm a final-year Computer Engineering student and MERN Stack
                Developer focused on building scalable web applications for
                businesses and real users. Over the past few years, I've
                developed full-stack solutions including project management
                systems, e-commerce platforms, hospital appointment software,
                inventory management systems, and websites for real clients.
              </p>
              <div className="aboutleftconworkphiloBOX">
                <p style={{ fontSize: "18px", fontWeight: "600" }}>
                  How I Build Software
                </p>
                <div className="phiocontainer">
                  <div className="phioBox">
                    <p className="phioBoxtitle">Problem First</p>
                    <p className="phioBoxdes">
                      I focus on understanding business requirements before
                      writing code, ensuring every feature solves a real user
                      problem.
                    </p>
                  </div>
                  <div className="phioBox phib">
                    <p className="phioBoxtitle">Clean Architecture</p>
                    <p className="phioBoxdes">
                      I write modular and maintainable code that is easy to
                      scale, debug, and extend.
                    </p>
                  </div>
                  <div className="phioBox phic">
                    <p className="phioBoxtitle">Performance</p>
                    <p className="phioBoxdes">
                      I build responsive applications optimized for speed,
                      accessibility, and a smooth user experience.
                    </p>
                  </div>
                  <div className="phioBox phid">
                    <p className="phioBoxtitle">Continuous Learning</p>
                    <p className="phioBoxdes">
                      I constantly improve my skills by building real-world
                      applications and exploring modern technologies like
                      Next.js and System Design.
                    </p>
                  </div>
                  <p className="phiIco">
                    <Route />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="projectSection">
          <p style={{ fontSize: "18px" }}>PROJECTS</p>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h1 style={{ color: "var(--primary-color)" }}>
              Featured Projects That Demonstrate My Full-Stack Development
              Experience
            </h1>
            <p>
              A collection of production-ready applications showcasing my
              expertise in MERN Stack, Next.js, REST APIs, authentication,
              database design, and scalable web development.
            </p>
          </div>
          <div className="topprojectContainer">
            {top_project.map((pro) => (
              <div key={pro.id} className="topprojectBox">
                <div className="topprojectImgBox">
                  {loading && <div className="skelationloading"></div>}

                  <img
                    onLoad={() => setLoading(false)}
                    onError={() => setLoading(false)}
                    src={pro.image}
                    alt={pro.name}
                    className="topproImg"
                  />
                  {/* <a
                    href={pro.link}
                    className="topprojectImgBoxLink"
                    style={{
                      left: position.x,
                      top: position.y,
                    }}
                  >
                    Live Website
                  </a> */}
                </div>
                <div className="topprojectBody">
                  <div className="jjtopprojectbadgeBox">
                    <p className="topprojectTitle">{pro.name}</p>
                    <p
                      className="topperprojectBadge"
                      style={{
                        background:
                          pro.typeid === 1
                            ? "var(--secondary-color)" // CLIENT PROJECT
                            : pro.typeid === 2
                              ? "var(--cta-but)" // FULL-STACK PROJECT
                              : pro.typeid === 3
                                ? "#FFF7ED" // FULL-STACK + AI/ML
                                : pro.typeid === 4
                                  ? "#ECFDF5" // INTERNSHIP PROJECT
                                  : pro.typeid === 5
                                    ? "#F8FAFC" // PERSONAL PROJECT
                                    : "#F8FAFC",

                        color:
                          pro.typeid === 1
                            ? "#2563EB"
                            : pro.typeid === 2
                              ? "#15803D"
                              : pro.typeid === 3
                                ? "#C2410C"
                                : pro.typeid === 4
                                  ? "#0F766E"
                                  : "#475569",

                        border:
                          pro.typeid === 1
                            ? "1px solid #BFDBFE"
                            : pro.typeid === 2
                              ? "1px solid #BBF7D0"
                              : pro.typeid === 3
                                ? "1px solid #FED7AA"
                                : pro.typeid === 4
                                  ? "1px solid #99F6E4"
                                  : "1px solid #CBD5E1",
                      }}
                    >
                      {pro.type}
                    </p>
                  </div>

                  <p className="topprojectDes">{pro.description}</p>
                  <div className="heroProjectminBox">
                    {pro.skills.map((hpskil, index) => (
                      <p className="heroProjectskillp" key={index}>
                        {hpskil}
                      </p>
                    ))}
                  </div>
                  <div className="topprojectminBox">
                    {pro.id === 4 ? (
                      <>
                        <a
                          href={pro.link}
                          className="projectLink"
                          target="_-blank"
                        >
                          <BiWorld className="liveProIco" /> Patient Portal
                        </a>
                        <a
                          href={pro.linkb}
                          className="projectLink"
                          target="_-blank"
                        >
                          <BiWorld className="liveProIco" /> Doctor Portal
                        </a>
                      </>
                    ) : (
                      <a
                        href={pro.link}
                        className="projectLink"
                        target="_-blank"
                      >
                        <BiWorld className="liveProIco" /> Live Website
                      </a>
                    )}
                    {pro.typeid === 1 ? null : (
                      <a
                        href={pro?.github ?? pro?.gitlab}
                        target="_-blank"
                        className="projectLinkb"
                        style={{ cursor: "pointer" }}
                      >
                        <FaGitlab /> Git Hub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="showmoreprojBut"
            onClick={() => setShowproj(!showproj)}
          >
            {showproj ? (
              <>
                <ChevronDown /> See More Projects
              </>
            ) : (
              <>
                <ChevronUp /> See Less Project
              </>
            )}
          </button>
          <div
            className="projectContainer"
            style={{ display: showproj ? "none" : "grid" }}
          >
            {projects.map((pro) => (
              <div key={pro.id} className="projectBox">
                <div className="aheroPro">
                  {loading && <div className="skelationloading"></div>}

                  <img
                    onLoad={() => setLoading(false)}
                    onError={() => setLoading(false)}
                    src={pro.image}
                    className="jProjectImg"
                    alt={pro.name}
                  />
                </div>

                <div className="heroProjectBody">
                  <div className="jjtopprojectbadgeBox">
                    <p className="heroProjectTitle">{pro.name}</p>
                    <p
                      className="topperprojectBadge"
                      style={{
                        background:
                          pro.typeid === 1
                            ? "var(--secondary-color)" // CLIENT PROJECT
                            : pro.typeid === 2
                              ? "var(--cta-but)" // FULL-STACK PROJECT
                              : pro.typeid === 3
                                ? "#FFF7ED" // FULL-STACK + AI/ML
                                : pro.typeid === 4
                                  ? "#ECFDF5" // INTERNSHIP PROJECT
                                  : pro.typeid === 5
                                    ? "#F8FAFC" // PERSONAL PROJECT
                                    : "#F8FAFC",

                        color:
                          pro.typeid === 1
                            ? "#2563EB"
                            : pro.typeid === 2
                              ? "#15803D"
                              : pro.typeid === 3
                                ? "#C2410C"
                                : pro.typeid === 4
                                  ? "#0F766E"
                                  : "#475569",

                        border:
                          pro.typeid === 1
                            ? "1px solid #BFDBFE"
                            : pro.typeid === 2
                              ? "1px solid #BBF7D0"
                              : pro.typeid === 3
                                ? "1px solid #FED7AA"
                                : pro.typeid === 4
                                  ? "1px solid #99F6E4"
                                  : "1px solid #CBD5E1",
                      }}
                    >
                      {pro.type}
                    </p>
                  </div>
                  <p>{pro.description}</p>
                  <div className="heroProjectminBox">
                    {pro.skills.map((hpskil, index) => (
                      <p className="heroProjectskillp" key={index}>
                        {hpskil}
                      </p>
                    ))}
                  </div>
                  <div className="heroProjectlinkBox">
                    <a href={pro.link} target="__blank" className="projectLink">
                      <BiWorld className="liveProIco" /> Live Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="showmoreprojBut"
            onClick={() => setShowproj(!showproj)}
            style={{ display: showproj ? "none" : "flex" }}
          >
            {showproj ? (
              <>
                <ChevronDown /> See More Projects
              </>
            ) : (
              <>
                <ChevronUp /> See Less Project
              </>
            )}
          </button>
        </section>
        <section id="skills" className="skillSection">
          <p style={{ fontSize: "18px" }}>SKILLS</p>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h1 style={{ color: "var(--primary-color)" }}>
              Technologies I Use to Build Full-Stack Applications
            </h1>
            <p>
              A focused toolkit for building responsive interfaces, scalable
              backend services, secure APIs, and data-driven web applications.
            </p>
          </div>
          <div className="skillContainer">
            {skillCategories.map((skil, index) => (
              <div key={index} className="skillBox">
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <p className="skillboxIco">{skil.ico}</p>{" "}
                  <p className="skillboxtitle">{skil.title}</p>
                </div>
                <p>{skil.description}</p>
                <div className="skillminBox">
                  {skil.skills.map((sk, index) => (
                    <p key={index} className="skillBoxskills">
                      {sk}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="experience" className="experienceSection">
          <p style={{ fontSize: "18px" }}>EXPERIENCE</p>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h1 style={{ color: "var(--primary-color)" }}>
              Practical Experience Building Real-World Web Applications
            </h1>
            <p>
              Freelance projects, internship work, and independent full-stack
              applications built with a focus on usability, scalable
              architecture, and business requirements.
            </p>
          </div>
          <div className="experienceContainer">
            {experiences.map((exp) => (
              <>
                <div key={exp.id} className="jexperienceBox">
                  <div className="timelineline">
                    <div className="experienceYeardot"></div>
                    {exp.year}
                  </div>
                  <div className="aexperienceBox">
                    {exp.exp.map((exj) => (
                      <div key={exj.id} className="experienceBox">
                        <p className="experienceCompanyname">{exj.company}</p>
                        <p className="experiencetype">
                          {exj.type} - {exj.role}
                        </p>
                        <p className="experienceboxTitle">{exj.title}</p>
                        <p>{exj.description}</p>
                        <div className="heroProjectminBox">
                          {exj.skills.map((expskil, index) => (
                            <p key={index} className="heroProjectskillp">
                              {expskil}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
        <section id="contact" className="contactSection">
          <p style={{ fontSize: "18px" }}>CONTACT</p>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h1 style={{ color: "var(--primary-color)" }}>
              Let’s Build Something Useful Together
            </h1>
            <p className="contactDes">
              I am open to React.js, MERN Stack, frontend development,
              internships, junior developer roles, and freelance web projects.
              Reach out if you have an opportunity, project requirement, or
              collaboration idea.
            </p>
          </div>
          <div className="contactContainer">
            <div className="contactInfo">
              <h3>Get In Touch</h3>

              <p>
                Have a role, project, or collaboration in mind? You can reach me
                directly through email, LinkedIn, or GitHub.
              </p>

              <div className="contactminBoc">
                <a
                  href="mailto:abhishekmevada85@gmail.com"
                  className="contactLink"
                >
                  <MdEmail style={{ fontSize: "25px" }} /> Email Me
                </a>

                <a
                  href="https://www.linkedin.com/in/abhishek-mevada/"
                  target="_blank"
                  rel="noreferrer"
                  className="contactLink"
                >
                  <BsLinkedin className="contactIco" /> LinkedIn Profile
                </a>

                <a
                  href="https://github.com/abhishekmevada"
                  target="_blank"
                  rel="noreferrer"
                  className="contactLink"
                >
                  <BsGithub className="contactIco" /> GitHub Profile
                </a>
              </div>
              <a
                href="/Abhishek_Mevada.pdf"
                target="_blank"
                rel="noreferrer"
                className="ctaButa aresume"
                download
              >
                Download Resume
              </a>
            </div>
            <div className="contactBox">
              <form className="contactForm" onSubmit={contactFun}>
                <div className="formGroup">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contactformInput"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    value={contactform.name}
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contactformInput"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={contactform.email}
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="contactformInput"
                    placeholder="Internship, job opportunity, project inquiry..."
                    onChange={handleChange}
                    value={contactform.subject}
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contactformTextarea"
                    placeholder="Write your message here..."
                    onChange={handleChange}
                    value={contactform.message}
                    required
                  />
                </div>

                <button type="submit" className="sendMessageButton">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
