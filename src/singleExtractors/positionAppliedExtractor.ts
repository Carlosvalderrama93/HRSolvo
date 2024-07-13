export default function positionAppliedExtractor(salary: string) {
  const vacancyInfoElement = document.querySelector(".secondary-bar-title");
  const vacancyInfo = vacancyInfoElement?.textContent?.trim() || "";
  const vacancyInfoTruncated = vacancyInfo.split("Bilingual")[0] + "Bilingual"; // Keep only text before "Bilingual"
  const position = `Pandape - ${vacancyInfoTruncated} - $ ${salary} COP (${salary.replace(
    /\./g,
    ""
  )})`;
  return position;
}
