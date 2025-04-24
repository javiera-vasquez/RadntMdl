import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { t } from "@/lib/i18n";
import { HeatingModalProps, HeatingElement } from "./types";
import { HeatingTypeSelector } from "./HeatingTypeSelector";
import { HeatingActions } from "./HeatingActions";
import { HeatingContextProvider, useHeatingContext } from "./context/HeatingContext";
import { elementFormRegistry } from "./registry";
import { Card, CardContent } from "@/components/ui/Card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Info, PlusIcon } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { HeatingTypeAccordionItem } from "./components/HeatingTypeAccordionItem";
import { cn } from "@/lib/utils";

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
    updateProperty
  } = useHeatingContext();
  
  // Only handle the two supported types
  const type = state.element.type;
  
  // Get the appropriate form component for the current element type
  const FormComponent = elementFormRegistry[type];
  
  // Handle the "Add" button click
  const handleAdd = () => {
    if (onAdd) {
      onAdd(state.element as HeatingElement);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className={cn(
        "md:max-w-[500pt] overflow-y-auto p-0",
        "max-h-[90vh] md:max-h-[90vh]",
        "md:rounded-lg",
        // Mobile styles
        "w-[100vw]",
        "rounded-sm md:rounded-lg",
      )}>
        <DialogHeader className="border-b-1 md:px-6 md:py-4 p-4 max-h-[56px]">
          <DialogTitle className="text-lg font-light">{t("modal.title")}</DialogTitle>
        </DialogHeader>

          {/* Circuit Selection - Always shown at the top */}
          <Card className="md:mx-8 md:mt-4 md:shadow-xs bg-sidebar p-0 rounded-sm shadow-none mx-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="heating-circuit" className="text-sm">{t("fields.circuit")}</Label>
                <Button 
                  variant="link" 
                  size="sm" 
                  className="text-xs cursor-pointer h-auto"
                  onClick={() => alert("Add circuit functionality would go here")}
                >
                  <PlusIcon className="mr-1 h-3 w-3" />
                  {t("modal.addCircuit")}
                </Button>
              </div>

              <Select 
                value={state.element.circuitId || ""} 
                onValueChange={setCircuit}
              >
                <SelectTrigger id="heating-circuit" className="w-full bg-background">
                  <SelectValue placeholder={t("placeholders.selectCircuit")} />
                </SelectTrigger>
                <SelectContent>
                  {state.circuits.map(circuit => (
                    <SelectItem key={circuit.id} value={circuit.id}>
                      {circuit.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
          </CardContent>
        </Card>
        
        {/* Mobile layout: vertical stack */}
        <div className="block md:hidden space-y-0">
          <Accordion 
            type="single" 
            collapsible 
            value={state.element.type}
            onValueChange={(value) => value && setElementType(value as 'panel-radiator' | 'steel-cast-radiator')}
            className="w-full px-4"
          >
            {Object.entries({
              'panel-radiator': t("heatingTypes.panelRadiator"),
              'steel-cast-radiator': t("heatingTypes.steelCastRadiator")
            }).map(([type, label]) => (
              <HeatingTypeAccordionItem
                key={type}
                type={type}
                label={label}
                isSelected={state.element.type === type}
                FormComponent={FormComponent}
                element={state.element as HeatingElement}
                onChange={{
                  updateDimension,
                  updateProperty
                }}
              />
            ))}
          </Accordion>
        </div>
        
        {/* Desktop layout: two columns with accordion on left and form on right */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-0 px-8 py-4">
          {/* Left column - Type selector */}
          <div className="border-r pr-6">
            <div className="p-0 bg-sidebar rounded-md">
              <HeatingTypeSelector 
                selectedType={state.element.type}
                onTypeSelect={setElementType}
                desktopLayout={true}
              />
            </div>
          </div>
          
          {/* Right column - Form fields */}
          <div className="pl-6 pt-2 pb-4 col-span-2">
            <h3 className="text-lg font-light mb-4 flex items-center">
              {type === 'panel-radiator' 
                ? t("heatingTypes.panelRadiator") 
                : t("heatingTypes.steelCastRadiator")}
              <Info className="w-4 h-4 ml-2 text-primary" />
            </h3>
            
            {FormComponent && (
              <FormComponent 
                element={state.element}
                onChange={{
                  updateDimension,
                  updateProperty
                }}
              />
            )}
          </div>
        </div>
          <DialogFooter className="border-t p-4 md:max-h-[56px]">
            <HeatingActions 
              onClose={() => onOpenChange(false)}
              onAdd={handleAdd}
            />
          </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
