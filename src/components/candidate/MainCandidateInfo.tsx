import type { MainInfo, UpdateCandidateField } from "./CandidateProfile";
import RawCandidateInfo from "./RawCandidateInfo";

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
          <RawCandidateInfo
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
