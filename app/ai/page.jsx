'use client';
import React, { useState } from 'react';
import axios from 'axios';

const PAGE_API_URL = 'https://api.cohere.ai/v1/generate'; 
const API_KEY = process.env.NEXT_PUBLIC_COHERE_API_KEY; 

const allowedTopics = [
  'jobs', 'resume', 'mock interviews', 'career', 'job search', 'interview tips', 'career advice', 'job applications', 'cover letter', 'salary negotiation', 'job offers', 'professional development', 'career growth', 'resume writing', 'job market trends', 'employment opportunities', 'career planning', 'job interviews', 'career transition', 'work-life balance', 'career goals', 'networking', 'job readiness', 'career coaching', 'certifications','certificates','skills', 'career resources', 'courses'
];

const AiPage = () => {
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [timeoutError, setTimeoutError] = useState(false);

  const isQueryRelated = (query) => {
    const lowerQuery = query.toLowerCase();
    return allowedTopics.some(topic => lowerQuery.includes(topic));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isQueryRelated(input)) {
      setResponse('I can only assist with queries related to jobs, resumes, mock interviews, and career.');
      setError('');
      return;
    }

    setLoading(true);
    setTimeoutError(false);

    const timeoutId = setTimeout(() => {
      if (loading) {
        setLoading(false);
        setTimeoutError(true);
        setResponse('');
        setError('Response time exceeded 5 seconds. Please try again later.');
      }
    }, 5000);

    try {
      const result = await axios.post(PAGE_API_URL, {
        model: 'command', 
        prompt: input,
        max_tokens: 1000
      }, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      });

      clearTimeout(timeoutId); 

      const text = result.data.generations[0]?.text || 'No response text available';
      setResponse(text);
      setError('');
    } catch (err) {
      clearTimeout(timeoutId); 
      console.error('Error fetching response from Cohere:', err);
      setResponse('');
      setError('Failed to fetch response. Please check the console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <textarea
          rows="4"
          cols="50"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="How can I help you succeed in your career?"
          className="w-full border border-gray-300 rounded-md p-3 mb-6 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
      {loading && !timeoutError && (
        <div className="mt-6 p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg shadow-md">
          Loading... Please wait.
        </div>
      )}
      {response && (
        <div className="mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Response:</h2>
          <p className="text-gray-700">{response}</p>
        </div>
      )}
      {error && !timeoutError && (
        <div className="mt-6 p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg shadow-md">
          {error}
        </div>
      )}
      {timeoutError && (
        <div className="mt-6 p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg shadow-md">
          Response time exceeded 5 seconds. Please try again later.
        </div>
      )}
    </>
  );
  
};

export default AiPage;


