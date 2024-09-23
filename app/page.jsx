"use client";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import AiPage from "./ai/page";
import { Button } from "@/components/ui/button";
export default function HomePage() {
  const { data: session, status } = useSession();
  const [faqOpen, setFaqOpen] = useState(null);
  const [isFullWidth, setIsFullWidth] = useState(false);
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full"></div>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
    setIsFullWidth(faqOpen !== index); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <main className="flex-grow flex flex-col items-start justify-center p-6 lg:pl-8">
        {session ? (
          <div className="text-left p-6 mb-8 bg-slate-300 bg-opacity-80 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">
              Welcome, {session.user.name}!
            </h2>
            <p className="text-lg mb-4">Email: {session.user.email}</p>
            <button
              onClick={() => signOut()}
              className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-green-200 to-teal-400 py-10 mt-1 rounded-xl shadow-xl px-3 w-full">
            <h2 className="text-3xl font-bold mb-4">Welcome to CareerPulse!</h2>
            <p className="text-lg mb-4">
              Are you looking to elevate your career? CareerPulse is your go-to
              platform for crafting standout resumes and gaining insights into
              the different career options. Whether you are a recent graduate or a seasoned
              professional, we provide tailored resources and AI-powered
              assistance to help you shine in your job search.
            </p>
            <p className="text-lg mb-4">
              Our platform offers personalized career guidance, including resume
              building and access to exclusive career resources, all designed to
              support your journey to success.
            </p>
          </div>
        )}

        <section className="bg-gradient-to-br from-green-200 to-teal-400 py-16 mt-12 rounded-xl shadow-xl w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Featured Resumes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
                <img
                  src="/images/resumexample.png"
                  alt="Resume Sample 1"
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Resume 1
                </h3>
                <p className="text-gray-600 mt-2">
                  A professional resume for a software engineer.
                </p>
                <a
                  href="/images/resumexample.png"
                  className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                >
                  View Resume
                </a>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
                <img
                  src="/images/resumexample3.png"
                  alt="Resume Sample 3"
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Resume 2
                </h3>
                <p className="text-gray-600 mt-2">
                  A sleek resume for a marketing specialist position.
                </p>
                <a
                  href="/images/resumexample3.png"
                  className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-green-200 to-teal-400 py-4 rounded-xl shadow-xl px-6 mt-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Resume Builder</h3>
              <p className="mb-4 text-gray-600">
                Craft a professional resume with ease. Our tool helps you create
                a standout resume tailored to your career goals.
              </p>
              <img
                src="/images/rs.png"
                className="w-24 h-24 object-cover mx-auto"
                alt="Resume Builder Icon"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">
                Career Resources Hub
              </h3>
              <p className="mb-4 text-gray-600">
                Discover a variety of career paths, courses, and guidance to
                help you succeed in your chosen profession.
              </p>
              <img
                src="/images/CareerHub.png"
                className="w-24 h-24 mx-auto"
                alt="Career Resources Icon"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">AI Assistant</h3>
              <p className="mb-4 text-gray-600">
                Get personalized career advice and resume tips powered by our
                smart AI assistant tailored to your unique profile.
              </p>
              <img
                src="/images/chatbotimg.jpg"
                className="w-24 h-24 object-cover mx-auto"
                alt="AI Assistant Icon"
              />
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-green-200 to-teal-400 py-16 mt-12 rounded-xl shadow-xl px-8 lg:px-16 w-full">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
            Frequently Asked Questions & Resources
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient bg-slate-200 rounded-xl shadow-xl p-6 md:p-8">
              <div className="space-y-6">
                {[
                  {
                    question: "What features does CareerPulse offer?",
                    answer:
                      "CareerPulse provides resume building tools and personalized career advice with help of AI Chatbot.",
                  },
                  {
                    question: "How does the AI Assistant work?",
                    answer:
                      "Our AI Assistant uses algorithms to analyze your career goals and provide personalized recommendations.",
                  },
                  {
                    question: "How does the Resume Builder feature work?",
                    answer:
                      "The Resume Builder feature allows you to easily create a professional resume by filling out simple forms and entering your personal and professional details.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 md:p-8 mb-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left text-2xl font-semibold flex justify-between items-center"
                    >
                      {faq.question}
                      <span
                        className={`transition-transform duration-300 ${
                          faqOpen === index ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {faqOpen === index && (
                      <p className="mt-4 text-lg text-gray-700">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient: bg-slate-200 rounded-xl shadow-xl p-6 md:p-8">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Why Choose CareerPulse?
              </h3>
              <ul className="space-y-4">
                <li className="text-lg text-gray-700">
                  🌟 <strong>Personalized Career Guidance</strong> — Get
                  tailored advice that suits your career goals.
                </li>
                <li className="text-lg text-gray-700">
                  📈 <strong>Career Transition Support</strong> — Resources to
                  help you switch industries seamlessly.
                </li>
                <li className="text-lg text-gray-700">
                  🛠 <strong>Resume Building Tools</strong> — Create a
                  professional resume in minutes with our easy-to-use tools.
                </li>
                <li className="text-lg text-gray-700">
                  🧠 <strong>AI-Powered Insights</strong> — Our AI Assistant
                  helps you make data-driven career decisions.
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="text-2xl font-semibold mb-4 text-gray-800">
                  Explore Our Career Resources:
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a
                      href="/onlinedegree"
                      className="text-blue-600 hover:underline"
                    >
                      Top Online Courses for Career Growth
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careertransition"
                      className="text-blue-600 hover:underline"
                    >
                      Career Transition Guide
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-green-200 to-teal-400 py-16 mt-12 rounded-xl shadow-xl w-full">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
            User Testimonials
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                name: "Alex Johnson",
                role: "Marketing Specialist",
                feedback:
                  "CareerPulse provided me with the best tools to revamp my resume.",
              },
              {
                name: "Emily Davis",
                role: "Software Developer",
                feedback:
                  "The AI Assistant gave me personalized advice that helped in my job search.",
              },
              {
                name: "Michael Smith",
                role: "Product Manager",
                feedback:
                  "Thanks to CareerPulse, I improved my resume and gained confidence.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center hover:bg-slate-200"
              >
                <p className="text-xl mb-4 text-gray-700">
                  {testimonial.feedback}
                </p>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
          <div className="fixed bottom-4 right-4 p-2 z-40">
            <Button
              variant="outline"
              className="p-0 rounded-full shadow-none focus:outline-none"
              onClick={() =>
                document
                  .getElementById("chatbot-panel")
                  .classList.toggle("hidden")
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
        </section>
      </main>
      <footer className="bg-gradient-to-br from-green-200 to-teal-400 py-4 rounded-xl shadow-xl px-6">
        <div className="max-w-6xl mx-auto flex justify-center">
          &copy; {new Date().getFullYear()} CareerPulse. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
