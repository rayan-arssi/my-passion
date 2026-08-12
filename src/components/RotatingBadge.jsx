export default function RotatingBadge({
  size = 120,
  text = 'DESIGN × CODE • DESIGN × CODE • ',
  className = '',
}) {
  return (
    <div className={`rotbadge ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 120 120" width={size} height={size}>
        <defs>
          <path id="rotbadge-circle" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
        </defs>
        <g>
          <text fontSize="10" fontWeight="700" letterSpacing="3" fill="#14120f" fontFamily="Space Grotesk, sans-serif">
            <textPath href="#rotbadge-circle">{text}</textPath>
          </text>
        </g>
        <circle cx="60" cy="60" r="7" fill="#F05A3C" />
      </svg>
    </div>
  );
}
