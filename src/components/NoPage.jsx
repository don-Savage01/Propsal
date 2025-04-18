import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to the ProposalPage after 3 seconds
    }, 4000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Better, cause you no fit see for here...
      </h1>
      <p className="text-lg mb-6">😂 Shogbo</p>
      <img src="/sad-teddy.gif" alt="Sad Teddy" className="w-64 h-64" />
      <p className="text-sm mt-4 text-red-500">Omo lile</p>
    </div>
  );
}
