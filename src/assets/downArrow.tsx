import React, { FC } from 'react';

const DownArrow: FC = () => {
  return (
    <svg 
      width="10"
      height="10"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
        <defs>
       </defs>
       <g>
          <path
            d="M20 35L3.54552 6.5H36.4545L20 35z"
            opacity="1"
            fill="#0A192B" style={{
              transition: "opacity 200ms ease-in-out, fill 200ms ease-in-out"
            }}>
          </path>
        </g>
      </svg>
  );
}

export default DownArrow;

