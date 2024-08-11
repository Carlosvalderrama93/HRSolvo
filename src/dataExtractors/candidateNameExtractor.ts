export default function candidateNameExtractor(docu: Document): string {
  const candidateName = docu
    .querySelector("#HeaderInfoContainer .match-name.mt-0.d-flex div")
    ?.textContent?.trim();
  return candidateName ?? "Candidate name:";
}


// // import candidateNameExtractor from "../dataExtractors/candidateNameExtractor";
// import emailExtractor from "../dataExtractors/emailExtractor";
// import cellphoneExtractor from "../dataExtractors/cellphoneExtractor";
// import educationExtractor from "../dataExtractors/educationExtractor";
// import languagesExtractor from "../dataExtractors/languagesExtractor";
// import placeExtractor from "../dataExtractors/placeExtractor";
// import positionAppliedExtractor from "../dataExtractors/positionAppliedExtractor";
// import workExperienceExtractor from "../dataExtractors/workExperienceExtractor";
// import type { Candidate } from "../store/candidatesStore";
// import salaryExtractor from "../dataExtractors/salaryExtractor";

// export default function extractCandidateData(): Candidate {
//   const docu = document;

//   // const name = candidateNameExtractor(docu);
//   const email = emailExtractor(docu);
//   const phone = cellphoneExtractor(docu);
//   const educationAsString = educationExtractor(docu);
//   const languages = languagesExtractor(docu);
//   const city = placeExtractor(docu);
//   const salary = salaryExtractor(docu);
//   const positionApplied = positionAppliedExtractor(docu, salary);
//   const experiencesAsString = workExperienceExtractor(docu);

//   const candidate = {
//     languages,
//     name: "Name",
//     email,
//     whatsapp: phone,
//     address: city[city.length - 1],
//     vacancyInfo: `Pandape - ${positionApplied} - $ ${salary} COP (${salary.replace(
//       /\./g,
//       ""
//     )})`,
//     yearsOfExperience: experiencesAsString,
//     educationInfo: educationAsString,
//     salary,
//   };

//   debugger;
//   return candidate;
// }
