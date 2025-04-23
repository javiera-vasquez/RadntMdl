import { useState } from "react";
import { Button } from "@/components/ui/button";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="container flex flex-col items-center justify-center min-h-svh p-4">
      <Button 
        onClick={() => setIsModalOpen(!isModalOpen)}
        variant="default"
        className="mb-4"
      >
        {isModalOpen ? "Close Modal" : "Open Modal"}
      </Button>
      
      {/* HeatingModal component will be added in Task 2 */}
    </div>
  );
}

export default App;