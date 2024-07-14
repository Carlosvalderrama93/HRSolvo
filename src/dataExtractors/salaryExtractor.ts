function salaryExtractor() {
  const salary =
    document.querySelector("#Salary span")?.textContent?.trim() || "Salary expectation: ";
  // const salaryText = document.querySelector("#Salary span")?.textContent?.trim().replace(/\./g, "") || "$$$?";
  return salary;
}
