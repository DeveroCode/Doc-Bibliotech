import CardTerminal from "../../Components/Cards/CardTerminal";
import NextPage from "../../Components/NextPage";
import Title from "../../Components/Title";

export default function Libro() {
    return (
        <div>
            <Title text="Página principal de libros" />

            <p className="spacing">
                Este componente representa la vista principal del módulo de libros en el sistema administrativo de la biblioteca. Corresponde directamente con el método index() del LibroController en <strong className="text-red-600">Laravel 10</strong>.
            </p>

            <CardTerminal title="Index - Libro Controller">
                <pre className="text-sm overflow-x-auto">
                    <code>{`
public function index()
{
    $user = Auth::user();

    if ($user->rol == 1) {
        return view('administrator.index');
    } elseif ($user->rol == 2) {
        return redirect()->route('admin.index');
    }
}
                    `}</code>
                </pre>
            </CardTerminal>

            <section className="mt-10">
                <Title text="Panel Administrador Bibliotecario" as="h2" />

                <p className="spacing">
                    Esta vista corresponde a la página de inicio del panel de administración, diseñada exclusivamente para <strong>bibliotecarios</strong>.
                    El acceso a esta sección está restringido únicamente a usuarios con el rol de bibliotecario.
                    Para garantizar esta restricción, se implementa una estructura de control de acceso que combina las&nbsp;
                    <strong className="text-red-600">
                        <a href="http://laravel.com/docs/11.x/structure#the-policies-directory" target="_blank" rel="noopener noreferrer">
                            Policies
                        </a>
                    </strong>
                    &nbsp;y los&nbsp;
                    <strong className="text-red-600">
                        <a href="https://laravel.com/docs/11.x/middleware#main-content" target="_blank" rel="noopener noreferrer">
                            Middlewares
                        </a>
                    </strong>.
                    Esta configuración evita que usuarios con roles distintos puedan acceder a esta vista, garantizando la seguridad y la integridad del sistema.
                </p>

                <p className="spacing">
                    Dentro de esta vista se incluyen tres componentes clave que facilitan la interacción y funcionalidad del panel para el bibliotecario:
                    <strong> Cards Biblio, ShowCharts, ShowActivities </strong>.
                </p>

                <CardTerminal title="Index - Libro Controller">
                    <code>
                        {`
<CardBiblio />    {/* Muestra información relevante para el bibliotecario */}
<ShowCharts />   {/* Presenta estadísticas y datos visuales de la biblioteca */}
<ShowActivities /> {/* Muestra actividades recientes realizadas por otros bibliotecarios */}
      `}
                    </code>
                </CardTerminal>
            </section>

            <hr className="border-gray-600 mt-10" />

            <NextPage url="start/libros/CRUD/crear" title="Creación de libros" />
        </div>
    )
}
