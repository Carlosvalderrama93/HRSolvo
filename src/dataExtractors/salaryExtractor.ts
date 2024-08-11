export default function salaryExtractor(docu: Document) {
  const salary =
    docu.querySelector("#Salary span")?.textContent?.trim() ||
    "Salary expectation: ";
  // const salaryText = document.querySelector("#Salary span")?.textContent?.trim().replace(/\./g, "") || "$$$?";
  return salary;
}
