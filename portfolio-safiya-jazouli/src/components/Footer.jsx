import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center flex flex-col items-center gap-4 mt-6">
    <h1 className="text-lg">&copy; Safiya Jazouli 2025</h1>
    <br></br>
      <div className="flex gap-6 text-2xl ">
        <a href="https://www.linkedin.com/in/safiya-jazouli-ab2343352/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://github.com/safiya-sketch" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition-colors" />
        </a>
        <a href="tel:+330636175887">
          <FaPhone className="hover:text-green-500 transition-colors" />
        </a>
        <a href="mailto:safiya.jazouli@epitech.eu">
          <FaEnvelope className="hover:text-red-500 transition-colors" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
