import { useCandidatesStore } from "../store/candidatesStore";
import copyToClipboard from "../features/copyToClipboard";
import { Button } from "./ui/button";
import CandidateCard from "./CandidateCard";

// interface CandidateData {
//   name: string;
//   email: string;
//   whatsapp: string;
//   educationInfo: string;
//   languages: string;
//   yearsOfExperience: string;
//   salary: string;
//   vacancyInfo: string;
// }

function CandidateContainer({
  setCheckCandidate,
}: {
  setCheckCandidate: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { lastCandidate } = useCandidatesStore();

  // function onUpdateCandidate(updatedData: Partial<CandidateData>) {
  //   updateCandidate(0, updatedData);
  // }

  if (lastCandidate) {
    return (
      <>
        <h2 className="text-lg font-semibold">Candidates Flow</h2>
        <div>
          <Button
            onClick={() => {
              console.log("Check candidate true clicked");
              setCheckCandidate(true);
            }}
          >
            Get candidate
          </Button>
          <CandidateCard candidateData={lastCandidate} />

          <Button
            onClick={() => {
              copyToClipboard(lastCandidate);
            }}
          >
            Copy Data
          </Button>
        </div>
      </>
    );
  }

  return <div>Nothing here</div>;
}

export default CandidateContainer;
