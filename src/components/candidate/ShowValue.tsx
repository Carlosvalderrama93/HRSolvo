import setOrderValues from "@/features/setOrderValues";
import type { BasicStructure } from "./CandidateProfile";

export default function ShowValue({ section }: { section: BasicStructure }) {
  return (
    <>
      {section.values.map(({ value1, value2 }, index) => {
        const finalValue = setOrderValues({
          value1,
          value2,
          type: section.type,
        });
        return (
          <div key={index} className="mb-2 truncate">
            <span className="text-sm text-primary">{finalValue}</span>
          </div>
        );
      })}
    </>
  );
}
// información de la sección
