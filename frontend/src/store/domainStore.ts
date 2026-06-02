import { create } from "zustand";

import { Domain } from "../types/Domain";

interface DomainState {
  domains: Domain[];

  currentDomain: Domain | null;

  setDomains: (
    domains: Domain[]
  ) => void;

  setCurrentDomain: (
    domain: Domain
  ) => void;
}

export const useDomainStore =
  create<DomainState>((set) => ({
    domains: [],

    currentDomain: null,

    setDomains: (domains) =>
      set({
        domains,
      }),

    setCurrentDomain: (domain) =>
      set({
        currentDomain: domain,
      }),
  }));
