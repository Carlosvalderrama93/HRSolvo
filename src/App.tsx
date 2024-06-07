import React, { useState, useEffect } from "react";
import extractTextFromPage from "./extracText";
import copyToClipboard from "./copyToClipboard";

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

  return (
    <div>
      <h1>Text Extractor</h1>
      <pre>{output}</pre>
    </div>
  );
};

export default App;
