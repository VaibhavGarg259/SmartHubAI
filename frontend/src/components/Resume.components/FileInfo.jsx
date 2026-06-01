import React from "react";

const FileInfo = (promt) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <label className="text-xl text-gray-300 ">{promt.name}</label>
      <input
        type={promt.type}
        name={promt.namei}
        placeholder={promt.place}
        onChange={promt.change}
        className="border border-gray-500 rounded-xl p-3"
      />
    </div>
  );
};

export default FileInfo;
