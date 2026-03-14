import { create } from 'zustand'

export const useInstitutionStore = create((set) => ({
  name: 'A-Von Test School',
  logo: null,
  address: 'Kampala, Uganda',
  termStructure: 'trimester', // or 'semester'
  
  academicYears: [],
  terms: [],
  
  activeYear: null,
  activeTerm: null,

  setInstitution: (data) => set({
    name: data.name,
    logo: data.logo,
    address: data.address,
    termStructure: data.termStructure
  }),

  setAcademicData: (years, terms) => set({
    academicYears: years,
    terms: terms
  }),

  setActiveTerm: (year, term) => set({
    activeYear: year,
    activeTerm: term
  })
}))
