export default function candidateNameExtractor(): string {
  const candidateName = document
    .querySelector("#HeaderInfoContainer .match-name.mt-0.d-flex div")
    ?.textContent?.trim();
  return candidateName ?? "Candidate name";
}
