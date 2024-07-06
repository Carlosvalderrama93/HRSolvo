import CandidateFormContainer from "./components/CandidateFormContainer";
import extractCandidateData from "./features/extractCandidateData";
import { useCandidatesStore, type Candidate } from "./zustand/candidatesStore";

function App() {
  const { addCandidate } = useCandidatesStore();

  function handlerClick() {
    const queryInfo = { active: true, currentWindow: true };
    chrome.tabs.query(queryInfo, (tabs) => getRawCandidate(tabs));
  }

  function getRawCandidate(tabs: chrome.tabs.Tab[]) {
    if (!tabs[0]?.id) return console.log("Not Tab ID");
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: extractCandidateData,
      },
      (rawCandidate: chrome.scripting.InjectionResult<Candidate>[]) => {
        if (rawCandidate[0].result) addCandidate(rawCandidate[0].result);
      }
    );
  }
  return (
    <div>
      <h1>Candidate profile</h1>
      <button onClick={handlerClick}>Get candidate data</button>
      {<CandidateFormContainer />}
    </div>
  );
}

export default App;

// copyToClipboard(urlAndCandidate);
// const url = tabs[0].url;
