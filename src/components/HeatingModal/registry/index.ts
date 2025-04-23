import { PanelRadiatorForm } from "./PanelRadiatorForm";
import { SteelCastRadiatorForm } from "./SteelCastRadiatorForm";

// Registry mapping element types to their form components
export const elementFormRegistry = {
  'panel-radiator': PanelRadiatorForm,
  'steel-cast-radiator': SteelCastRadiatorForm,
} as const; 