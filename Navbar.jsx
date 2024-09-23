"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import GoogleButton from "react-google-button";
import { FaUserTie } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-green-200 to-teal-400 py-4 rounded-xl shadow-xl px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold flex items-center space-x-2">
          <FaUserTie className="text-2xl" />
          <Link href="/">CareerPulse</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/Resume">
            <Button className="bg-purple-600 text-white py-2 px-4 rounded hover:underline">
              Resume Builder
            </Button>
          </Link>
          <Link href="/resources">
            <Button className="bg-purple-600 text-white py-2 px-4 rounded hover:underline">
              Career Resources Hub
            </Button>
          </Link>
          <Link href="/signin">
            <div className="flex items-center">
              <GoogleButton
                className="hover:underline"
                label="Sign In with Google"
                type="dark"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

