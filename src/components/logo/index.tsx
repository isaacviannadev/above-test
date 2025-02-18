import useBreakpoint from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";
import LogoFull from "./components/logo-full";
import LogoShape from "./components/logo-shape";

interface LogoProps {
  className?: string;
  isNav?: boolean;
}

const Logo = ({ className = "", isNav = false }: LogoProps) => {
  const breakpoint = useBreakpoint();

  const Tag = isNav ? "a" : "div";

  const LogoImage = breakpoint === "xs" ? LogoShape : LogoFull;

  return (
    <Tag
      className={cn("flex items-center gap-x-2", className)}
      href="/"
      aria-label="Above Entertainment"
    >
      <LogoImage className="h-10" />
      <span className="sr-only">Above Entertainment Logo</span>
    </Tag>
  );
};

export default Logo;
