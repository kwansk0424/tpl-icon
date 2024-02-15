import * as React from 'react';
const IconsWorkspaces = (props) => (
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
        d="M6 21q-1.65 0-2.825-1.175T2 17t1.175-2.825T6 13t2.825 1.175T10 17t-1.175 2.825T6 21m12 0q-1.65 0-2.825-1.175T14 17t1.175-2.825T18 13t2.825 1.175T22 17t-1.175 2.825T18 21M6 19q.824 0 1.412-.587Q8 17.825 8 17t-.588-1.412A1.93 1.93 0 0 0 6 15q-.824 0-1.412.588A1.93 1.93 0 0 0 4 17q0 .824.588 1.413Q5.175 19 6 19m12 0q.824 0 1.413-.587Q20 17.825 20 17t-.587-1.412A1.93 1.93 0 0 0 18 15q-.824 0-1.413.588A1.93 1.93 0 0 0 16 17q0 .824.587 1.413Q17.176 19 18 19m-6-8q-1.65 0-2.825-1.175T8 7t1.175-2.825T12 3t2.825 1.175T16 7t-1.175 2.825T12 11m0-2q.825 0 1.412-.588Q14 7.826 14 7q0-.824-.588-1.412A1.93 1.93 0 0 0 12 5q-.825 0-1.412.588A1.93 1.93 0 0 0 10 7q0 .824.588 1.412Q11.175 9 12 9"
      />
    </g>
  </svg>
);
export default IconsWorkspaces;
