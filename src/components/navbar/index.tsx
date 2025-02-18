import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Container from "../layout";
import Logo from "../logo";

interface NavbarProps {
  onNewEpisode?: () => void;
}

const Navbar = ({ onNewEpisode }: NavbarProps) => {
  return (
    <header className="h-16 border-b">
      <Container className="h-full">
        <div className="flex h-full items-center justify-between">
          <Logo isNav />
          <Button onClick={onNewEpisode} size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
