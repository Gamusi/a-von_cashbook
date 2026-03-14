import { IS_TAURI } from '../config/runtime'

/**
 * Handles document printing by abstracting between 
 * the browser's window.print() and Tauri's native print API.
 */
export async function printDocument(htmlOrUrl) {
  if (IS_TAURI) {
    try {
      // Tauri v2 standard for invoke
      const { invoke } = await import('@tauri-apps/api/core')
      return await invoke('print_document', { target: htmlOrUrl })
    } catch (err) {
      console.error('Tauri print failed, falling back to browser print:', err)
    }
  }

  // Fallback for development/web
  if (typeof htmlOrUrl === 'string' && htmlOrUrl.startsWith('http')) {
    const win = window.open(htmlOrUrl, '_blank')
    if (win) win.onload = () => win.print()
  } else {
    window.print()
  }
}
