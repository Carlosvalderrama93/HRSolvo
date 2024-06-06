export default function extractTextFromPage(): Record<string, string> {
  const name =
    document.querySelector(".font-3xl.lh-120.fw-600.text-capitalize")
      ?.textContent || "";
  const email = (
    document.querySelector('a[href^="mailto:"]')?.textContent || ""
  )
    .replace(/\n+/g, "")
    .trim();
  const whatsappFullText =
    document.querySelector(".js_WhatsappLink")?.textContent || "";
  const whatsappCountryCode = (whatsappFullText.match(/^\+?\d{1,3}/) || [
    "",
  ])[0];
  const whatsappNumber = whatsappFullText.replace(/^\+?\d{1,3}-/, "").trim();
  const address =
    document.querySelector(".my-10 .icon-container + div span")?.textContent ||
    "";

  const vacancyInfoElement = document.querySelector(".secondary-bar-title");
  const vacancyInfo = vacancyInfoElement?.textContent?.trim() || "";
  const vacancyInfoTruncated = vacancyInfo.split("Bilingual")[0] + "Bilingual"; // Keep only text before "Bilingual"

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
        .replace(/\s+/g, " ")
        .replace(":", "")
        .trim();

      return `${cleanedStudyTitle} ${duration}`;
    }
  );

  const educationAsString = educationInfo.join("; ");

  return {
    name,
    email,
    whatsapp: `${whatsappCountryCode} ${whatsappNumber}`,
    address,
    vacancyInfo: `Pandape - ${vacancyInfoTruncated}`,
    yearsOfExperience: experiencesAsString,
    educationInfo: educationAsString,
  };
}
