import * as React from 'react';
const IconsWarning = (props) => (
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
        d="M2.725 21a.973.973 0 0 1-.85-.5 1.1 1.1 0 0 1-.137-.488.9.9 0 0 1 .137-.512l9.25-16q.15-.25.387-.375T12 3t.488.125a1 1 0 0 1 .387.375l9.25 16q.15.25.137.512a1.1 1.1 0 0 1-.137.488.97.97 0 0 1-.85.5zm1.725-2h15.1L12 6zM12 18q.424 0 .713-.288A.97.97 0 0 0 13 17a.97.97 0 0 0-.287-.712A.97.97 0 0 0 12 16a.97.97 0 0 0-.713.288A.97.97 0 0 0 11 17q0 .424.287.712.288.288.713.288m0-3q.424 0 .713-.287A.97.97 0 0 0 13 14v-3a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 10a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 11v3q0 .424.287.713.288.287.713.287"
      />
    </g>
  </svg>
);
export default IconsWarning;