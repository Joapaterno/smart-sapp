import React from "react";

const Message = ({ text }) => {
  return (
    <div className="mb-2">
      <p className="p-2 bg-gray-200 rounded">{text}</p>
    </div>
  );
};

export default Message;
