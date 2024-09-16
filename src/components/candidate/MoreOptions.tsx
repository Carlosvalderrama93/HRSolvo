import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import type { ValuesStructure } from "./CandidateProfile";
import setOrderValues from "@/features/setOrderValues";

type MoreOptionsProps = {
  removeValue: (index: number) => void;
  handleEditClick: (index: number) => void;
  copyToClipboard: (value: string) => void;
  label: string;
  values: ValuesStructure;
  index: number;
};

function MoreOptions({
  copyToClipboard,
  removeValue,
  handleEditClick,
  label,
  values,
  index,
}: MoreOptionsProps) {
  const { value1, value2 } = values;

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="font-semibold text-xs">
            ...
          </Button>
        </PopoverTrigger>
        <PopoverContent className="items-center p-2 space-y-1 flex flex-col w-36">
          <Button
            variant="ghost"
            className="w-full text-xs font-semibold"
            size="icon"
            onClick={() =>
              copyToClipboard(setOrderValues({ value1, value2, type: label }))
            }
          >
            Copy {label}
          </Button>
          <Button
            variant="ghost"
            className="w-full text-xs font-semibold"
            size="icon"
            onClick={() => removeValue(index)}
          >
            Delete {label}
          </Button>
          <Button
            variant="ghost"
            className="w-full text-xs font-semibold"
            size="icon"
            onClick={() => handleEditClick(index)}
          >
            Edit {label}
          </Button>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default MoreOptions;
