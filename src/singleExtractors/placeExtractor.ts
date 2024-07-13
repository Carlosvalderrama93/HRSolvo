export default function placeExtractor() {
  const address =
    document.querySelector(".js_CandidateAddress")?.textContent ||
    "city not found";

  const city = address
    .trim()
    .split(/\s+|,|\./)
    .filter(Boolean);

  return city[city.length - 1];
}
