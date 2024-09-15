import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import ShowValue from "./ShowValue";
import ShowMoreInfo from "./ShowMoreInfo";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type {
  BasicStructure,
  CandidateInfo,
  UpdateCandidateField,
  ValuesStructure,
} from "./CandidateProfile";

// Define a type for the contact information, which can include an optional country code

export default function RawCandidateInfo({
  section,
  updateCandidateField,
  infoType,
}: {
  section: BasicStructure;
  updateCandidateField: UpdateCandidateField;
  infoType: string;

  showCopy?: boolean;
}) {
  const [inputValue, setInputValue] = useState<ValuesStructure>({
    value1: "",
    value2: "",
  });
  const [countryCode, setCountryCode] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const { toast } = useToast();

  function addOrEditValue() {
    if (inputValue) {
      const newValue: ValuesStructure = inputValue;
      if (countryCode) newValue.value2 = countryCode;

      if (editingIndex !== null) {
        const updatedValues: ValuesStructure[] = [...section.values];
        updatedValues[editingIndex] = newValue;
        updateCandidateField(infoType as keyof CandidateInfo, {
          [section.type]: { type: section.type, values: updatedValues },
        });
        setEditingIndex(null); // Exit edit mode
      } else {
        // Add mode: add a new value
        updateCandidateField(infoType as keyof CandidateInfo, {
          [section.type]: { type: section.type, values: newValue },
        });
      }
      setInputValue({ value1: "", value2: "" }); // Clear the input field
      setCountryCode(""); // Clear the country code field
    }
  }

  function removeValue(index: number) {
    updateCandidateField(infoType as keyof CandidateInfo, {
      [section.type]: {
        type: section.type,
        values: section.values.filter((_, i) => i !== index),
      },
    });
  }

  function copyToClipboard(value: string) {
    navigator.clipboard.writeText(value);
    toast({
      title: "Copied",
      description: `${section.type} copied to clipboard`,
    });
  }

  function handleEditClick(index: number) {
    setEditingIndex(index);
    setInputValue({ ...section.values[index] });
    setCountryCode(section.values[index].value2 || "");
  }

  function handleCancelEdit() {
    setEditingIndex(null);
    setInputValue({ value1: "", value2: "" });
    setCountryCode("");
  }

  return (
    <div className="grid grid-cols-[70px_auto_20px] gap-x-3 px-5 items-center">
      <span className="text-sm font-semibold text-foreground caspanitalize">
        {section.type}
      </span>
      <HoverCard>
        <HoverCardTrigger className="min-w-0 grid gap-y-2">
          <ShowValue section={section} />
        </HoverCardTrigger>
        <HoverCardContent className="min-w-[340px]">
          <ShowMoreInfo
            addOrEditValue={addOrEditValue}
            editingIndex={editingIndex}
            handleCancelEdit={handleCancelEdit}
            section={section}
            removeValue={removeValue}
            handleEditClick={handleEditClick}
            copyToClipboard={copyToClipboard}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </HoverCardContent>
      </HoverCard>
      <Button
        variant="ghost"
        size="icon"
        className="h-5 w-5 mr-1"
        onClick={() =>
          copyToClipboard(
            section.values
              .map(({ value1, value2 }) => {
                const finalString: string = value2
                  ? `${value1} ${value2}`
                  : value1;
                return finalString;
              })
              .join(", ")
          )
        }
      >
        <Copy size={10} />
      </Button>
    </div>
  );
}
