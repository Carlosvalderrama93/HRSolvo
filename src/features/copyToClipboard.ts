import { type Candidate } from "../store/candidatesStore";

export default function copyToClipboard(candidate: Candidate | undefined) {
  if (!candidate) return "Not candidate";
  console.log("vacancy", candidate.vacancyInfo);

  const candidateCopy = `
${candidate.name}
${candidate.email}
${candidate.whatsapp}
${candidate.address}, Colombia


${candidate.vacancyInfo}

${candidate.languages}

${candidate.educationInfo}

${candidate.yearsOfExperience}
${candidate.url}  
  `;
  navigator.clipboard
    .writeText(candidateCopy)
    .then(() => console.log("Text copied to clipboard"))
    .catch((error) =>
      console.error("Could not copy text to clipboard:", error)
    );
}
