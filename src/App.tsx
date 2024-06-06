import React, { useState, useEffect } from "react";
import extractTextFromPage from "./extracText";

const App: React.FC = function () {
  const [output, setOutput] = useState<string>("");

  useEffect(() => {
    handleExtractText();
  }, []);

  function handleExtractText() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0]?.id) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            func: extractTextFromPage,
          },
          function (results) {
            if (results && results[0] && results[0].result) {
              const output = results[0].result;
              setOutput(JSON.stringify(output, null, 2));
              copyToClipboard(output);
            }
          }
        );
      }
    });
  }

  function copyToClipboard(data: Record<string, string>) {
    const textToCopy = `
      ${data.vacancyInfo}
      
      ${data.yearsOfExperience}
      
      ${data.educationInfo}

      ${data.name}
      ${data.email}
      ${data.whatsapp}
`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => console.log("Text copied to clipboard"))
      .catch((error) =>
        console.error("Could not copy text to clipboard:", error)
      );
  }

  return (
    <div>
      <h1>Text Extractor</h1>
      <pre>{output}</pre>
    </div>
  );
};

export default App;
