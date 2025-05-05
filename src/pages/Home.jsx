import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = () => {
    setIsScrolling(true);
    document.getElementById("about-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full font-sans">
      {/* Fullscreen Hero Section */}

      <section className="w-full h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center text-white relative overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Continuous floating animation */}
        <motion.div
          animate={{
            y: [0, -10, 0, 10, 0], // up and down movement
          }}
          transition={{
            duration: 5, // total duration of one cycle
            repeat: Infinity, // infinite loop
            ease: "easeInOut",
          }}
          className="z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6">
            Explore my work, skills, and contact info.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToSection} // Attach the click handler here
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-xl hover:bg-blue-700 transition-all transform shadow-md"
          >
            See More
          </motion.button>
        </motion.div>

        {/* Pulsing blobs that animate continuously */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-purple-800 opacity-30 rounded-full blur-3xl -z-10"
        ></motion.div>

        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800 opacity-20 rounded-full blur-3xl -z-10"
        ></motion.div>
      </section>

      {/* Horizontal Scrollable Section with Projects */}
      <section className="flex overflow-x-auto py-20 bg-gray-100">
        <div className="flex space-x-6 w-max">
          {/* Project 1 */}
          <div className="min-w-[250px] h-64 bg-blue-300 flex flex-col items-center justify-center rounded-xl text-white p-4 shadow-md transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-sm mb-4">E-commerce Website</p>
            <p className="text-xs text-gray-200">
              Tools: React, Node.js, MongoDB
            </p>
            <p className="text-xs text-gray-200">
              Skills: Full-stack development, REST APIs
            </p>
          </div>

          {/* Project 2 */}
          <div className="min-w-[250px] h-64 bg-green-300 flex flex-col items-center justify-center rounded-xl text-white p-4 shadow-md transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-sm mb-4">Portfolio Website</p>
            <p className="text-xs text-gray-200">
              Tools: Next.js, Tailwind CSS
            </p>
            <p className="text-xs text-gray-200">
              Skills: Static site generation, SEO optimization
            </p>
          </div>

          {/* Project 3 */}
          <div className="min-w-[250px] h-64 bg-yellow-300 flex flex-col items-center justify-center rounded-xl text-white p-4 shadow-md transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="text-sm mb-4">Social Media App</p>
            <p className="text-xs text-gray-200">
              Tools: React, Firebase, Express
            </p>
            <p className="text-xs text-gray-200">
              Skills: User authentication, Firestore database
            </p>
          </div>

          {/* Project 4 */}
          <div className="min-w-[250px] h-64 bg-purple-300 flex flex-col items-center justify-center rounded-xl text-white p-4 shadow-md transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Project 4</h3>
            <p className="text-sm mb-4">Task Manager App</p>
            <p className="text-xs text-gray-200">
              Tools: React, Redux, Node.js
            </p>
            <p className="text-xs text-gray-200">
              Skills: State management, RESTful API
            </p>
          </div>

          {/* Project 5 */}
          <div className="min-w-[250px] h-64 bg-red-300 flex flex-col items-center justify-center rounded-xl text-white p-4 shadow-md transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Project 5</h3>
            <p className="text-sm mb-4">Blog Platform</p>
            <p className="text-xs text-gray-200">
              Tools: React, Node.js, MongoDB
            </p>
            <p className="text-xs text-gray-200">
              Skills: CRUD operations, Authentication
            </p>
          </div>

          {/* New Project - Online Market */}
          <div className="min-w-[250px] h-64 bg-orange-300 flex flex-col items-center justify-center rounded-xl text-white p-4 shadow-md transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Online Market</h3>
            <p className="text-sm mb-4">E-commerce Platform</p>
            <p className="text-xs text-gray-200">
              Tools: React, Express.js, MongoDB
            </p>
            <p className="text-xs text-gray-200">
              Skills: Payment gateway, Real-time features
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}

      {/* Horizontal Scrollable Section with Projects */}

      {/* About Section */}
      <section id="about-section" className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* About Me */}
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-600 mb-4 flex items-center">
                👨‍💻 About Me
              </h2>
              <p className="text-gray-700 mb-4">
                Hello! I'm a passionate full-stack developer with a keen
                interest in building modern, efficient, and user-friendly web
                applications. My goal is to craft seamless user experiences
                while ensuring robust and scalable backends.
              </p>
              <p className="text-gray-700 mb-4">
                I graduated with a degree in Computer Science and have been
                working on several exciting projects involving web development,
                databases, and cloud computing. I’m particularly skilled in
                working with the MERN stack (MongoDB, Express.js, React, and
                Node.js), but I’m also constantly exploring new technologies to
                expand my knowledge and improve my projects.
              </p>
              <p className="text-gray-700 mb-4">
                Over the past few years, I've had the opportunity to work on
                various projects, including e-commerce platforms, task
                management systems, and real-time chat applications. My primary
                focus is always on building applications that are both
                functional and user-friendly, ensuring that users have the best
                possible experience.
              </p>
              <p className="text-gray-700 mb-4">
                My technical expertise includes working with JavaScript
                frameworks, backend API development, and cloud services such as
                AWS and Google Cloud. I’m also passionate about clean code
                principles, code optimization, and writing tests to ensure that
                the applications I build are maintainable and reliable.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://t4.ftcdn.net/jpg/08/65/35/55/360_F_865355512_g0rHtSt8Wsx1pgHMNv5vfOcwwGRHMqFv.jpg"
                alt="About Me"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-12 md:space-x-reverse">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-600 mb-4 flex items-center">
                🛠 Skills
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>• Front-End: React, Next.js, Tailwind CSS</li>
                <li>• Back-End: Node.js, Express.js, REST APIs</li>
                <li>• Databases: MongoDB, PostgreSQL</li>
                <li>• Tools: Git, Docker, Firebase, AWS</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://media.istockphoto.com/id/637711198/photo/hand-with-marker-writing-skill-concept.jpg?s=612x612&w=0&k=20&c=Dq1KVhcx71mfFq36b8Ieaz-H9IKCdu9YdDSkY_5XfM4="
                alt="Skills"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Experience */}
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 px-4 py-6">
  <h2 className="text-3xl font-bold text-purple-600 mb-4 flex items-center">
    <span role="img" aria-label="experience" className="mr-2">📈</span>
    Experience
  </h2>
  <p className="text-gray-700 mb-4">
    I've worked on full-stack projects — from building responsive UIs to designing RESTful APIs and managing cloud deployments.
  </p>
  <p className="text-gray-700 mb-4">
    Most notably, I had a 6-month internship at <strong>Nexisworx Technology</strong>, where I focused on frontend development. I worked on designing interactive user interfaces, optimizing web applications, and collaborating with backend developers to integrate APIs and improve functionality.
  </p>
  <p className="text-gray-700">
    Currently, I’m exploring SaaS and real-time app development.
  </p>

  <a
  href="/ProfessionalresumeNex%20(1).pdf"  // Path to your CV in the public folder
  download="DashrathCV"  // The name the us er will see when downloading
  className="mt-4 inline-block bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700"
