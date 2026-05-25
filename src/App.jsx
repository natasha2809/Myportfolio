import React from 'react';
import { FaHackerrank, FaGithub, FaLinkedin, FaCertificate, FaCode, FaCheckCircle, FaBriefcase } from 'react-icons/fa';

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans antialiased">
      
      {/* Header / Hero Section */}
      <header className="bg-white border-b border-gray-100 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            Sunantha
          </h1>
          <p className="text-xl text-blue-600 font-semibold mt-3">
            QA Architect & Automation Engineer
          </p>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
            Specializing in building robust, scalable automated testing frameworks from scratch. Focused on data integrity, API synchronization, and seamless CI/CD delivery pipelines.
          </p>
          
          {/* External Platform Links */}
          <div className="flex justify-center space-x-6 text-3xl mt-8">
            <a href="https://hackerrank.com/natasha2809" target="_blank" rel="noreferrer" className="text-green-600 hover:scale-110 transition-transform" title="HackerRank">
              <FaHackerrank />
            </a>
            <a href="https://github.com/natasha2809" target="_blank" rel="noreferrer" className="text-gray-900 hover:scale-110 transition-transform" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="text-blue-700 hover:scale-110 transition-transform" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 space-y-12">
        
        {/* Core Technical Skills */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-6 border-b border-gray-100 pb-3">
            <FaCode className="text-blue-600 text-xl" />
            <h2 className="text-2xl font-bold text-gray-900">Technical Expertise</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-500 uppercase tracking-wider text-xs">Automation & Core</h3>
              <p className="text-gray-700 font-medium mt-1">Playwright, Selenium WebDriver, TestNG</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500 uppercase tracking-wider text-xs">Languages</h3>
              <p className="text-gray-700 font-medium mt-1">Java, JavaScript/TypeScript, SQL, PLSQL</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500 uppercase tracking-wider text-xs">CI/CD & Tools</h3>
              <p className="text-gray-700 font-medium mt-1">Jenkins, Git, Node.js (v22)</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-500 uppercase tracking-wider text-xs">Database Testing</h3>
              <p className="text-gray-700 font-medium mt-1">Java JDBC, Component-level Validation</p>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-6 border-b border-gray-100 pb-3">
            <FaBriefcase className="text-blue-600 text-xl" />
            <h2 className="text-2xl font-bold text-gray-900">Professional Milestone Overview</h2>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <h3 className="text-lg font-bold text-gray-900">Software Quality Assurance Engineer</h3>
              <p className="text-sm text-gray-500 font-medium">Chata.ai • 2025 – Present</p>
              <p className="text-gray-600 mt-2 text-sm">
                Engineering UI and end-to-end integrated testing frameworks using Playwright to handle complex arithmetic dashboards, persistent filters, and live server-side data validations.
              </p>
            </div>
            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="text-lg font-bold text-gray-900">Senior QA Architect & Scrum Master</h3>
              <p className="text-sm text-gray-500 font-medium">Blue Yonder • 2020 – 2023</p>
            </div>
          </div>
        </section>

        {/* Certifications Block */}
        <section>
          <div className="flex items-center space-x-2 mb-6 border-b border-gray-200 pb-3">
            <FaCheckCircle className="text-blue-600 text-xl" />
            <h2 className="text-2xl font-bold text-gray-900">Certifications & Credentials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <div className="text-blue-500 text-2xl mt-1"><FaCertificate /></div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">ISTQB Certified Tester</h3>
                <p className="text-xs text-gray-500">Advanced Level Test Automation Engineer</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <div className="text-blue-500 text-2xl mt-1"><FaCertificate /></div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Oracle Certified Associate</h3>
                <p className="text-xs text-gray-500">Java SE Programmer / PLSQL Developer</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
