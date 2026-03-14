import { useState } from 'react'
import { printDocument } from '../services/printService'
import { toast } from 'react-hot-toast'

export function usePrint() {
  const [isPrinting, setIsPrinting] = useState(false)

  const handlePrint = async (target) => {
    setIsPrinting(true)
    const toastId = toast.loading('Preparing document for print...')
    
    try {
      await printDocument(target)
      toast.success('Print job sent', { id: toastId })
    } catch (err) {
      toast.error('Failed to print document', { id: toastId })
      console.error('Print Error:', err)
    } finally {
      setIsPrinting(false)
    }
  }

  return {
    handlePrint,
    isPrinting
  }
}
