export default function copyToClipboard(data: Record<string, string>) {
  const textToCopy = `
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
