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
  lastCandidate: Candidate | undefined;
  addCandidate: (candidate: Candidate) => void;
  removeCandidate: (index: number) => void;
  updateCandidate: (index: number, candidate: Partial<Candidate>) => void;
};

export const useCandidatesStore = create<CandidateState>((set) => ({
  candidates: [],
  lastCandidate: undefined,
  addCandidate: (candidate: Candidate) =>
    set((state) => ({
      candidates: [...state.candidates, candidate],
      lastCandidate: candidate,
    })),
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
}));
