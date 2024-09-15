import type { BasicStructure } from "./CandidateProfile";

export default function ShowValue({ section }: { section: BasicStructure }) {
  return (
    <>
      {section.values.map(({ value1, value2 }, index) => {
        let finalValue = "value1";
        if (value2) {
          finalValue =
            section.type === "phone"
              ? `${value1} ${value2}`
              : ` ${value2} ${value1}`;
          return (
            <div key={index} className="mb-2 truncate">
              <span className="text-sm text-primary">{finalValue}</span>
            </div>
          );
        }
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