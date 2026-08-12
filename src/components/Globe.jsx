export default function Globe({ size = 80, className = '' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <g className="globe-spin">
        <path
          d="M50 5 C 79 5 95 21 95 50 C 95 79 79 95 50 95 C 21 95 5 79 5 50 C 5 21 21 5 50 5 Z"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <path
          d="M50 5 C 38 23 38 77 50 95"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M50 5 C 62 23 62 77 50 95"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 50 C 25 41 75 41 95 50"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 50 C 25 59 75 59 95 50"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <circle cx="73" cy="27" r="4" fill="currentColor" />
    </svg>
  );
}
