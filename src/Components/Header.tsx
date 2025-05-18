import logo from '../assets/logo.png'
import yt from '../assets/svg/youtube.svg'
import github from '../assets/svg/github.svg'
import sparcles from '../assets/svg/sparcles.svg'

export default function Header() {
    return (
        <header className="py-3 px-12 border-b border-gray-500 bg-gray-900/40">
            <section className="flex items-center justify-between max-w-7xl mx-auto">
                <div
                    className="flex items-center gap-2 hover-lift cursor-pointer"
                >
                    <img src={logo} alt="Logo" className="w-8" />
                    <h1 className="text-2xl font-bold text-white">DeveroCode</h1>
                </div>

                <form action="" className="relative w-full max-w-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197M15.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        ></path>
                    </svg>

                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Buscar"
                        className="w-full py-2 pl-10 pr-4 rounded-md bg-secondary border border-gray-500 text-white shadow-sm focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
                    />
                </form>

                <nav className="flex items-center gap-4">
                    <a
                        href="https://github.com/DeveroCode"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={github} alt="" className="w-5" />
                    </a>
                    <a
                        href="https://github.com/DeveroCode"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={yt} alt="" className="w-8" />
                    </a>

                    <hr className="w-px h-6 bg-white" />

                    <button>
                        <img src={sparcles} alt="" className="w-6" />
                    </button>

                </nav>
            </section>
        </header>
    )
}
