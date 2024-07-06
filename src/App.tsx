import getCandidateData from "./features/getData";
import { useCandidatesStore } from "./zustand/candidatesStore";

function App() {
  const { candidates } = useCandidatesStore();

  getCandidateData();

  return (
    <div>
      <h1>Candidate profile</h1>
      <button onClick={getCandidateData}>Get Data</button>
      <div>{candidates.length ? candidates[0].name : "NADA"}</div>
    </div>
  );
}

export default App;
