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
    [key: string]: number | undefined;
  };
  properties: {
    [key: string]: string | number | boolean | undefined;
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

/**
 * Props for the HeatingTypeSelector component
 */
export interface HeatingTypeSelectorProps {
  /**
   * Currently selected heating element type
   */
  selectedType: HeatingElementType;
  
  /**
   * Callback when a type is selected
   */
  onTypeSelect: (type: HeatingElementType) => void;
  
  /**
   * Available heating circuits
   */
  circuits: HeatingCircuit[];
  
  /**
   * Currently selected circuit ID
   */
  selectedCircuitId: string;
  
  /**
   * Callback when a circuit is selected
   */
  onCircuitSelect: (circuitId: string) => void;
}

/**
 * Props for the HeatingElementForm component
 */
export interface HeatingElementFormProps {
  /**
   * Currently selected heating element type
   */
  elementType: HeatingElementType;
  
  /**
   * Current dimensions and properties
   */
  element: Partial<HeatingElement>;
  
  /**
   * Callback when element data changes
   */
  onChange: (element: Partial<HeatingElement>) => void;
}