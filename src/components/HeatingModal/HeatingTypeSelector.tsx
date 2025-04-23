import { Accordion } from "@/components/ui/accordion";
import { t } from "@/lib/i18n";
import { HeatingTypeAccordionItem } from "./components/HeatingTypeAccordionItem";

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
            <HeatingTypeAccordionItem
              key={type}
              type={type}
              label={label}
              isSelected={selectedType === type}
              isDesktopLayout={desktopLayout}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
}
