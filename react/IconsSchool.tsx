import * as React from 'react';
const IconsSchool = (props) => (
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
        d="M6.05 17.775a2 2 0 0 1-.775-.737A2 2 0 0 1 5 16v-4.8L2.6 9.875a.97.97 0 0 1-.4-.375 1 1 0 0 1-.125-.5q0-.275.125-.5a.97.97 0 0 1 .4-.375l8.45-4.6q.225-.125.462-.187a1.9 1.9 0 0 1 .976 0q.237.062.462.187l9.525 5.2a.9.9 0 0 1 .387.363Q23 9.325 23 9.6V16q0 .424-.288.712A.97.97 0 0 1 22 17a.97.97 0 0 1-.712-.288A.97.97 0 0 1 21 16v-5.9l-2 1.1V16q0 .575-.275 1.038a2 2 0 0 1-.775.737l-5 2.7q-.225.125-.462.188a1.9 1.9 0 0 1-.976 0 2 2 0 0 1-.462-.188zM12 12.7 18.85 9 12 5.3 5.15 9zm0 6.025 5-2.7V12.25l-4.025 2.225q-.225.125-.475.188a2.05 2.05 0 0 1-1 0 2 2 0 0 1-.475-.188L7 12.25v3.775z"
      />
    </g>
  </svg>
);
export default IconsSchool;