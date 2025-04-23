import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

// Define SupportedHeatingType locally to match what's used in context
type SupportedHeatingType = 'panel-radiator' | 'steel-cast-radiator';

/**
 * Updated props interface to use SupportedHeatingType
 */
interface HeatingTypeSelectorProps {
  selectedType: SupportedHeatingType;
  onTypeSelect: (type: SupportedHeatingType) => void;
  desktopLayout?: boolean; // Optional prop for desktop layout mode
}

/**
 * Component for selecting heating type
 */
export function HeatingTypeSelector({ 
  selectedType, 
  onTypeSelect,
  desktopLayout = false
}: HeatingTypeSelectorProps) {
  // Map of element types to their display names - only include the two required types
  const elementTypeMap = {
    'panel-radiator': t("heatingTypes.panelRadiator"),
    'steel-cast-radiator': t("heatingTypes.steelCastRadiator")
  };

  return (
    <div className="space-y-4">
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
              className={desktopLayout ? "border-b-0 px-2 py-0.5" : ""}
            >
              <AccordionTrigger 
                className={cn(
                  "text-xs truncate whitespace-nowrap flex items-center gap-2",
                  desktopLayout && "py-2 hover:no-underline data-[state=open]:text-primary [&>svg]:rotate-[0deg] [&>svg]:ml-0 [&>svg]:mr-2 [&>svg]:h-3 [&>svg]:w-3 [&[data-state=open]>svg]:-rotate-90",
                  selectedType === type && "text-primary"
                )}
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
    </div>
  );
}
