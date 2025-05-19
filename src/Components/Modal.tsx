import type { Dispatch, SetStateAction } from "react"

type ModalProps = {
    isOpen: boolean,
    text: string,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    imagen: string
}

export default function Modal({ isOpen, imagen, setIsOpen, text }: ModalProps) {
    if (!isOpen) return null
    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={() => setIsOpen(false)} />

            <div
                className="fixed inset-0 flex justify-center items-center z-50" aria-modal="true" role="dialog">
                <div className="bg-primary rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-3xl font-bold"
                        aria-label="Cerrar modal"
                    >
                        &times;
                    </button>

                    <p className="text-center py-3 text-semibold">{text}</p>                

                    <div className="flex flex-wrap justify-center gap-4">
                        <img src={imagen}
                            className="max-h-[500px] object-contain rounded"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
