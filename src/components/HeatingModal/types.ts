export type HeatingCircuit = {
  id: string;
  name: string;
};

export type HeatingElementType = 
  | 'panel-radiator'
  | 'steel-cast-radiator'
  | 'pipe-column-radiator'
  | 'bathroom-radiator'
  | 'floor-heating'
  | 'professional-input';

export interface HeatingElement {
  id: string;
  type: HeatingElementType;
  circuitId: string;
  dimensions: {
    height?: number;
    length?: number;
    [key: string]: any;
  };
  properties: {
    [key: string]: any;
  };
  thermostaticValve?: boolean;
  photos?: string[];
  model3d?: string;
  standardOutput?: number;
}

export interface HeatingModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd?: (element: HeatingElement) => void;
}