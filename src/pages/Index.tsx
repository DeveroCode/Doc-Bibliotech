import terminal from '../assets/svg/terminal.svg'
import { copyToClip } from '../utils';
import { Link } from 'react-router-dom';

export default function Index() {

    return (
        <div className="w-2/3 mx-auto space-y-2 mt-32">
            <h1 className="text-4xl font-bold text-center capitalize">
                El nuevo administrado de la biblioteca para la comudidad del <strong className='text-black'>ITSNCG</strong
                >
            </h1>
            <span className="block mt-2 text-center w-2/3 mx-auto text-gray-300"
            >Descubre una nueva forma de aprender con una interfaz dinámica e
                intuitiva. ¡Prueba ya nuestro modelo avanzado de administración!</span
            >

            <section className="flex flex-col items-center justify-between pt-5">
                <Link to="/start"
                    className="rounded-full text-center bg-white py-2 px-3 w-80 text-blue-500 font-semibold text-lg my-5"
                >Iniciar!</Link>

                <button
                    className="p-5 bg-secondary rounded-md w-80 text-center text-sm flex items-center gap-2 cursor-pointer hover-lift"
                    onClick={() => copyToClip('command')}
                >
                    <img src={terminal} alt="icon terminal" className="w-5" />
                    <p id="command">gh repo clone DeveroCode/Bibliotech</p>
                </button>
            </section>
        </div>
    )
}
