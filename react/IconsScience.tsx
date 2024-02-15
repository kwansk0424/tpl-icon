import * as React from 'react';
const IconsScience = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <mask
      id="prefix__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#prefix__a)">
      <path
        fill="#000"
        d="M5 21q-1.275 0-1.813-1.137-.537-1.138.263-2.113L9 11V5H8a.97.97 0 0 1-.713-.287A.97.97 0 0 1 7 4q0-.424.287-.712A.97.97 0 0 1 8 3h8q.424 0 .712.288Q17 3.575 17 4q0 .424-.288.713A.97.97 0 0 1 16 5h-1v6l5.55 6.75q.8.975.262 2.113Q20.275 21 19 21zm0-2h14l-6-7.3V5h-2v6.7z"
      />
    </g>
  </svg>
);
export default IconsScience;
