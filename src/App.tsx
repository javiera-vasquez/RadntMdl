import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HeatingModal } from "@/components/HeatingModal/HeatingModal";
import { HeatingElement } from "@/components/HeatingModal/types";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  
  // This function would handle the actual addition of heating elements
  const handleAddHeatingElement = (element: HeatingElement) => {
    console.log("Adding heating element:", element);
    // In a real app, this would add the element to state or send to a backend
    setIsModalOpen(false);
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-svh p-4">
      <Button 
        onClick={() => setIsModalOpen(!isModalOpen)}
        variant="outline"
        className="mb-4"
      >
        {isModalOpen ? "Close Modal" : "Open Modal"}
      </Button>
      
      <HeatingModal 
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen}
        onAdd={handleAddHeatingElement}
      />
    </div>
  );
}

export default App;