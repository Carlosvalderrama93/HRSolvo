export default function workExperienceExtractor(docu: Document) {
  const experienceElements = docu.querySelectorAll(
    "#ResumeExperiences .row.no-gutters.mb-20.js_aggregateContainer"
  );

  const experiences = Array.from(experienceElements).map(
    (experienceElement) => {
      const jobTitle = experienceElement.querySelector(
        ".font-md.d-flex.align-items-center strong"
      )?.textContent;

      const organization = experienceElement.querySelector(
        ".col-7 div div div span"
      )?.textContent;

      const duration = experienceElement
        .querySelector(".c-md.fw-400.lh-140 span")
        ?.textContent?.trim()
        .replace("(", "")
        .replace(")", "")
        .replace("Meses", "months")
        .replace("Mes", "month")
        .replace("Años", "years")
        .replace("Año", "year");

      return `${duration} in ${organization} as ${jobTitle}`;
    }
  );

  const WorkExperience = experiences.join(";");

  return WorkExperience;
}
