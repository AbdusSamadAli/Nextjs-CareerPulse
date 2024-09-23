// app/signin/page.jsx
"use client";

import { signIn } from 'next-auth/react';

export default function SignInPage() {
  const handleGoogleSignIn = async () => {
    try {
      await signIn('google', { callbackUrl: '/' }); // Redirect to home page after sign-in
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <button
        onClick={handleGoogleSignIn}
        className="bg-blue-500 text-white p-2 rounded shadow-lg hover:bg-blue-600 transition duration-200"
      >
        Sign In with Google
      </button>
    </div>
  );
}




