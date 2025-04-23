import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { HeatingElement, HeatingCircuit } from '../types';

// Only use the two supported types
type SupportedHeatingType = 'panel-radiator' | 'steel-cast-radiator';

// State interface
interface HeatingState {
  element: Partial<HeatingElement> & { type: SupportedHeatingType };
  circuits: HeatingCircuit[];
  errors: Record<string, string>;
}

// Action types
type HeatingAction = 
  | { type: 'SET_TYPE'; payload: SupportedHeatingType }
  | { type: 'SET_CIRCUIT'; payload: string }
  | { type: 'UPDATE_DIMENSION'; payload: { key: string; value: number | undefined } }
  | { type: 'UPDATE_PROPERTY'; payload: { key: string; value: string | number | boolean | undefined } }
  | { type: 'SET_ERRORS'; payload: Record<string, string> }
  | { type: 'RESET' };

// Initial state
const initialState: HeatingState = {
  element: {
    id: `element-${Date.now()}`,
    type: 'panel-radiator',
    circuitId: 'circuit-1',
    dimensions: {
      height: 600,
      length: 1000
    },
    properties: {},
    standardOutput: 461
  },
  circuits: [{ id: "circuit-1", name: "Heating circuit 1" }],
  errors: {}
};

// Reducer function
function heatingReducer(state: HeatingState, action: HeatingAction): HeatingState {
  switch (action.type) {
    case 'SET_TYPE':
      return {
        ...state,
        element: {
          ...state.element,
          type: action.payload
        }
      };
    case 'SET_CIRCUIT':
      return {
        ...state,
        element: {
          ...state.element,
          circuitId: action.payload
        }
      };
    case 'UPDATE_DIMENSION':
      return {
        ...state,
        element: {
          ...state.element,
          dimensions: {
            ...state.element.dimensions,
            [action.payload.key]: action.payload.value
          }
        }
      };
    case 'UPDATE_PROPERTY':
      return {
        ...state,
        element: {
          ...state.element,
          properties: {
            ...state.element.properties,
            [action.payload.key]: action.payload.value
          }
        }
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.payload
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

// Context interface
interface HeatingContextType {
  state: HeatingState;
  setElementType: (type: SupportedHeatingType) => void;
  setCircuit: (circuitId: string) => void;
  updateDimension: (data: { key: string; value: number | undefined }) => void;
  updateProperty: (data: { key: string; value: string | number | boolean | undefined }) => void;
  validate: () => Record<string, string>;
  reset: () => void;
}

// Create context
const HeatingContext = createContext<HeatingContextType | undefined>(undefined);

// Context provider
export function HeatingContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(heatingReducer, initialState);

  // Actions
  const setElementType = (type: SupportedHeatingType) => {
    dispatch({ type: 'SET_TYPE', payload: type });
  };

  const setCircuit = (circuitId: string) => {
    dispatch({ type: 'SET_CIRCUIT', payload: circuitId });
  };

  const updateDimension = (data: { key: string; value: number | undefined }) => {
    dispatch({ type: 'UPDATE_DIMENSION', payload: data });
  };

  const updateProperty = (data: { key: string; value: string | number | boolean | undefined }) => {
    dispatch({ type: 'UPDATE_PROPERTY', payload: data });
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    
    // Basic validation
    if (!state.element.circuitId) {
      errors.circuitId = "Heating circuit is required";
    }
    
    if (!state.element.dimensions?.height) {
      errors.height = "Height is required";
    }
    
    if (!state.element.dimensions?.length) {
      errors.length = "Length is required";
    }
    
    dispatch({ type: 'SET_ERRORS', payload: errors });
    return errors;
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  // Context value
  const value: HeatingContextType = {
    state,
    setElementType,
    setCircuit,
    updateDimension,
    updateProperty,
    validate,
    reset
  };

  return (
    <HeatingContext.Provider value={value}>
      {children}
    </HeatingContext.Provider>
  );
}

// Custom hook to use the context
export function useHeatingContext() {
  const context = useContext(HeatingContext);
  if (context === undefined) {
    throw new Error('useHeatingContext must be used within a HeatingContextProvider');
  }
  return context;
} 