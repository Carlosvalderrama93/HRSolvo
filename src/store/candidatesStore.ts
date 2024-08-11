import { create } from "zustand";

export type Candidate = {
  languages: string;
  name: string;
  email: string;
  whatsapp: string;
  address: string;
  vacancyInfo: string;
  yearsOfExperience: string;
  educationInfo: string;
  salary: string;
  url?: string;
};

type CandidateState = {
  candidates: Candidate[];
  addCandidate: (candidate: Candidate) => void;
  removeCandidate: (index: number) => void;
  updateCandidate: (index: number, candidate: Partial<Candidate>) => void;
  getLastCandidate: () => Candidate | undefined;
};

export const useCandidatesStore = create<CandidateState>((set, get) => ({
  candidates: [],
  addCandidate: (candidate: Candidate) => {
    set((state) => ({
      candidates: [...state.candidates, candidate],
    }));
  },
  removeCandidate: (index) =>
    set((state) => ({
      candidates: state.candidates.filter((_, i) => i !== index),
    })),
  updateCandidate: (index, candidate) =>
    set((state) => ({
      candidates: state.candidates.map((c, i) =>
        i === index ? { ...c, ...candidate } : c
      ),
    })),
  getLastCandidate: () => {
    const { candidates } = get(); // Access state using `get`
    return candidates.length > 0
      ? candidates[candidates.length - 1]
      : undefined;
  },
}));
