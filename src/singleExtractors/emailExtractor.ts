function emailExtractor() {
  const email = (
    document.querySelector('a[href^="mailto:"]')?.textContent || ""
  )
    .replace(/\n+/g, "")
    .trim();

  return email;
}
