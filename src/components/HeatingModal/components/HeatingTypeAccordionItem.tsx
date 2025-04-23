import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { type HeatingElement } from "../types";

interface FormProps {
  element: HeatingElement;
  onChange: {
    updateDimension: (args: { key: string; value: number | undefined }) => void;
    updateProperty: (args: { key: string; value: string | number | undefined }) => void;
  };
}

interface HeatingTypeAccordionItemProps {
  type: string;
  label: string;
  isSelected: boolean;
  isDesktopLayout?: boolean;
  FormComponent?: React.ComponentType<FormProps>;
  element?: HeatingElement;
  onChange?: FormProps['onChange'];
}

export function HeatingTypeAccordionItem({
  type,
  label,
  isSelected,
  isDesktopLayout = false,
  FormComponent,
  element,
  onChange
}: HeatingTypeAccordionItemProps) {
  return (
    <AccordionItem 
      key={type} 
      value={type} 
      className={isDesktopLayout ? "border-b-0 px-2 py-0.5" : ""}
    >
      <AccordionTrigger 
        className={cn(
          "text-xs truncate whitespace-nowrap flex items-center gap-2",
          isDesktopLayout && "py-2 hover:no-underline data-[state=open]:text-primary [&>svg]:rotate-[0deg] [&>svg]:ml-0 [&>svg]:mr-2 [&>svg]:h-3 [&>svg]:w-3 [&[data-state=open]>svg]:-rotate-90",
          isSelected && "text-primary"
        )}
      >
        {label}
      </AccordionTrigger>
      
      {!isDesktopLayout && (
        <AccordionContent>
          {FormComponent && isSelected && element && onChange && (
            <div className="pt-2 pb-4 min-h-[30vh]">
              <FormComponent 
                element={element}
                onChange={onChange}
              />
            </div>
          )}
        </AccordionContent>
      )}
    </AccordionItem>
  );
} 