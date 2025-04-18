import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProposalPage() {
  const navigate = useNavigate();
  const [showYesButtons, setShowYesButtons] = useState(false);
  const [question, setQuestion] = useState("You dey find love ?");

  useEffect(() => {
    const userChoseNo = localStorage.getItem("userChoseNo");
    if (userChoseNo === "true") {
      setShowYesButtons(true);
      setQuestion("Abeg rest, nobody send you 😂");
    }
  }, []);

  const handleChoice = (choice) => {
    if (choice === "no") {
      localStorage.setItem("userChoseNo", "true");
      console.log("userChoseNo set to true (No)");
      setShowYesButtons(true);
      navigate("/no");
    } else {
      localStorage.removeItem("userChoseNo");
      console.log("userChoseNo removed");
      setQuestion("Abeg shift");
      navigate("/yes");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-center p-4"
      style={{
        backgroundImage: "url('/her-pic.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to make text more visible */}
      <div className="bg-black text-white bg-opacity-50 p-8 rounded-xl">
        {/* Changed font for the specific question */}
        <h2 className="text-3xl font-bold text-green-300 mb-6">
          {/* Conditional check for specific question */}
          {question === "Abeg waka commot" ? (
            <span className="font-serifFont text-xl text-white">
              {question}
            </span>
          ) : (
            question
          )}
        </h2>

        {!showYesButtons ? (
          <div className="space-x-6">
            <button
              className="bg-green-400 text-white px-4 py-3 rounded-xl text-xl hover:bg-green-500"
              onClick={() => handleChoice("yes")}
            >
              Yes 💍
            </button>
            <button
              className="bg-red-400 text-white px-4 py-3 rounded-xl text-xl hover:bg-red-500"
              onClick={() => handleChoice("no")}
            >
              No
            </button>
          </div>
        ) : (
          <div className="space-x-6 ">
            <button
              className="bg-green-400 text-white px-4 py-3 rounded-xl text-xl hover:bg-green-500"
              onClick={() => handleChoice("yes")}
            >
              I know
            </button>
            <button
              className="bg-green-400 text-white px-4 py-3 rounded-xl text-xl hover:bg-green-500"
              onClick={() => handleChoice("yes")}
            >
              I No Know
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
