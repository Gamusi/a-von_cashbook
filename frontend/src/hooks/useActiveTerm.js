import { useInstitutionStore } from '../store/institutionStore'

export function useActiveTerm() {
  const activeYear = useInstitutionStore(s => s.activeYear) || '2025'
  const activeTerm = useInstitutionStore(s => s.activeTerm) || 'Term 1'
  const termStructure = useInstitutionStore(s => s.termStructure)

  return {
    year: activeYear,
    term: activeTerm,
    termLabel: `${activeYear} — ${activeTerm}`,
    termStructure
  }
}
