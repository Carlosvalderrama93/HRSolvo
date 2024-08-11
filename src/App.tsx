import { useEffect, useState } from "react";
import CandidateFormContainer from "./components/CandidateFormContainer";

import extractCandidateData from "./features/extractCandidateData";
import { useCandidatesStore, type Candidate } from "./store/candidatesStore";
import copyToClipboard from "./features/copyToClipboard";

function App() {
  const [checkCandidate, setCheckCandidate] = useState(true);
  const [copyCandidate, setCopyCandidate] = useState<boolean>(false);
  const { addCandidate, getLastCandidate } = useCandidatesStore();

  useEffect(() => {
    if (checkCandidate) {
      const queryInfo = { active: true, currentWindow: true };
      chrome.tabs.query(queryInfo, (tabs) => getRawCandidate(tabs));
    }

    if (copyCandidate) copyToClipboard(getLastCandidate());

    setCheckCandidate(false);
    setCopyCandidate(false);
  }, [checkCandidate, copyCandidate]);

  function handlerClick() {
    setCheckCandidate(true);
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
      {<CandidateFormContainer />}
      <button onClick={handlerClick}>Get candidate data</button>
      <button onClick={() => setCopyCandidate(!copyCandidate)}>
        Copy Data
      </button>
    </div>
  );
}

export default App;

// copyToClipboard(urlAndCandidate);
// const url = tabs[0].url;
