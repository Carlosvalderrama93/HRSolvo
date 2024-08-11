import { useEffect, useState } from "react";
import CandidateFormContainer from "./components/CandidateFormContainer";

import extractCandidateData from "./features/extractCandidateData";
import { useCandidatesStore, type Candidate } from "./store/candidatesStore";
import copyToClipboard from "./features/copyToClipboard";

function App() {
  const [checkCandidate, setCheckCandidate] = useState(true);
  const { addCandidate, lastCandidate } = useCandidatesStore();

  useEffect(() => {
    if (checkCandidate) {
      const queryInfo = { active: true, currentWindow: true };
      chrome.tabs.query(queryInfo, (tabs) => getRawCandidate(tabs));
      setCheckCandidate(false);
    }

    if (lastCandidate) copyToClipboard(lastCandidate);
  }, [checkCandidate, lastCandidate]);

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
      {<CandidateFormContainer setCheckCandidate={setCheckCandidate} />}
    </div>
  );
}

export default App;

// copyToClipboard(urlAndCandidate);
// const url = tabs[0].url;
