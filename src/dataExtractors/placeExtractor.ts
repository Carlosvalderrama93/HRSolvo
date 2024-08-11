export default function placeExtractor(docu: Document) {
  const address =
    docu.querySelector(".js_CandidateAddress")?.textContent || "city not found";

  const city = address
    .trim()
    .split(/\s+|,|\./)
    .filter(Boolean);

  return city[city.length - 1];
}
