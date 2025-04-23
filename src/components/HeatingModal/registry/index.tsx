import { HeatingElement } from "../types";
import { PanelRadiatorForm } from "./PanelRadiatorForm";
import { SteelCastRadiatorForm } from "./SteelCastRadiatorForm";
import React from "react";

// Create interface for form props
export interface FormProps {
  element: Partial<HeatingElement>;
  onChange: {
    updateDimension: (data: { key: string; value: number | undefined }) => void;
    updateProperty: (data: { key: string; value: string | number | boolean | undefined }) => void;
  };
}

// Registry mapping element types to their form components
type Registry = {
  [key in 'panel-radiator' | 'steel-cast-radiator']: React.ComponentType<FormProps>;
};

export const elementFormRegistry: Registry = {
  'panel-radiator': PanelRadiatorForm,
  'steel-cast-radiator': SteelCastRadiatorForm
}; 