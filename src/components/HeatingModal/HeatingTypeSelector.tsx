import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/i18n";
import { HeatingCircuit } from "./types";

// Define SupportedHeatingType locally to match what's used in context
type SupportedHeatingType = 'panel-radiator' | 'steel-cast-radiator';

/**
 * Updated props interface to use SupportedHeatingType
 */
interface HeatingTypeSelectorProps {
  selectedType: SupportedHeatingType;
  onTypeSelect: (type: SupportedHeatingType) => void;
  circuits: HeatingCircuit[];
  selectedCircuitId: string;
  onCircuitSelect: (circuitId: string) => void;
  desktopLayout?: boolean; // Optional prop for desktop layout mode
}

/**
 * Component for selecting heating type and circuit
 */
export function HeatingTypeSelector({ 
  selectedType, 
  onTypeSelect,
  circuits,
  selectedCircuitId,
  onCircuitSelect,
  desktopLayout = false
}: HeatingTypeSelectorProps) {
  // Map of element types to their display names - only include the two required types
  const elementTypeMap = {
    'panel-radiator': t("heatingTypes.panelRadiator"),
    'steel-cast-radiator': t("heatingTypes.steelCastRadiator")
  };

  return (
    <div className="space-y-4">
      {/* Circuit Selection - Only show at the top in mobile layout */}
      {!desktopLayout && (
        <div>
          <Label htmlFor="heating-circuit">{t("fields.circuit")}</Label>
          <Select 
            value={selectedCircuitId} 
            onValueChange={onCircuitSelect}
          >
            <SelectTrigger id="heating-circuit" className="w-full">
              <SelectValue placeholder="Select circuit" />
            </SelectTrigger>
            <SelectContent>
              {circuits.map(circuit => (
                <SelectItem key={circuit.id} value={circuit.id}>
                  {circuit.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button 
            variant="link" 
            size="sm" 
            className="mt-1 p-0 h-auto text-xs"
            onClick={() => alert("Add circuit functionality would go here")}
          >
            {t("modal.addCircuit")}
          </Button>
        </div>
      )}

      {/* Heating Element Type Selection - Different styling for desktop/mobile */}
      <div>
        <Accordion 
          type="single" 
          collapsible 
          value={selectedType}
          onValueChange={(value) => value && onTypeSelect(value as SupportedHeatingType)}
          className="w-full"
        >
          {Object.entries(elementTypeMap).map(([type, label]) => (
            <AccordionItem 
              key={type} 
              value={type} 
              className={desktopLayout ? "border-b-0" : ""}
            >
              <AccordionTrigger 
                className={`text-sm ${desktopLayout ? "py-2 hover:no-underline" : ""} ${
                  desktopLayout && selectedType === type ? "font-semibold text-primary" : ""
                }`}
              >
                {label}
              </AccordionTrigger>
              
              {/* Only show content in mobile layout */}
              {!desktopLayout && (
                <AccordionContent>
                  {/* This is just a placeholder to allow the accordion to work in mobile layout */}
                  <div className="h-2"></div>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* In desktop layout, show circuit selection below accordion */}
      {desktopLayout && (
        <div>
          <Label htmlFor="desktop-heating-circuit">{t("fields.circuit")}</Label>
          <Select 
            value={selectedCircuitId} 
            onValueChange={onCircuitSelect}
          >
            <SelectTrigger id="desktop-heating-circuit" className="w-full">
              <SelectValue placeholder="Select circuit" />
            </SelectTrigger>
            <SelectContent>
              {circuits.map(circuit => (
                <SelectItem key={circuit.id} value={circuit.id}>
                  {circuit.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button 
            variant="link" 
            size="sm" 
            className="mt-1 p-0 h-auto text-xs"
            onClick={() => alert("Add circuit functionality would go here")}
          >
            {t("modal.addCircuit")}
          </Button>
        </div>
      )}
    </div>
  );
}
