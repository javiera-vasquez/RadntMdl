import { PanelRadiatorForm } from "./PanelRadiatorForm";
import { SteelCastRadiatorForm } from "./SteelCastRadiatorForm";

// Placeholder component will be implemented when we create the actual forms
const PlaceholderForm = () => null;

// Registry mapping element types to their form components
export const elementFormRegistry = {
  'panel-radiator': PanelRadiatorForm,
  'steel-cast-radiator': SteelCastRadiatorForm,
} as const; 