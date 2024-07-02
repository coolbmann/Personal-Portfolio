import React from "react";

interface props {
  color: string;
}

const Document = ({ color }: props) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 253 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="253" height="305" rx="40" fill="black" />
      <rect
        width="158"
        height="28"
        rx="10"
        transform="matrix(1 0 0 -1 40 89)"
        fill="white"
      />
      <rect
        width="117"
        height="28"
        rx="10"
        transform="matrix(1 0 0 -1 40 143)"
        fill="white"
      />
    </svg>
  );
};

export default Document;
