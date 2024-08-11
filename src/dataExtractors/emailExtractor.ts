export default function emailExtractor(docu: Document) {
  const email = (docu.querySelector('a[href^="mailto:"]')?.textContent || "")
    .replace(/\n+/g, "")
    .trim();

  return email;
}
