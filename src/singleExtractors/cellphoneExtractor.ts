import { removeDuplicates } from "./educationalExtractor";

// Función para extraer y formatear números de teléfono de elementos HTML
export default function cellphoneExtractor(): string {
  const phoneElements = document.querySelectorAll(".js_WhatsappLink");

  if (!phoneElements.length) return "+57 ";

  const extractedNumbers: string[] = [];

  phoneElements.forEach((phone) => {
    const rawPhone = phone.textContent?.trim() || "";

    if (rawPhone) {
      const codeCountry = (rawPhone.match(/^\+?\d{1,3}/) || [""])[0];
      const cleanPhone = rawPhone.replace(/^\+?\d{1,3}-/, "").trim();
      const finalPhone = `+${codeCountry} ${cleanPhone}`;
      extractedNumbers.push(finalPhone);
    }
  });

  const cellphone = removeDuplicates(extractedNumbers); // Elimina números duplicados

  return cellphone;
}
