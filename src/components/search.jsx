import React, { useState } from "react";
import { Link } from "react-router-dom";

function InputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted value: ${inputValue}`);
  };

  return (
    <div className="h-screen w-full bg-[#0A62A0] relative">
      <div className="overflowSeach h-screen w-full bg-[#0000007a] absolute flex items-center justify-center">
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="mb-4 px-4 py-2 border rounded  sm:w-9/12 md:w-7/12 lg:w-[20vw] xl:w-[40vw]"
            placeholder="Enter something..."
          />
          <div className="flex  gap-10">
          <button
            type="submit"
            className="px-5 py-2 bg-white text-black rounded"
          >
            Submit
          </button>
          <Link to="/" className="px-7 py-2 bg-white text-black rounded">
          Back
        </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
