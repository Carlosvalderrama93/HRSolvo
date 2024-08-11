export default function positionAppliedExtractor(
  docu: Document,
  salary: string
) {
  const vacancyInfoElement = docu.querySelector(".lh-140");
  console.log("vacancyInfoElement", vacancyInfoElement);
  const vacancyInfo = vacancyInfoElement?.textContent?.trim() || "";
  const vacancyInfoTruncated = vacancyInfo.split("Bilingual")[0] + "Bilingual"; // Keep only text before "Bilingual"
  const position = `Pandape - ${vacancyInfoTruncated} - $ ${salary} COP (${salary.replace(
    /\./g,
    ""
  )})`;
  return position;
}
