"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import AiPage from "../ai/page";
const CareerTransitionGuides = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 pt-16">
      <Card className="w-full max-w-4xl mb-10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold text-gray-900">
            Career Transition Guides
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6 text-gray-700">
            Transitioning to a new career can be daunting. Our guides offer
            step-by-step advice, including how to gain new skills, build your
            professional network, and position yourself for success in a new
            field.
          </p>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Popular Career Transitions
            </h3>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-blue-100 mb-6">
              <h4 className="text-xl font-semibold mb-4">
                From Finance to Tech
              </h4>
              <p className="text-gray-700 mb-4">
                Transitioning from finance to the tech industry can open up
                exciting opportunities in software development, data analytics,
                and more. Explore the steps and resources to successfully shift
                from finance to tech.
              </p>
              <Link
                href="https://www.comptia.org/career-change/switching-career-path/from-jobs/finance-to-it"
                className="text-white text-sm font-medium px-4 py-2 bg-indigo-600 rounded hover:underline"
              >
                Finance To Tech
              </Link>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-blue-100 mb-6">
              <h4 className="text-xl font-semibold mb-4">
                From Healthcare to Data Science
              </h4>
              <p className="text-gray-700 mb-4">
                If you're in healthcare and want to switch to data science,
                learn how your background in healthcare can be a strong asset in
                data-driven roles and discover the tools and skills you need to
                master.
              </p>
              <Link
                href="https://www.expresshealthcare.in/news/how-healthcare-professionals-can-transition-to-data-science-career/438946/"
                className="text-white text-sm font-medium px-4 py-2 bg-indigo-600 rounded hover:underline"
              >
                HealthCare to Data Science
              </Link>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-blue-100 mb-6">
              <h4 className="text-xl font-semibold mb-4">
                From Teaching to UX/UI Design
              </h4>
              <p className="text-gray-700 mb-4">
                Teachers have strong skills in empathy and communication, which
                are essential in UX/UI design. Learn how to make this transition
                smoothly and which design tools to focus on.
              </p>
              <Link
                href="https://careerfoundry.com/en/blog/ux-design/teaching-to-ux-design/"
                className="text-white text-sm font-medium px-4 py-2 bg-indigo-600 rounded hover:underline"
              >
                Teaching to UI/UX Design
              </Link>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:bg-blue-100 mb-6">
              <h4 className="text-xl font-semibold mb-4">
                From Customer Service to Project Management
              </h4>
              <p className="text-gray-700 mb-4">
                Moving from customer service to project management can leverage
                your problem-solving and communication skills. Discover the
                project management tools and certifications you'll need.
              </p>
              <Link
                href="https://www.careershifters.org/success-stories/from-customer-services-to-project-management"
                className="text-white text-sm font-medium px-4 py-2 bg-indigo-600 rounded hover:underline"
              >
                Customer Service to Project Management
              </Link>
            </div>
            <div className="fixed bottom-4 right-4 p-2 z-40">
              <button
                onClick={() =>
                  document
                    .getElementById("chatbot-panel")
                    .classList.toggle("hidden")
                }
                className="p-0 rounded-full shadow-none focus:outline-none" 
              >
                <img
                  src="/images/chatbotimg.jpg"
                  className="w-16 h-16" 
                  alt="Chatbot"
                />
              </button>
              <div
                id="chatbot-panel"
                className="hidden fixed bg-white border border-gray-300 shadow-lg p-4 rounded-lg w-80 h-96 overflow-y-auto" 
                style={{ bottom: "80px", right: "10px" }} 
              >
                <AiPage />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerTransitionGuides;
