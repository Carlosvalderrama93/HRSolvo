import { useState } from "react";
import MainCandidateInfo from "./MainCandidateInfo";
import { Separator } from "../ui/separator";
import AnotherCandidateInfo from "./AnotherCandidateInfo";

export type UpdateCandidateField = <K extends keyof CandidateInfo>(
  key: K,
  value: Partial<CandidateInfo[K]>
) => void;

export type Categories =
  | "name"
  | "email"
  | "phone"
  | "salary"
  | "position"
  | "language"
  | "source"
  | "city";

export type ValuesStructure = { value1: string; value2?: string };

export type BasicStructure = {
  type: Categories;
  values: ValuesStructure[];
};

export type MainInfo = {
  name: BasicStructure;
  email: BasicStructure;
  phone: BasicStructure;
  city: BasicStructure;
};
export type AnotherInfo = {
  salary: BasicStructure;
  positionApplied: BasicStructure;
  languages: BasicStructure;
  source: BasicStructure;
  // processingDates: Date[];
};

export type CandidateInfo = {
  id: string;
  mainInfo: MainInfo;
  AnotherInfo: AnotherInfo;
};

const candidateInfo: CandidateInfo = {
  id: "1110246945",
  mainInfo: {
    name: {
      type: "name",
      values: [{ value1: "Carlos Alberto", value2: "Valderrama Barbosa" }],
    },

    email: {
      type: "email",
      values: [{ value1: "CarlosAlbertoValderramaBarbosa@gmail.com" }],
    },
    phone: {
      type: "phone",
      values: [{ value1: "318 601 8140", value2: "57" }],
    },
    city: { type: "city", values: [{ value1: "Bogotá", value2: "Colombia" }] },
  },
  AnotherInfo: {
    salary: {
      type: "salary",
      values: [{ value1: "1.000.000", value2: "2.000.000" }],
    },

    positionApplied: {
      type: "position",
      values: [{ value1: "Legal Counsel", value2: "Paralegal" }],
    },

    languages: {
      type: "language",
      values: [
        { value1: "B2", value2: "French" },
        { value1: "C1", value2: "English" },
      ],
    },
    source: {
      type: "source",
      values: [{ value1: "LinkedIn", value2: "2/2/2024" }],
    },
    // processingDates: [],
  },
};

export default function CandidateProfile() {
  const [candidate, setCandidate] = useState<CandidateInfo>(candidateInfo);

  function updateCandidateField<K extends keyof CandidateInfo>(
    key: K,
    value: Partial<CandidateInfo[K]>
  ) {
    setCandidate((prevCandidate) => {
      const currentField = prevCandidate[key];

      // Solo realiza el spread si el campo actual es un objeto
      if (typeof currentField === "object" && currentField !== null) {
        return {
          ...prevCandidate,
          [key]: {
            ...currentField,
            ...value,
          },
        };
      } else {
        // Si no es un objeto, simplemente sobrescribe el valor
        return {
          ...prevCandidate,
          [key]: value,
        };
      }
    });
  }

  return (
    <div className="bg-zinc-50 box-border gap-y-2 flex flex-col min-w-56 max-w-lg py-5">
      <MainCandidateInfo
        mainInfo={candidate.mainInfo}
        updateCandidateField={updateCandidateField}
      />
      <Separator className="my-1 w-4/5 self-center" />
      <AnotherCandidateInfo
        anotherInfo={candidate.AnotherInfo}
        updateCandidateField={updateCandidateField}
      />
      {/* <CandidateTabsSection /> */}
      {/* <CandidateStatusSection /> */}
      {/* <CandidateProcess /> */}
    </div>
  );
}