>
  Download CV
</a>
</div>

            <div className="md:w-1/2">
              <img
                src="https://careersportal.ie/sites/default/files/2022-12/Work%20Experience.png"
                alt="Experience"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Goals */}
          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-12 md:space-x-reverse">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-pink-600 mb-4 flex items-center">
                🎯 Goals
              </h2>
              <p className="text-gray-700">
                I aim to dive deeper into cloud computing, machine learning, and
                advanced web optimization.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://plus.unsplash.com/premium_photo-1682309772037-8da49abb2b84?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hbHN8ZW58MHx8MHx8fDA%3D"
                alt="Goals"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Hobbies */}
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-yellow-600 mb-4 flex items-center">
                📚 Hobbies
              </h2>
              <p className="text-gray-700">
                Outside of coding, I enjoy gaming, tech blogs, gadget s, and
                contributing to open-source projects.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://media.istockphoto.com/id/1097132584/vector/hobby-persons-people-of-creative-professions-at-work-artistic-occupations-retro-hobbies.jpg?s=612x612&w=0&k=20&c=fCgGftjb4x_Vo9s-ozzEGC94ZWLDtB3DsxVbV40WsJ4="
                alt="Hobbies"
                className="w-64 h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>


        
      </section>

      <section>
        {/* Footer */}

        <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About / Branding */}
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Codedisu</h2>
              <p className="text-sm text-gray-400">
                Passionate full-stack developer crafting modern web experiences
                using React, Node.js & Tailwind.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Quick Links
              </h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#projects" className="hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="hover:text-white"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Let's Connect
              </h3>
              <div className="flex space-x-4 text-2xl">
                <a
                  href="https://github.com/DASHRATH2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/dashrath-yadav-006189250/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-white"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Codedisu. Built with React & Tailwind
            CSS.
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Home;
