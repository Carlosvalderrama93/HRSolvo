import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

type MoreOptionsProps = {
  removeValue: (index: number) => void;
  handleEditClick: (index: number) => void;
  copyToClipboard: (value: string) => void;
  label: string;
  value: ContactInfo;
  index: number;
};

function MoreOptions({
  copyToClipboard,
  removeValue,
  handleEditClick,
  label,
  value,
  index,
}: MoreOptionsProps) {
  if (value.type === "name")
    return (
      <Button
        variant="ghost"
        className="w-full text-xs font-semibold"
        size="icon"
        onClick={() =>
          copyToClipboard(
            `${value.value1}${value.value2 && " " + value.value2}`
          )
        }
      >
        Copy
      </Button>
    );
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
              copyToClipboard(
                `${value.value1}${value.value2 && " " + value.value2}`
              )
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
