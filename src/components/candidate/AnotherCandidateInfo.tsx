import type { AnotherInfo, UpdateCandidateField } from "./CandidateProfile";
import RowCandidateInfo from "./RowCandidateInfo";

export default function AnotherCandidateInfo({
  anotherInfo,
  updateCandidateField,
}: {
  anotherInfo: AnotherInfo;
  updateCandidateField: UpdateCandidateField;
}) {
  return (
    <>
      {Object.keys(anotherInfo).map((key, index) => {
        const section = anotherInfo[key as keyof AnotherInfo];
        return (
          <RowCandidateInfo
            key={index}
            section={section}
            updateCandidateField={updateCandidateField}
            infoType={"anotherInfo"}
          />
        );
      })}
    </>
  );
}
