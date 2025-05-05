import { FaLaptopCode, FaTools, FaLightbulb, FaRocket } from "react-icons/fa";

function About() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-purple-600 text-center">About Me</h2>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
        <div className="flex items-center mb-4">
          <FaLaptopCode className="text-purple-600 text-2xl mr-3" />
          <h3 className="text-2xl font-semibold text-gray-800">Who I Am</h3>
        </div>
        <p className="text-gray-700 text-lg">
          I am a passionate full-stack developer with a strong foundation in both frontend and backend technologies.
          I love building modern web applications and enjoy solving problems with clean, efficient code.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
        <div className="flex items-center mb-4">
          <FaTools className="text-purple-600 text-2xl mr-3" />
          <h3 className="text-2xl font-semibold text-gray-800">Technologies I Work With</h3>
        </div>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-1">
          <li><strong>Frontend:</strong> React.js, Tailwind CSS, JavaScript, HTML, CSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js, RESTful APIs</li>
          <li><strong>Databases:</strong> MongoDB, PostgreSQL</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>Cloud:</strong> AWS, Firebase</li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
        <div className="flex items-center mb-4">
          <FaLightbulb className="text-purple-600 text-2xl mr-3" />
          <h3 className="text-2xl font-semibold text-gray-800">My Approach</h3>
        </div>
        <p className="text-gray-700 text-lg">
          My goal is to create user-friendly, performant applications that are scalable and easy to maintain.
          I emphasize writing clean, reusable code and strive to deliver exceptional user experiences.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center mb-4">
          <FaRocket className="text-purple-600 text-2xl mr-3" />
          <h3 className="text-2xl font-semibold text-gray-800">Current Focus</h3>
        </div>
        <p className="text-gray-700 text-lg">
          I'm currently exploring GraphQL, real-time applications (e.g., WebSockets), and cloud computing platforms.
          I love staying updated with the latest trends and continuously improving my skills.
        </p>
      </div>
    </div>
  );
}

export default About;
