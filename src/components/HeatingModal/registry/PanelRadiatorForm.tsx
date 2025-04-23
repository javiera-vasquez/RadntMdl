import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { t } from "@/lib/i18n";
import { FormProps } from "./index";

/**
 * Form component for Panel Radiator type
 */
export function PanelRadiatorForm({ element, onChange, errors }: FormProps) {
  const { updateDimension, updateProperty } = onChange;
  
  return (
    <div className="space-y-4">
      {/* Radiator Type */}
      <div>
        <Label htmlFor="radiator-type">{t("fields.radiatorType")}</Label>
        <Select 
          value={element.properties?.radiatorType as string || ""} 
          onValueChange={(value) => updateProperty({ key: "radiatorType", value })}
        >
          <SelectTrigger id="radiator-type">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="type1">Type 1</SelectItem>
            <SelectItem value="type2">Type 2</SelectItem>
          </SelectContent>
        </Select>
        {errors.radiatorType && (
          <p className="text-sm text-destructive mt-1">{errors.radiatorType}</p>
        )}
      </div>
      
      {/* Radiator Model */}
      <div>
        <Label htmlFor="radiator-model">{t("fields.radiatorModel")}</Label>
        <Select 
          value={element.properties?.radiatorModel as string || ""} 
          onValueChange={(value) => updateProperty({ key: "radiatorModel", value })}
        >
          <SelectTrigger id="radiator-model">
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="model1">Model 1</SelectItem>
            <SelectItem value="model2">Model 2</SelectItem>
          </SelectContent>
        </Select>
        {errors.radiatorModel && (
          <p className="text-sm text-destructive mt-1">{errors.radiatorModel}</p>
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