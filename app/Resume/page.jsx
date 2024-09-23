"use client";
import React, { useState, useEffect } from "react";
import AiPage from "../ai/page";
import { Button } from "@/components/ui/button";

const ModernTemplate = ({ personalInfo, sections }) => (
  <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300">
    <div className="text-center mb-6">
      <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
      <p className="text-xl">{personalInfo.contact}</p>
      <p>{personalInfo.email}</p>
      <p className="text-xl">{personalInfo.jobTitle}</p>
    </div>
    {sections.experience.length > 0 && (
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        <ul className="list-disc list-inside">
          {sections.experience.map((item, index) => (
            <li key={index}>
              <strong>{item.jobTitle}</strong> ({item.duration})
              <div className="ml-4">{item.experience}</div>{" "}
            </li>
          ))}
        </ul>
      </section>
    )}
    {sections.skills.length > 0 && (
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          {sections.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    )}

    {sections.projects.length > 0 && (
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside">
          {sections.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </section>
    )}
    {sections.certifications.length > 0 && (
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc list-inside">
          {sections.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>
    )}
    {sections.education.length > 0 && (
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc list-inside">
          {sections.education.map((edu, index) => (
            <li key={index}>
              {edu.degree} - {edu.school} ({edu.year})
            </li>
          ))}
        </ul>
      </section>
    )}
  </div>
);
const ResumeBuilder = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    contact: "",
    jobTitle: "",
  });
  const [sections, setSections] = useState({
    experience: [""],
    skills: [""],
    projects: [""],
    certifications: [""],
    education: [{ school: "", degree: "", year: "" }],
  });
  const [error, setError] = useState("");
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("resumeData"));
    if (savedData) {
      setPersonalInfo(savedData.personalInfo || personalInfo);
      setSections(savedData.sections || sections);
    }
  }, []);
  useEffect(() => {
    const resumeData = { personalInfo, sections };
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [personalInfo, sections]);
  const handlePersonalInfoChange = (e) => {
    const { name, value, jobTitle } = e.target;
    setPersonalInfo((prev) => ({
      ...prev,
      [name]: value,
      [jobTitle]: value,
    }));
  };
  const handleSectionChange = (sectionType, index, field, value) => {
    setSections((prev) => {
      const updatedSection = [...prev[sectionType]];
      if (sectionType === "education" || sectionType === "experience") {
        updatedSection[index] = {
          ...updatedSection[index],
          [field]: value,
        };
      } else {
        updatedSection[index] = value;
      }
      return {
        ...prev,
        [sectionType]: updatedSection,
      };
    });
  };
  const addSection = (sectionType) => {
    setSections((prev) => {
      let updatedSection;
      switch (sectionType) {
        case "experience":
        case "skills":
        case "projects":
        case "certifications":
          updatedSection = [...prev[sectionType], ""];
          break;
        case "education":
          updatedSection = [
            ...prev[sectionType],
            { school: "", degree: "", year: "" },
          ];
          break;
        default:
          return prev;
      }
      return {
        ...prev,
        [sectionType]: updatedSection,
      };
    });
  };

  const removeSection = (sectionType, index) => {
    setSections((prev) => {
      const updatedSection = prev[sectionType].filter((_, i) => i !== index);
      return {
        ...prev,
        [sectionType]: updatedSection,
      };
    });
  };

  // Validation before saving
  const validateData = () => {
    if (!personalInfo.name || !personalInfo.email || !personalInfo.jobTitle) {
      setError("Please fill in all personal information fields.");
      return false;
    }
    // Additional validation can be added here
    setError("");
    return true;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Resume Builder</h1>

      {error && (
        <div className="bg-red-200 text-red-800 p-4 mb-6 rounded">{error}</div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <input
            type="text"
            name="name"
            value={personalInfo.name}
            onChange={handlePersonalInfoChange}
            placeholder="Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="contact"
            value={personalInfo.contact}
            onChange={handlePersonalInfoChange}
            placeholder="Contact"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handlePersonalInfoChange}
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="jobTitle"
            value={personalInfo.jobTitle}
            onChange={handlePersonalInfoChange}
            placeholder="Job Title"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          {/* Sections */}
          {[
            "experience",
            "skills",
            "projects",
            "certifications",
            "education",
          ].map((sectionType) => (
            <div key={sectionType} className="mb-6">
              <h3 className="text-xl font-semibold mb-2 capitalize">
                {sectionType}
              </h3>
              {sections[sectionType] && Array.isArray(sections[sectionType]) ? (
                sections[sectionType].map((item, index) => (
                  <div key={index} className="flex items-center mb-2 gap-2">
                    {sectionType === "education" ? (
                      <>
                        <input
                          type="text"
                          value={item.school}
                          onChange={(e) =>
                            handleSectionChange(
                              sectionType,
                              index,
                              "school",
                              e.target.value
                            )
                          }
                          placeholder="School"
                          className="flex-1 p-2 border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          value={item.degree}
                          onChange={(e) =>
                            handleSectionChange(
                              sectionType,
                              index,
                              "degree",
                              e.target.value
                            )
                          }
                          placeholder="Degree"
                          className="flex-1 p-2 border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          value={item.year}
                          onChange={(e) =>
                            handleSectionChange(
                              sectionType,
                              index,
                              "year",
                              e.target.value
                            )
                          }
                          placeholder="Year"
                          className="flex-1 p-2 border border-gray-300 rounded"
                        />
                      </>
                    ) : sectionType === "experience" ? (
                      <>
                        <input
                          type="text"
                          value={item.jobTitle}
                          onChange={(e) =>
                            handleSectionChange(
                              sectionType,
                              index,
                              "jobTitle",
                              e.target.value
                            )
                          }
                          placeholder="Job Title"
                          className="flex-1 p-2 border border-gray-300 rounded mb-2"
                        />
                        <input
                          type="text"
                          value={item.duration}
                          onChange={(e) =>
                            handleSectionChange(
                              sectionType,
                              index,
                              "duration",
                              e.target.value
                            )
                          }
                          placeholder="Duration (e.g., Jan 2020 - Dec 2021)"
                          className="flex-1 p-2 border border-gray-300 rounded mb-2"
                        />
                        <input
                          type="text"
                          value={item.experience}
                          onChange={(e) =>
                            handleSectionChange(
                              sectionType,
                              index,
                              "experience",
                              e.target.value
                            )
                          }
                          placeholder="Work Experience Description"
                          className="flex-1 p-2 border border-gray-300 rounded mb-2"
                        />
                      </>
                    ) : (
                      <input
                        type="text"
                        value={item}
                        onChange={(e) =>
                          handleSectionChange(
                            sectionType,
                            index,
                            null,
                            e.target.value
                          )
                        }
                        placeholder={`Enter ${sectionType.slice(0, -1)}`}
                        className="flex-1 p-2 border border-gray-300 rounded"
                      />
                    )}
                    <button
                      onClick={() => removeSection(sectionType, index)}
                      className="text-red-500 hover:text-red-700"
                      title="Remove"
                    >
                      &times;
                    </button>
                  </div>
                ))
              ) : (
                <p>No {sectionType} added yet.</p>
              )}
              <button
                onClick={() => addSection(sectionType)}
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Add {sectionType.slice(1, 0)}
              </button>
            </div>
          ))}
          <button
            onClick={() => {
              if (validateData()) {
                alert("Resume saved successfully!");
              }
            }}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Save Resume
          </button>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Resume Preview</h2>
          <ModernTemplate personalInfo={personalInfo} sections={sections} />
        </div>
      </div>
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
export default ResumeBuilder;
