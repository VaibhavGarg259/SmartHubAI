import React from "react";

const Areatext = (promt) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xl text-gray-300">{promt.name}</label>
      <textarea
        name={promt.names}
        placeholder={promt.place}
        rows={promt.row}
        onChange={promt.change}
        className="border border-gray-500 rounded-xl p-3"
      ></textarea>
    </div>
  );
};

export default Areatext;
