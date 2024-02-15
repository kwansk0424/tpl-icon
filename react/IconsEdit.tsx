import * as React from 'react';
const IconsEdit = (props) => (
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
        d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6zM19.3 8.925l-4.25-4.2 1.4-1.4a1.92 1.92 0 0 1 1.413-.575q.837 0 1.412.575l1.4 1.4q.574.575.6 1.388a1.8 1.8 0 0 1-.55 1.387zM17.85 10.4 7.25 21H3v-4.25l10.6-10.6z"
      />
    </g>
  </svg>
);
export default IconsEdit;
