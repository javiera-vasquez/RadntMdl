import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { t } from "@/lib/i18n";
import { HeatingModalProps, HeatingElement } from "./types";
import { HeatingTypeSelector } from "./HeatingTypeSelector";
import { HeatingActions } from "./HeatingActions";
import { HeatingContextProvider, useHeatingContext } from "./context/HeatingContext";
import { elementFormRegistry } from "./registry";
import React from "react";

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
  return (
    <HeatingContextProvider>
      <HeatingModalContent 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        onAdd={onAdd} 
      />
    </HeatingContextProvider>
  );
}

function HeatingModalContent({ 
  isOpen, 
  onOpenChange, 
  onAdd 
}: HeatingModalProps) {
  const { 
    state, 
    setElementType, 
    setCircuit, 
    updateDimension,
    updateProperty,
    validate 
  } = useHeatingContext();
  
  // Only handle the two supported types
  const type = state.element.type;
  
  // Get the appropriate form component for the current element type
  const FormComponent = elementFormRegistry[type];
  
  // Handle the "Add" button click
  const handleAdd = () => {
    const errors = validate();
    
    if (Object.keys(errors).length === 0 && onAdd) {
      onAdd(state.element as HeatingElement);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t("modal.title")}</DialogTitle>
        </DialogHeader>
        
        {/* Mobile layout: single column with accordion and form stacked */}
        <div className="block md:hidden space-y-6">
          <HeatingTypeSelector 
            selectedType={state.element.type}
            onTypeSelect={setElementType}
            circuits={state.circuits}
            selectedCircuitId={state.element.circuitId || ""}
            onCircuitSelect={setCircuit}
          />
          
          {/* Form component */}
          {FormComponent && (
            <div className="mt-4">
              <FormComponent 
                element={state.element}
                onChange={{
                  updateDimension,
                  updateProperty
                }}
                errors={state.errors}
              />
            </div>
          )}
        </div>
        
        {/* Desktop layout: two columns with accordion on left and form on right */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-0">
          {/* Left column - Type selector */}
          <div className="pr-4 border-r">
            <HeatingTypeSelector 
              selectedType={state.element.type}
              onTypeSelect={setElementType}
              circuits={state.circuits}
              selectedCircuitId={state.element.circuitId || ""}
              onCircuitSelect={setCircuit}
              desktopLayout={true}
            />
          </div>
          
          {/* Right column - Form fields */}
          <div className="pl-6 space-y-6">
            <h3 className="text-lg font-medium mb-4">
              {type === 'panel-radiator' 
                ? t("heatingTypes.panelRadiator") 
                : t("heatingTypes.steelCastRadiator")}
            </h3>
            
            {FormComponent && (
              <FormComponent 
                element={state.element}
                onChange={{
                  updateDimension,
                  updateProperty
                }}
                errors={state.errors}
              />
            )}
          </div>
        </div>
        
        <HeatingActions 
          onClose={() => onOpenChange(false)}
          onAdd={handleAdd}
          isValid={Object.keys(state.errors).length === 0}
        />
      </DialogContent>
    </Dialog>
  );
}
