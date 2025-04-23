import { Button } from "@/components/ui/button";
import { t } from "@/lib/i18n";
import { Plus } from "lucide-react";

/**
 * Interface for HeatingActions props
 */
interface HeatingActionsProps {
  /**
   * Callback when close button is clicked
   */
  onClose: () => void;
  
  /**
   * Callback when add button is clicked
   */
  onAdd: () => void;
}

/**
 * Component that contains action buttons for the heating modal
 * Typically rendered at the bottom of the modal
 */
export function HeatingActions({ onClose, onAdd }: HeatingActionsProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <Button
        variant="link"
        onClick={onClose}
        size="sm" 
        className="text-muted-foreground cursor-pointer -ml-4"
      >
        {t("modal.close")}
      </Button>
      
      <Button
        onClick={onAdd}
        className="cursor-pointer"
        size="sm" 
      >
        <Plus className="w-4 h-4 mr-0" />
        {t("modal.add")}
      </Button>
    </div>
  );
}
