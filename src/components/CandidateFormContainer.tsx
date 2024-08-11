import CandidateCards from "./CandidateCards"; // Asegúrate de ajustar la ruta al componente
import { useCandidatesStore } from "../store/candidatesStore";
import copyToClipboard from "../features/copyToClipboard";

interface CandidateData {
  name: string;
  email: string;
  whatsapp: string;
  educationInfo: string;
  languages: string;
  yearsOfExperience: string;
  salary: string;
  vacancyInfo: string;
}

function CandidateFormContainer({
  setCheckCandidate,
}: {
  setCheckCandidate: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { lastCandidate, updateCandidate } = useCandidatesStore();

  function onUpdateCandidate(updatedData: Partial<CandidateData>) {
    updateCandidate(0, updatedData);
  }

  if (lastCandidate) {
    return (
      <div>
        <CandidateCards
          candidateData={lastCandidate}
          onUpdateCandidate={onUpdateCandidate}
        />
        <button onClick={() => setCheckCandidate(true)}>Get candidate</button>
        <button
          onClick={() => {
            copyToClipboard(lastCandidate);
          }}
        >
          Copy Data
        </button>
      </div>
    );
  }

  return <div>Nothing here</div>;
}

export default CandidateFormContainer;
