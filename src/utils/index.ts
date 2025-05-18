import { toast } from 'react-toastify'


export function copyToClip(elementId: string) {
    const el = document.getElementById(elementId)
    if (el) {
        navigator.clipboard.writeText(el.innerText)
        toast.success('Copiado al portapapeles ✅')
    } else {
        toast.error('No se pudo copiar el texto')
    }
}