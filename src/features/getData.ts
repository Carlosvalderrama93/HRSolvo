import { useCandidatesStore, type Candidate } from "../zustand/candidatesStore";
import extractCandidateData from "./extractCandidateData";

export const base: Candidate = {
  languages: "",
  name: "",
  email: "",
  whatsapp: "",
  address: "",
  vacancyInfo: "",
  yearsOfExperience: "",
  educationInfo: "",
  salary: "",
};

function getCandidateData() {
  debugger
  const { addCandidate } = useCandidatesStore();
  const queryInfo = { active: true, currentWindow: true };
  chrome.tabs.query(queryInfo, (tabs) => handleTabs(tabs, addCandidate));
}

// copyToClipboard(urlAndCandidate);
// const url = tabs[0].url;

// Función para manejar las pestañas consultadas

export function handleTabs(
  tabs: chrome.tabs.Tab[],
  addCandidate: (candidate: Candidate) => void
) {
  if (!tabs[0]?.id) return console.log("Not Tab ID");
  debugger;
  chrome.scripting.executeScript(
    {
      target: { tabId: tabs[0].id },
      func: extractCandidateData,
    },
    (candidates: chrome.scripting.InjectionResult<Candidate>[]) => {
      if (candidates[0].result) addCandidate(candidates[0].result);
    }
  );
}

export default getCandidateData;
