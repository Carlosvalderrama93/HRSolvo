type Xyz = {
  languages: string;
  name: string;
  email: string;
  whatsapp: string;
  address: string;
  vacancyInfo: string;
  yearsOfExperience: string;
  educationInfo: string;
  salary: string;
  url?: string;
};
export default function copyToClipboard(data: Xyz) {
  const textToCopy = `
  ${data.url}
${data.vacancyInfo}

${data.languages}


${data.educationInfo}


${data.yearsOfExperience}

${data.name}
${data.email}
${data.whatsapp}
${data.address}, Colombia
`;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => console.log("Text copied to clipboard"))
    .catch((error) =>
      console.error("Could not copy text to clipboard:", error)
    );
}
