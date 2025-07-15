import React, { useState } from 'react';
import SignUpModal from '../components/SignUpModal';
import SignInModal from '../components/SignInModal';

const Home = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="space-x-4">
        <button onClick={() => setShowSignUp(true)} className="bg-blue-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>
        <button onClick={() => setShowSignIn(true)} className="bg-gray-600 text-white px-4 py-2 rounded">
          Sign In
        </button>
      </div>

      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
      {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
    </div>
  );
};

export default Home;
