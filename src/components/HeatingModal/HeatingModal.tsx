import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { t } from "@/lib/i18n";
import { HeatingModalProps, HeatingCircuit, HeatingElement, HeatingElementType } from "./types";
import { HeatingActions } from "./HeatingActions";

/**
 * The main modal component that wraps all heating configuration UI elements.
 * 
 * Responsibilities:
 * - Manage the open/close state of the modal
 * - Coordinate between child components
 * - Store the current state of the heating element being configured
 * - Pass the final configuration to parent component when completed
 */
export function HeatingModal({ isOpen, onOpenChange, onAdd }: HeatingModalProps) {
  // Initial available heating circuits
  const [circuits] = useState<HeatingCircuit[]>([
    { id: "circuit-1", name: "Heating circuit 1" }
  ]);
  
  // Current state of the heating element being configured
  // setCurrentElement will be used in Task 3 when we implement the child components
  const [currentElement, setCurrentElement] = useState<Partial<HeatingElement>>({
    id: `element-${Date.now()}`,
    circuitId: circuits[0]?.id || "",
    type: "panel-radiator" as HeatingElementType,
    dimensions: {
      height: 600,
      length: 1000
    },
    properties: {},
    standardOutput: 461
  });

  // Handle the "Add" button click
  const handleAdd = () => {
    if (onAdd && currentElement.circuitId && currentElement.type) {
      onAdd(currentElement as HeatingElement);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("modal.title")}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Child components will be added in Task 3 */}
          {/* <HeatingTypeSelector />
              <HeatingElementForm />
              <HeatingElementSummary /> */}
        </div>
        
        <HeatingActions 
          onClose={() => onOpenChange(false)}
          onAdd={handleAdd}
          isValid={!!currentElement.circuitId && !!currentElement.type}
        />
      </DialogContent>
    </Dialog>
  );
}
