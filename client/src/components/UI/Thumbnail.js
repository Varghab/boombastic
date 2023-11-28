import React from "react";

const Thumbnail = ({ src, clickHandle }) => {
  return (
    <div onClick={clickHandle} className="rounded-md overflow-hidden flex-shrink-1">
      <div className="max-w-[80px] max-h-[80px]">
        <img
          src={src}
          className="w-full h-full object-contain rounded-md"
          alt="boombastic double bass"
        />
      </div>
    </div>
  );
};

export default Thumbnail;
