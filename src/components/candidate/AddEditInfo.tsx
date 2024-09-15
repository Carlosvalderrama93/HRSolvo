import { Input } from "../ui/input";
import { Button } from "../ui/button";

import CountryCodeCombobox from "./CountryCodeCombobox";
import type { BasicStructure, ValuesStructure } from "./CandidateProfile";

type AddEditInfoProps = {
  section: BasicStructure;
  addOrEditValue: () => void;
  editingIndex: number | null;
  handleCancelEdit: () => void;
  inputValue: ValuesStructure;
  setInputValue: React.Dispatch<React.SetStateAction<ValuesStructure>>;
};

export default function AddEditInfo({
  section,
  addOrEditValue,
  editingIndex,
  handleCancelEdit,
  inputValue = {
    value1: "",
    value2: "",
  },
  setInputValue,
}: AddEditInfoProps) {
  if (section.type === "name") return <></>;
  const addCancelButtons: JSX.Element = (
    <div className="mt-2 flex space-x-2">
      {editingIndex !== null && (
        <Button
          variant="secondary"
          className="text-xs flex-1 font-semibold"
          size="sm"
          onClick={handleCancelEdit}
        >
          Cancel
        </Button>
      )}
      <Button
        variant="default"
        className="text-xs flex-1 font-semibold"
        size="sm"
        onClick={addOrEditValue}
      >
        {editingIndex !== null
          ? `Update ${section.type}`
          : `Add new ${section.type}`}
      </Button>
    </div>
  );
  const twoInputsOption: JSX.Element = (
    <div className="grid grid-cols-[auto_auto] gap-x-2 justify-center">
      <Input
        type="text"
        value={inputValue.value1}
        onChange={(e) =>
          setInputValue({
            ...inputValue,

            value1: e.target.value,
          })
        }
        className="p-2 text-xs border rounded"
        placeholder={
          editingIndex !== null ? `Edit ${section.type}` : `New ${section.type}`
        }
      />
      <Input
        type="text"
        value={inputValue.value2}
        onChange={(e) =>
          setInputValue({
            ...inputValue,

            value1: inputValue.value1,
            value2: e.target.value,
          })
        }
        className="p-2 text-xs border rounded"
        placeholder={
          editingIndex !== null ? `Edit ${section.type}` : `New ${section.type}`
        }
      />
    </div>
  );
  const countryCodeInput: JSX.Element = (
    <div className="mt-2 flex space-x-2">
      <CountryCodeCombobox />
      <Input
        type="text"
        value={inputValue.value1}
        onChange={(e) =>
          setInputValue({
            ...inputValue,

            value1: e.target.value,
          })
        }
        className="w-3/4 p-2 text-xs border rounded flex-1"
        placeholder={
          editingIndex !== null ? `Edit ${section.type}` : `New ${section.type}`
        }
      />
    </div>
  );
  const specialInput: JSX.Element = (
    <>{section.type === "phone" ? countryCodeInput : twoInputsOption}</>
  );
  const oneInputOption: JSX.Element = (
    <Input
      type="text"
      value={inputValue.value1}
      onChange={(e) =>
        setInputValue({
          ...inputValue,

          value1: e.target.value,
        })
      }
      className="w-3/4 p-2 text-xs border rounded flex-1"
      placeholder={
        editingIndex !== null ? `Edit ${section.type}` : `New ${section.type}`
      }
    />
  );
  const finalInput: JSX.Element = section.values[0]?.value2
    ? specialInput
    : oneInputOption;

  return (
    <>
      {finalInput}
      {addCancelButtons}
    </>
  );
}
