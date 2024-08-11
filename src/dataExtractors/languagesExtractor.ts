export default function languagesExtractor(docu: Document) {
  const languagesEl = docu.querySelectorAll(
    "#ResumeLanguagesContainer div div div .js_tagText.lh-100.text-break-word "
  );
  const languagesList = Array.from(languagesEl).reduce<string[]>((acc, crr) => {
    if (typeof crr.textContent === "string") acc.push(crr.textContent.trim());
    return acc;
  }, []);

  // Convertir el array resultante en una cadena de texto separada por " - "
  const languages = languagesList.join(" - ");

  return languages;
}
