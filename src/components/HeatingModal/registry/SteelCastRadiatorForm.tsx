import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { t } from "@/lib/i18n";
import { FormProps } from "./index";

/**
 * Form component for Steel/Cast Radiator type
 */
export function SteelCastRadiatorForm({ element, onChange, errors }: FormProps) {
  const { updateDimension, updateProperty } = onChange;
  
  return (
    <div className="space-y-4">
      {/* Material Type */}
      <div>
        <Label htmlFor="material-type">Material Type</Label>
        <Select 
          value={element.properties?.materialType as string || ""} 
          onValueChange={(value) => updateProperty({ key: "materialType", value })}
        >
          <SelectTrigger id="material-type">
            <SelectValue placeholder="Select material" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="steel">Steel</SelectItem>
            <SelectItem value="cast-iron">Cast Iron</SelectItem>
          </SelectContent>
        </Select>
        {errors.materialType && (
          <p className="text-sm text-destructive mt-1">{errors.materialType}</p>
        )}
      </div>
      
      {/* Sections */}
      <div>
        <Label htmlFor="sections">Number of Sections</Label>
        <Input 
          id="sections"
          type="number"
          value={(element.properties?.sections as number) || ""}
          onChange={(e) => updateProperty({ key: "sections", value: parseInt(e.target.value) || undefined })}
        />
        {errors.sections && (
          <p className="text-sm text-destructive mt-1">{errors.sections}</p>
        )}
      </div>
      
      {/* Height */}
      <div>
        <Label htmlFor="height">{t("fields.height")}</Label>
        <Input 
          id="height"
          type="number"
          value={element.dimensions?.height || ""}
          onChange={(e) => updateDimension({ key: "height", value: parseInt(e.target.value) || undefined })}
        />
        {errors.height && (
          <p className="text-sm text-destructive mt-1">{errors.height}</p>
        )}
      </div>
      
      {/* Length */}
      <div>
        <Label htmlFor="length">{t("fields.length")}</Label>
        <Input 
          id="length"
          type="number"
          value={element.dimensions?.length || ""}
          onChange={(e) => updateDimension({ key: "length", value: parseInt(e.target.value) || undefined })}
        />
        {errors.length && (
          <p className="text-sm text-destructive mt-1">{errors.length}</p>
        )}
      </div>
    </div>
  );
} 