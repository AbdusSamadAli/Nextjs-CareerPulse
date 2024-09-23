"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AiPage from "../ai/page";
import Link from "next/link";

const CareerResources = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-16 mt-4 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-5xl mb-10 shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-extrabold text-gray-900">
              Career Resources
            </CardTitle>
            <div className="space-x-4">
              <Link
                href="/onlinedegree"
                className="text-white text-sm font-medium px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition duration-300 ease-in-out hover:underline"
              >
                Explore Online Degrees
              </Link>
              <Link
                href="/careertransition"
                className="text-white text-sm font-medium px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition duration-300 ease-in-out hover:underline"
              >
                Career Transition Guide
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6 text-gray-700">
            Explore these valuable resources to boost your career, enhance your
            skills, and stay updated with the latest industry trends. Whether
            you are looking for online courses, professional certifications, or
            interactive coding lessons, you will find something to fit your needs.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Top Platforms
            </h3>
            <ul className="list-disc pl-5 text-gray-800 space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/learning/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline transition duration-300 ease-in-out"
                >
                  LinkedIn Learning
                </a>
                - Access a wide range of online courses and certifications.
              </li>
              <li>
                <a
                  href="https://www.coursera.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline transition duration-300 ease-in-out"
                >
                  Coursera
                </a>
                - Enroll in courses from top universities and institutions.
              </li>
              <li>
                <a
                  href="https://www.udemy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline transition duration-300 ease-in-out"
                >
                  Udemy
                </a>
                - Find professional courses and certifications for various
                fields.
              </li>
              <li>
                <a
                  href="https://www.codecademy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline transition duration-300 ease-in-out"
                >
                  Codecademy
                </a>
                - Enjoy interactive coding lessons for all skill levels.
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline transition duration-300 ease-in-out"
                >
                  freeCodeCamp
                </a>
                - Get free coding tutorials and build real projects.
              </li>
            </ul>
          </div>

          <Card className="bg-gradient-to-r from-green-50 via-blue-50 to-yellow-50 p-6 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-extrabold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
                Additional Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-gray-800 space-y-3">
                <li className="text-lg font-medium text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out">
                  Network with professionals and join industry groups.
                </li>
                <li className="text-lg font-medium text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out">
                  Keep updating your resume with new skills and experiences.
                </li>
                <li className="text-lg font-medium text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out">
                  Stay informed about industry trends and advancements.
                </li>
                <li className="text-lg font-medium text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out">
                  Participate in webinars and online workshops.
                </li>
                <li className="text-lg font-medium text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out">
                  Consider mentorship opportunities for career growth.
                </li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <div className="fixed bottom-4 right-4 p-2 z-40">
        <Button
          variant="outline"
          className="p-0 rounded-full shadow-none focus:outline-none"
          onClick={() =>
            document.getElementById("chatbot-panel").classList.toggle("hidden")
          }
        >
          <img
            src="/images/chatbotimg.jpg"
            className="w-16 h-16"
            alt="Chatbot"
          />
        </Button>
        <div
          id="chatbot-panel"
          className="hidden fixed bg-white border border-gray-300 shadow-lg p-4 rounded-lg w-80 h-96 overflow-y-auto"
          style={{ bottom: "80px", right: "10px" }}
        >
          <AiPage />
        </div>
      </div>
    </div>
  );
};

export default CareerResources;
