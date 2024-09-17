// import extractCandidateData from "./features/extractCandidateData";
// import { useCandidatesStore, type Candidate } from "./store/candidatesStore";
// import CandidateContainer from "./components/CandidateContainer";

import CandidateProfile from "./components/candidate/CandidateProfile";
//
function App() {
  // const [checkCandidate, setCheckCandidate] = useState(true);
  // const { addCandidate, lastCandidate } = useCandidatesStore();

  // useEffect(() => {
  //   console.log("Effect get candidate");
  //   const queryInfo = { active: true, currentWindow: true };
  //   chrome.tabs.query(queryInfo, (tabs) => getRawCandidate(tabs));
  //   setCheckCandidate(false);
  // }, [checkCandidate, lastCandidate]);

  // function getRawCandidate(tabs: chrome.tabs.Tab[]) {
  //   if (!tabs[0]?.id) return console.log("Not Tab ID");
  //   chrome.scripting.executeScript(
  //     {
  //       target: { tabId: tabs[0].id },
  //       func: extractCandidateData,
  //     },
  //     (rawCandidate: chrome.scripting.InjectionResult<Candidate>[]) => {
  //       if (rawCandidate[0].result) addCandidate(rawCandidate[0].result);
  //     }
  //   );
  // }

  // return <CandidateContainer setCheckCandidate={setCheckCandidate} />;
  return (
    <div>
      <CandidateProfile />
    </div>
  );
}

export default App;
