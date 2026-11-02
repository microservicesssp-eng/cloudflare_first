// Простая SVG-иконка томата (без внешних файлов)
export default function TomatoIcon({ size = 24, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <circle cx="32" cy="37" r="22" fill="#d62828" />
      <ellipse cx="24" cy="29" rx="6" ry="4" fill="#ff6b6b" opacity="0.7" />
      <path
        d="M32 15 L26 8 L30 14 L22 12 L28 18 L20 20 L30 21 L32 15 L34 21 L44 20 L36 18 L42 12 L34 14 L38 8 Z"
        fill="#386641"
      />
      <rect x="30.5" y="6" width="3" height="9" rx="1.5" fill="#2d5a27" />
    </svg>
  );
}
