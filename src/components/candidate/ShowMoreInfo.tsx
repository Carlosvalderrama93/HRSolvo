import type { BasicStructure, ValuesStructure } from "./CandidateProfile";

import AddEditInfo from "./AddEditInfo";
import MoreOptions from "./MoreOptions";
import setOrderValues from "@/features/setOrderValues";

type ShowMoreInfoProps = {
  section: BasicStructure;
  removeValue: (index: number) => void;
  handleEditClick: (index: number) => void;
  copyToClipboard: (value: string) => void;
  addOrEditValue: () => void;
  editingIndex: number | null;
  handleCancelEdit: () => void;
  inputValue: ValuesStructure;
  setInputValue: React.Dispatch<React.SetStateAction<ValuesStructure>>;
};

export default function ShowMoreInfo({
  section,
  removeValue,
  handleEditClick,
  copyToClipboard,
  addOrEditValue,
  editingIndex,
  handleCancelEdit,
  inputValue,
  setInputValue,
}: ShowMoreInfoProps) {
  return (
    <>
      {section.values.map(({ value1, value2 }, index) => {
        const finalValue = setOrderValues({
          value1,
          value2,
          type: section.type,
        });
        return (
          <div key={index}>
            <div className="flex items-center justify-between" key={index}>
              <span className="text-xs text-primary">{finalValue}</span>
              <MoreOptions
                index={index}
                label={section.type}
                values={{ value1, value2 }}
                removeValue={removeValue}
                copyToClipboard={copyToClipboard}
                handleEditClick={handleEditClick}
              />
            </div>
          </div>
        );
      })}
      <AddEditInfo
        addOrEditValue={addOrEditValue}
        editingIndex={editingIndex}
        handleCancelEdit={handleCancelEdit}
        section={section}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </>
  );
}
