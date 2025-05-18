import exclamation from '../../assets/svg/exclamation.svg'


export default function CardInformation() {
  return (
    <div className="rounded-md bg-gray-900/50 px-6 py-3 mt-10">
    <div className="flex gap-2 items-start">
      <img src={exclamation} alt="Ícono de advertencia" className="w-5" />
      <strong className="text-sm">
        Estás visualizando la versión más reciente del código – <span className="font-semibold">Bibliotech</span>
      </strong>
    </div>

    <ul className="mt-2 list-disc px-12 text-sm text-gray-300">
      <li>Eliminación de código innecesario.</li>
      <li>Alertas y validaciones en tiempo real.</li>
      <li>Corrección de errores al solicitar y actualizar préstamos.</li>
    </ul>
  </div>
  )
}
