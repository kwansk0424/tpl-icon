import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconsRangeZoomInCustom = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    ref={ref}
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
    <g fill="currentColor" mask="url(#prefix__a)">
      <path d="M13 14.688a.52.52 0 0 1-.386-.156.52.52 0 0 1-.156-.386q0-.23.156-.386a.52.52 0 0 1 .386-.156h2.212q.231 0 .386.156a.52.52 0 0 1 .156.386.52.52 0 0 1-.156.386.52.52 0 0 1-.386.155zm1.085 3.155q-1.545 0-2.621-1.076t-1.076-2.621 1.076-2.621q1.075-1.076 2.62-1.076t2.622 1.076q1.076 1.075 1.076 2.62 0 .612-.175 1.129a3.2 3.2 0 0 1-.468.907l2.972 2.98q.202.21.202.505t-.21.498a.68.68 0 0 1-.502.203.68.68 0 0 1-.501-.203L16.135 17.2a3.3 3.3 0 0 1-.923.468q-.524.175-1.127.175m0-1.436q.945 0 1.604-.657.657-.657.657-1.604t-.657-1.604a2.18 2.18 0 0 0-1.604-.658q-.947 0-1.605.658a2.18 2.18 0 0 0-.657 1.604q0 .947.657 1.604.658.657 1.605.657" />
      <path d="m6.835 8.563.78.78q.219.225.222.544a.73.73 0 0 1-.222.543.74.74 0 0 1-.54.225.74.74 0 0 1-.54-.225l-2.1-2.092a.785.785 0 0 1-.17-.841.8.8 0 0 1 .17-.256L6.527 5.15a.73.73 0 0 1 .536-.225.76.76 0 0 1 .544.225q.233.224.233.543a.75.75 0 0 1-.233.552l-.764.764h10.174l-.772-.773a.76.76 0 0 1-.222-.543.72.72 0 0 1 .23-.543q.225-.225.54-.225t.54.225l2.092 2.091q.112.112.17.256a.79.79 0 0 1 0 .586.8.8 0 0 1-.17.255l-2.092 2.092a.73.73 0 0 1-.536.225.76.76 0 0 1-.544-.225.74.74 0 0 1-.237-.543.74.74 0 0 1 .229-.552l.772-.772zM13.72 12.654a.52.52 0 0 0-.155.386v2.212q0 .23.155.386a.52.52 0 0 0 .386.156.52.52 0 0 0 .386-.156.52.52 0 0 0 .156-.386V13.04a.52.52 0 0 0-.156-.386.52.52 0 0 0-.386-.156.52.52 0 0 0-.386.156" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconsRangeZoomInCustom);
export default ForwardRef;
