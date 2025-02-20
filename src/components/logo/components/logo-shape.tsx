import { cn } from "@/lib/utils";

interface LogoShapeProps {
  className?: string;
}

const LogoShape = ({ className = "" }: LogoShapeProps) => {
  return (
    <svg
      viewBox="0 0 299 217"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-auto", className)}
    >
      <path
        d="M259.499 19.0275C172.608 5.23473 122.311 4.74256 42.046 19.0466C35.3096 20.2471 29.5471 24.7736 26.8734 31.1724C15.0807 59.3955 8.61236 82.8258 8.5014 106.672C8.39028 130.553 14.6565 154.051 26.9869 182.437C29.6146 188.486 35.027 192.797 41.3553 194.152C125.706 212.213 176.209 212.794 260.506 194.318C267.459 192.794 273.172 187.719 275.44 180.91C284.161 154.742 289.354 132.664 289.694 109.436C290.035 86.1867 285.51 62.3645 275.599 32.6296C273.188 25.3958 266.915 20.2047 259.499 19.0275Z"
        stroke="currentColor"
        strokeWidth="17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoShape;
