import type { MainInfo, UpdateCandidateField } from "./CandidateProfile";
import RowCandidateInfo from "./RowCandidateInfo";

export default function MainCandidateInfo({
  mainInfo,
  updateCandidateField,
}: {
  mainInfo: MainInfo;
  updateCandidateField: UpdateCandidateField;
}) {
  return (
    <>
      {Object.keys(mainInfo).map((key, index) => {
        const section = mainInfo[key as keyof MainInfo];
        return (
          <RowCandidateInfo
            key={index}
            section={section}
            updateCandidateField={updateCandidateField}
            infoType={"mainInfo"}
          />
        );
      })}
    </>
  );
}
