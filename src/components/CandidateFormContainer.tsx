import CandidateCards from "./CandidateCards"; // Asegúrate de ajustar la ruta al componente
import { useCandidatesStore } from "../zustand/candidatesStore";

// Interfaz para los datos del candidato
interface CandidateData {
  name: string;
  email: string;
  whatsapp: string;
  educationInfo: string;
  languages: string;
  yearsOfExperience: string;
  salary: string;
  vacancyInfo: string;
  // Puedes añadir más propiedades según sea necesario
}

// Componente Padre en TypeScript
function CandidateFormContainer() {
  const { candidates, updateCandidate } = useCandidatesStore();

  // Función para manejar la actualización de datos del candidato
  function onUpdateCandidate(updatedData: Partial<CandidateData>) {
    updateCandidate(0, updatedData);
  }

  if (candidates.length) {
    return (
      <div>
        <CandidateCards
          candidateData={candidates[candidates.length - 1]}
          onUpdateCandidate={onUpdateCandidate}
        />
      </div>
    );
  }

  return <div>Nothing here</div>;
}

export default CandidateFormContainer;
