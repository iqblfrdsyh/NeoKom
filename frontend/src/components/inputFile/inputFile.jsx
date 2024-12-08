import React from "react";

const InputFile = ({ onChange }) => {
  return (
    <React.Fragment>
      <div className="flex items-center space-x-4">
        <input
          type="file"
          accept=".png, .jpg, .jpeg, .pdf"
          onChange={onChange}
          className="block text-gray-500 file:mr-4 file:py-2 file:px-5
    file:rounded-l-lg file:border-0
    file:bg-[#0A355D] file:text-white
    file:cursor-pointer
    hover:file:bg-[#0a355de7] border-2 border-gray-300 pe-3 rounded-xl w-full file:text-[16px]"
        />
      </div>
      <p className="text-gray-500 text-sm ml-1 -mt-2">PNG, JPG, JPEG, PDF</p>
    </React.Fragment>
  );
};

export default InputFile;
