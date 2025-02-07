"use client";
import { useState }from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";
const projects = [
  {
    year: "2024",
    name: "AI-Blog-Writer",
    type: "Personal",
    description: "A blog generator.This application leverages the power of MindsDB to generate content based on the topics you provide, making it easier and faster to create engaging blog posts.Also you can Download the Blog Post for FREE.",
    link: "https://github.com/Aryan741x/Ai-Blog.png",
    image: "/images/Ai-Blog.png",
    tags: ["Wordpress","Elementor","Figma"],
  },
  {
    year: "2024",
    type: "Personal",
    name: "WorkSpace",
    description: "Role-based access system using OPAL and Rego policies.WorkSpace is a tool that improves workplace efficiency and security by providing managers, senior managers, and employees with customised permissions and seamless task management features.",
    link: "https://github.com/Aryan741x/WorkSpace",
    image: "/images/WorkSpace.png",
    tags: ["Wordpress","Elementor","Figma"],
  },
  {
    year: "2024",
    type: "Personal",
    name: "SignalSense",
    description: "Enhancing Driver Safety with Intelligent Traffic Sign Detection. This application leverages the power of machine learning to detect various traffic signs, providing drivers with essential guidelines and instructions to enhance their driving experience and safety.",
    link: "https://github.com/Aryan741x/SignalSense",
    image: "/images/SignalSense.png",
    tags: ["Wordpress","Elementor","Figma"],
  },
  {
    year: "2023",
    name: "ShinyDEX",
    type: "Personal",
    description: "The Shiny Pokedex is a web application that provides information about shiny versions of Pokemon, including their type and description. Each Pokemon entry includes details such as its name, type, and a brief description. Users can also view a high-resolution image of the shiny Pokemon to get a better visual representation.",
    link: "https://github.com/Aryan741x/Shinydex",
    image: "/images/Pokedex.png",
    tags: ["Wordpress","Elementor","Figma"],
  },
  {
    year: "2023",
    name: "InstaMeds",
    type: "Personal",
    description: "InstaMeds diagnose disease on the basis of the Symptoms Provided. It is a web application that helps users diagnose diseases based on the symptoms they provide. Users can enter their symptoms, and the application will provide a list of possible diseases that match those symptoms. Users can then click on a disease to view more information about it, including its causes, symptoms, and treatment options.",
    link: "https://github.com/Aryan741x/InstaMEDS",
    image: "/images/InstaMeds.png",
    tags: ["Wordpress","Elementor","Figma"],
  },
  {
    year: "2022",
    name: "Rhythm",
    type: "Personal",
    description: "This project encompasses two main functionalities: recording and processing sound, and melody generation using a genetic algorithm. The first part involves capturing audio, applying auto-tuning, and visualizing Fourier graphs. The second part focuses on generating melodies through a genetic algorithm, providing a diverse set of musical sequences.",
    link: "https://github.com/Aryan741x/Codejam",
    image: "/images/Rhythm.jpeg",
    tags: ["Wordpress","Elementor","Figma"],
  }
];
export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs.sendForm("service_52r1kqm", "template_heev6fc", event.target as HTMLFormElement, "DV5hUwJRhqcgNGWtE")
      .then(() => {
        alert("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again later.");
      });
  };
  return (
    <>
      <Head>
        <title>Aryan Sharma | Portfolio</title>
        <meta name="description" content="Portfolio website of Aryan Sharma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <nav className="flex justify-between items-center p-6 bg-gray-900 text-white max-w-8xl lg:px-12 fixed top-0 w-full z-50">
        <h1 className="text-xl font-semibold">Aryan Sharma</h1>
        <div className="flex gap-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="border px-4 py-2 rounded-md hover:bg-gray-700">Contact ↗</a>
        </div>
      </nav>
      
      <main className="min-h-screen bg-gray-900 text-white">
        <section id="home" className="flex flex-col items-start text-left py-40 bg-gradient-to-b from-gray-800 to-gray-900 pl-12 ">
          <h1 className="text-5xl font-bold">Hi, I'm Aryan Sharma</h1>
          <h2 className="text-3xl font-semibold mt-2">Web Developer & AI/ML Enthusiast</h2>
          <p className="mt-6 max-w-4xl text-lg text-gray-300">
          I am a passionate web developer and AI/ML enthusiast with a strong background in building efficient, scalable, and intelligent applications. My expertise lies in developing full-stack solutions using React, Next.js, Flask, and Tailwind CSS, while also leveraging AI-driven techniques for automation and data-driven insights. I thrive on solving complex challenges and continuously exploring emerging technologies to push the boundaries of innovation.
          </p>
          <div className="mt-8 text-lg">
            <p><strong>Languages:</strong> Python, JavaScript, C++</p>
            <p><strong>Frameworks:</strong> React, Next.js, Flask, ExpressJS</p>
            <p><strong>Libraries:</strong> TensorFlow, Keras, NumPy, Pandas</p>
            <p><strong>Database:</strong> MongoDB, MySQL</p>
            <p><strong>Tools:</strong> Git/GitHub, Docker, Figma, Vercel</p>
          </div>
        </section>
        
        <section id="projects" className="py-32 bg-gray-800">
          <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold">My Projects</h2>
              <p className="text-gray-400 mt-2">A collection of my recent work and contributions</p>
            </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 relative h-48">
                  <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" className="rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                </div>
                <div className="p-6 w-full md:w-2/3">
                  <p className="text-gray-400 text-sm">{project.year} • {project.type}</p>
                  <h3 className="text-2xl font-semibold mt-1">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-600 text-white px-3 py-1 text-xs rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mt-2 text-sm">{project.description}</p>
                  <Link href={project.link} legacyBehavior>
                    <a className="mt-4 inline-block text-blue-400">View Project →</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section id="contact" className="py-32 bg-gradient-to-t from-gray-800 to-gray-900">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-8">
            <div>
              <h2 className="text-4xl font-bold">Contact</h2>
              <p className="text-gray-400 mt-2">Send me a message or reach out via the links</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Reach Out</h3>
              <p className="text-gray-400 mt-2">📧 Email: aryancollegexyz@gmail.com</p>
              <p className="text-gray-400">🐙<a href='https://github.com/Aryan741x' target='_blank' rel='noopener noreferrer'>GitHub</a></p>
              <p className="text-gray-400">🔗<a href='https://www.linkedin.com/in/aryan-sharma-345940265/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>
              <h3 className="text-2xl font-semibold mt-6">Or Send a Message</h3>
              <form className="mt-4 space-y-4" onSubmit={sendEmail}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  value={formData.name}
                  onChange={handleChange} 
                  className="w-full p-3 bg-gray-700 rounded-md text-white" 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleChange} 
                  className="w-full p-3 bg-gray-700 rounded-md text-white" 
                />
                <textarea 
                  name="message"
                  placeholder="Message" 
                  value={formData.message}
                  onChange={handleChange} 
                  className="w-full p-3 bg-gray-700 rounded-md text-white h-32"
                ></textarea>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Submit
                </button>
              </form>
            </div>
          </div>
          
        </section>
      </main>
    </>
  );
}
