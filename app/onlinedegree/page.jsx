"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AiPage from "../ai/page";
const OnlineDegrees = () => {
  return (
    <div className="min-h-screen bg-blue-50 pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card className="w-full mb-10 shadow-lg">
          <CardHeader className="bg-blue-100">
            <CardTitle className="text-4xl font-extrabold text-gray-900 py-4 px-6">
              Online Degrees
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 py-8">
            <p className="text-lg mb-6 text-gray-700">
              Boost your career by earning a degree from top universities
              online. Whether you're pursuing Business, Technology, or
              Healthcare, we’ve got you covered with the best degree options.
            </p>

            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                Top Degree Platforms
              </h3>
              <ul className="list-disc pl-5 text-gray-800 space-y-4">
                <li>
                  <a
                    href="https://www.edx.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                  >
                    edX
                  </a>
                  - Offers degrees from top universities like Harvard and MIT.
                </li>
                <li>
                  <a
                    href="https://www.coursera.org/degrees"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                  >
                    Coursera Degrees
                  </a>
                  - Earn degrees from leading universities and institutions.
                </li>
                <li>
                  <a
                    href="https://online.stanford.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                  >
                    Stanford Online
                  </a>
                  - Advance your education through Stanford's online degrees.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                Degree Categories
              </h3>
              <ul className="list-disc pl-5 text-gray-800 space-y-4">
                <li>Business & Management</li>
                <li>Computer Science & Technology</li>
                <li>Healthcare & Medicine</li>
                <li>Engineering</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                Popular Online Degrees
              </h3>

              {/* Master's Degrees */}
              <div className="bg-white hover:bg-slate-200 p-8 rounded-lg shadow-lg mb-6">
                <h4 className="text-2xl font-semibold mb-4">
                  Master's in Data Science
                </h4>
                <p className="text-gray-700 mb-4">
                  Dive deep into data analysis, machine learning, and
                  statistical methods with this advanced degree.
                </p>
                <a
                  href="https://emasters.iitk.ac.in/course/masters-in-data-science-and-business-analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                  Explore Program
                </a>
              </div>

              <div className="bg-white  hover:bg-slate-200 p-8 rounded-lg shadow-lg mb-6">
                <h4 className="text-2xl font-semibold mb-4">
                  Master's in Business Administration (MBA)
                </h4>
                <p className="text-gray-700 mb-4">
                  Advance your business skills and leadership abilities with a
                  globally recognized MBA.
                </p>
                <a
                  href="https://online.stanford.edu/schools-centers/graduate-school-business"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                  Explore Program
                </a>
              </div>

              <div className="bg-white hover:bg-slate-200 p-8 rounded-lg shadow-lg mb-6">
                <h4 className="text-2xl font-semibold mb-4">
                  Master's in Computer Science
                </h4>
                <p className="text-gray-700 mb-4">
                  Gain in-depth knowledge in algorithms, software development,
                  and systems with this advanced degree.
                </p>
                <a
                  href="https://www.csc.ncsu.edu/academics/graduate/degrees/mcsdl.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                  Explore Program
                </a>
              </div>

              {/* Bachelor's Degrees */}
              <div className="bg-white hover:bg-slate-200 p-8 rounded-lg shadow-lg mb-6">
                <h4 className="text-2xl font-semibold mb-4">
                  Bachelor's in Healthcare Administration
                </h4>
                <p className="text-gray-700 mb-4">
                  Prepare for a career in healthcare management and
                  administration with this comprehensive degree.
                </p>
                <a
                  href="https://www.scuhs.edu/bachelors-degrees/bachelor-of-science-in-health-sciences-bshs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                  Explore Program
                </a>
              </div>

              <div className="bg-white hover:bg-slate-200 p-8 rounded-lg shadow-lg mb-6">
                <h4 className="text-2xl font-semibold mb-4">
                  Bachelor's in Engineering
                </h4>
                <p className="text-gray-700 mb-4">
                  Gain foundational knowledge in engineering principles and
                  applications with this degree.
                </p>
                <a
                  href="https://www.iu.org/en-in/bachelor/engineering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                >
                  Explore Program
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="fixed bottom-4 right-4 p-2 z-40">
          <button
            onClick={() =>
              document
                .getElementById("chatbot-panel")
                .classList.toggle("hidden")
            }
            className="p-0 rounded-full shadow-none focus:outline-none" // Ensure no padding or border is applied
          >
            <img
              src="/images/chatbotimg.jpg"
              className="w-16 h-16" // Adjust size as needed
              alt="Chatbot" // Ensure alt text is provided for accessibility
            />
          </button>
          <div
            id="chatbot-panel"
            className="hidden fixed bg-white border border-gray-300 shadow-lg p-4 rounded-lg w-80 h-96 overflow-y-auto" // Adjust width and height, added scroll
            style={{ bottom: "80px", right: "10px" }} // Adjust these values as needed
          >
            <AiPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineDegrees;
