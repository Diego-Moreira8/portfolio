export function Sandwich(props) {
  return (
    <svg
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={24} height={3} rx={1.5} fill="currentColor" />
      <rect y={7} width={24} height={3} rx={1.5} fill="currentColor" />
      <rect y={14} width={24} height={3} rx={1.5} fill="currentColor" />
    </svg>
  );
}
