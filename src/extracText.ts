export default function extractTextFromPage(): Record<string, string> {
  // User name
  const name =
    document.querySelector(".font-3xl.lh-120.fw-600.text-capitalize")
      ?.textContent || "";

  // Email address
  const email = (
    document.querySelector('a[href^="mailto:"]')?.textContent || ""
  )
    .replace(/\n+/g, "")
    .trim();

  //Contact number
  const whatsappFullText =
    document.querySelector(".js_WhatsappLink")?.textContent || "";
  const whatsappCountryCode = (whatsappFullText.match(/^\+?\d{1,3}/) || [
    "",
  ])[0];
  const whatsappNumber = whatsappFullText.replace(/^\+?\d{1,3}-/, "").trim();

  // city
  const address =
    document.querySelector(".my-10 .d-flex span")?.textContent || "";

  const city = address
    .trim()
    .split(/\s+|,|\./)
    .filter(Boolean);

  // Vacancy or position published
  const vacancyInfoElement = document.querySelector(".secondary-bar-title");
  const vacancyInfo = vacancyInfoElement?.textContent?.trim() || "";
  const vacancyInfoTruncated = vacancyInfo.split("Bilingual")[0] + "Bilingual"; // Keep only text before "Bilingual"

  // Languages
  const languagesEl = document.querySelectorAll(".js_tagText.text-break-word");

  // Utilizar reduce para filtrar y almacenar los textos que contienen "Inglés"
  const languages = Array.from(languagesEl).reduce<string[]>((acc, crr) => {
    if (
      typeof crr.textContent === "string" &&
      crr.textContent.includes("Inglés")
    ) {
      acc.push(crr.textContent.trim());
    }
    return acc;
  }, []);

  // Convertir el array resultante en una cadena de texto separada por " - "
  const languagesString = languages.join(" - ");

  console.log(languagesString);

  // Extracting job experiences
  const jobExperienceElements = document.querySelectorAll(
    "#ResumeExperiences .row.no-gutters.mb-20.js_aggregateContainer"
  );

  const jobExperiences = Array.from(jobExperienceElements).map(
    (experienceElement) => {
      const jobTitleElement = experienceElement.querySelector("strong");
      const jobTitle = jobTitleElement?.textContent || "";

      const durationElement = experienceElement.querySelector(
        ".c-md.fw-400.lh-140 span"
      );
      const durationText = durationElement?.textContent || "";
      const duration = durationText.trim();

      return `${jobTitle}: ${duration}`;
    }
  );

  const experiencesAsString = jobExperiences.join("; ");

  // Extracting education information
  const educationElements = document.querySelectorAll(
    "#ResumeStudies .row.no-gutters.mb-20.js_aggregateContainer"
  );

  const educationInfo = Array.from(educationElements).map(
    (educationElement) => {
      const studyTitleElement = educationElement.querySelector("strong");
      const studyTitle = studyTitleElement?.textContent || "";

      const durationElement = educationElement.querySelector(
        ".c-md.fw-400.lh-140 span"
      );
      const durationText = durationElement?.textContent || "";
      const duration = durationText.trim();

      // Remove "Carrera Profesional" and "Carrera técnica" from the study title
      const cleanedStudyTitle = studyTitle
        .replace("Carrera Profesional", "")
        .replace("Carrera técnica", "")
        .replace("Postgrado /", "")
        .replace("Universidad /", "")
        .replace(/\s+/g, " ")
        .replace(":", "")
        .trim();

      return `${cleanedStudyTitle} ${duration}`;
    }
  );

  const educationAsString = educationInfo.reverse().join("\n");
  const salary =
    document.querySelector("#Salary span")?.textContent?.trim() || "$$$?";
  // const salaryText = document.querySelector("#Salary span")?.textContent?.trim().replace(/\./g, "") || "$$$?";

  return {
    languages: languagesString,
    name,
    email,
    whatsapp: `${whatsappCountryCode} ${whatsappNumber}`,
    address: city[city.length - 1],
    vacancyInfo: `Pandape - ${vacancyInfoTruncated} - $ ${salary} COP (${salary.replace(
      /\./g,
      ""
    )})`,
    yearsOfExperience: experiencesAsString,
    educationInfo: educationAsString,
    salary,
  };
}
