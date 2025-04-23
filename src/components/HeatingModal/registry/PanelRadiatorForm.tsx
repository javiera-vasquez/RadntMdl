import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { t } from "@/lib/i18n";
import type { FormProps } from "./index";

/**
 * Form component for Panel Radiator type
 */
export function PanelRadiatorForm({ element, onChange }: FormProps) {
  const { updateDimension, updateProperty } = onChange;
  
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="panel-type" className="text-sm text-muted-foreground font-light">{t("fields.panelType")}</Label>
        <Select 
          value={element.properties?.panelType as string || ""} 
          onValueChange={(value) => updateProperty({ key: "panelType", value })}
        >
          <SelectTrigger id="panel-type">
            <SelectValue placeholder={t("placeholders.selectPanelType")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="single">{t("selectOptions.panelTypes.single")}</SelectItem>
            <SelectItem value="double">{t("selectOptions.panelTypes.double")}</SelectItem>
            <SelectItem value="triple">{t("selectOptions.panelTypes.triple")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="panel-height" className="text-sm text-muted-foreground font-light">{t("fields.height")}</Label>
        <Input 
          id="panel-height"
          type="number"
          value={element.dimensions?.panelHeight || ""}
          onChange={(e) => updateDimension({ key: "panelHeight", value: parseInt(e.target.value) || undefined })}
        />
      </div>
      
      <div>
        <Label htmlFor="panel-length" className="text-sm text-muted-foreground font-light">{t("fields.length")}</Label>
        <Input 
          id="panel-length"
          type="number"
          value={element.dimensions?.panelLength || ""}
          onChange={(e) => updateDimension({ key: "panelLength", value: parseInt(e.target.value) || undefined })}
        />
      </div>
    </div>
  );
} 