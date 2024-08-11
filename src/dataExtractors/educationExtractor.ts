export default function educationExtractor(docu: Document) {
  const educationElements = docu.querySelectorAll(
    "#ResumeStudies .row.no-gutters.mb-20.js_aggregateContainer"
  );

  const educationList = new Set<string>();

  Array.from(educationElements).forEach((educationEl) => {
    const rawTitleEducation = educationEl
      .querySelector("#DivStudiesContainer strong")
      ?.textContent?.trim();

    if (!rawTitleEducation) return "education field";
    // Eliminar palabras duplicadas en el título de estudio
    const cleanedTitleEducation = removeDuplicates(rawTitleEducation);

    const durationRaw = educationEl.querySelector(".c-md.fw-400.lh-140 span");
    const duration = durationRaw?.textContent?.trim() || "";

    // Formatear y limpiar el título de estudio
    let titleEducation = cleanedTitleEducation
      .replace("Carrera Profesional", "")
      .replace("Carrera técnica", "")
      .replace("Postgrado /", "")
      .replace("Universidad /", "Bachelor degree")
      .replace("Licenciatura", "")
      .replace("Bachillerato / Educación Media", "High School")
      .replace(/\s+/g, " ")
      .replace("Carrera técnica Técnica Profesional", "College")
      .replace(":", "")
      .trim();

    // Crear la cadena única de información educativa y agregar al conjunto
    const educationInfo = `${titleEducation} ${duration}`;
    educationList.add(educationInfo);
  });

  // Convertir el conjunto a un arreglo y luego a cadena con saltos de línea
  const education = Array.from(educationList).reverse().join("\n ");

  return education;
}

// Función para eliminar palabras duplicadas en un texto
// Función genérica para eliminar elementos duplicados en un arreglo o cadena
export function removeDuplicates<T>(elements: T[] | string): string {
  if (typeof elements === "string") {
    const words = elements.split(/\s+/); // Divide la cadena en palabras
    const uniqueWords = new Set(words); // Utiliza un conjunto para eliminar duplicados
    return [...uniqueWords].join(" "); // Une las palabras únicas de nuevo en una cadena
  } else {
    const uniqueElements = new Set(elements); // Utiliza un conjunto para eliminar duplicados
    return Array.from(uniqueElements).join("\n"); // Convierte el conjunto a un arreglo
  }
}
