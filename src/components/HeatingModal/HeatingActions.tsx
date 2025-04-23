import { Button } from "@/components/ui/button";
import { t } from "@/lib/i18n";

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
    <div className="flex justify-between items-center mt-6 pt-4 border-t">
      <div className="flex-1">
        {/* Left side space - could contain additional actions in the future */}
      </div>
      
      <div className="flex space-x-2">
        <Button
          variant="outline"
          onClick={onClose}
        >
          {t("modal.close")}
        </Button>
        
        <Button
          onClick={onAdd}
        >
          {t("modal.add")}
        </Button>
      </div>
    </div>
  );
}
