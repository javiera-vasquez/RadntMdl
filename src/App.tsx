import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HeatingModal } from "@/components/HeatingModal/HeatingModal";
import { HeatingElement } from "@/components/HeatingModal/types";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { SquareArrowOutUpRight } from "lucide-react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  
  // This function would handle the actual addition of heating elements
  const handleAddHeatingElement = (element: HeatingElement) => {
    console.log("Adding heating element:", element);
    // In a real app, this would add the element to state or send to a backend
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="radnt-theme">
      <div className="bg-white dark:bg-slate-950 text-black dark:text-white min-h-svh w-full transition-colors duration-200">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <Button 
            onClick={() => setIsModalOpen(!isModalOpen)}
            size="lg"
            variant="outline"
            className="mb-4"
          >
            <SquareArrowOutUpRight className="w-4 h-4 mr-2" />
            {isModalOpen ? "Close Modal" : "Open Modal"}
          </Button>
          <ThemeToggle />
        </div>
        
        <HeatingModal 
          isOpen={isModalOpen} 
          onOpenChange={setIsModalOpen}
          onAdd={handleAddHeatingElement}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;