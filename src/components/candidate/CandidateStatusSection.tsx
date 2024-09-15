import { CandidateStatusCombobox } from "../CandidateCard";

function CandidateStatusSection() {
  return (
    <div className="items-center grid grid-cols-[70px_auto] gap-x-3 px-5">
      <p className="font-semibold">Status</p>
      <CandidateStatusCombobox data={candidateStatus} />
      <p className="font-semibold">English</p>
      <CandidateStatusCombobox data={englishLevel} />
    </div>
  );
}
