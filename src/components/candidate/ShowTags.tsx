import { Badge } from "../ui/badge";
import type { ContactInfo } from "./MultipleInfoRow";

export function ShowTags({ data }: { data: ContactInfo[] }) {
  return (
    <div className=" bg-blue-200 flex flex-col items-start gap-2 px-5 mb-2">
      {data.map((contactInfo, index) => (
        <Badge variant="secondary">
          {<span id={`${index}I`}>{contactInfo.mainValue}</span>}
        </Badge>
        // <Badge key={index} variant="outline">
        //   Process {index + 1}: {date.toLocaleDateString()}
        // </Badge>
      ))}
    </div>
  );
}
