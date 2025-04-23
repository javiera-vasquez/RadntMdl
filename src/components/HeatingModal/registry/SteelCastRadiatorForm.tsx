import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { t } from "@/lib/i18n";
import type { FormProps } from "./index";

/**
 * Form component for Steel/Cast Radiator type
 */
export function SteelCastRadiatorForm({ element, onChange }: FormProps) {
  const { updateDimension, updateProperty } = onChange;
  
  return (
    <div className="space-y-4">
      <div className="">
        <Label htmlFor="material-type" className="text-sm text-muted-foreground font-light">{t("fields.materialType")}</Label>
        <Select 
          value={element.properties?.materialType as string || ""} 
          onValueChange={(value) => updateProperty({ key: "materialType", value })}
        >
          <SelectTrigger id="material-type">
            <SelectValue placeholder={t("placeholders.selectMaterial")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="steel">{t("selectOptions.materialTypes.steel")}</SelectItem>
            <SelectItem value="cast-iron">{t("selectOptions.materialTypes.cast-iron")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="">
        <Label htmlFor="sections" className="text-sm text-muted-foreground font-light">{t("fields.sections")}</Label>
        <Input 
          id="sections"
          type="number"
          value={(element.properties?.sections as number) || ""}
          onChange={(e) => updateProperty({ key: "sections", value: parseInt(e.target.value) || undefined })}
        />
      </div>
      
      <div className="">
        <Label htmlFor="cast-height" className="text-sm text-muted-foreground font-light">{t("fields.height")}</Label>
        <Input 
          id="cast-height"
          type="number"
          value={element.dimensions?.castHeight || ""}
          onChange={(e) => updateDimension({ key: "castHeight", value: parseInt(e.target.value) || undefined })}
        />
      </div>
      
      <div className="">
        <Label htmlFor="cast-length" className="text-sm text-muted-foreground font-light">{t("fields.length")}</Label>
        <Input 
          id="cast-length"
          type="number"
          value={element.dimensions?.castLength || ""}
          onChange={(e) => updateDimension({ key: "castLength", value: parseInt(e.target.value) || undefined })}
        />
      </div>
    </div>
  );
} 