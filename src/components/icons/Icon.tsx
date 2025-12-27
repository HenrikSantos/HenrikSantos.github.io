interface IconProps {
  path: string;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({
  path,
  className = "size-4",
  strokeWidth = 2,
}: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d={path}
      />
    </svg>
  );
}
