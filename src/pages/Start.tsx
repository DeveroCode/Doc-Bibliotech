import CardInformation from "../Components/Cards/CardInformation";
import CardTerminal from "../Components/Cards/CardTerminal";
import NextPage from "../Components/NextPage";

export default function Start() {
  return (
    <div className="max-w-screen-md">
      <h1 className="text-white font-semibold text-3xl">Introducción</h1>

      <CardInformation />

      <main className="mt-10">
        <h2 className="title">¿Cómo empezar?</h2>

        <p>
          Comienza clonando nuestro repositorio, que contiene todas las ramas
          existentes hasta este momento, desde la versión 1.0.0 hasta la 2.0.0.
        </p>

        <CardTerminal title="Iniciando código" copyId="git">
          <p id="git">$ gh repo clone DeveroCode/Bibliotech</p>
        </CardTerminal>

        <p className="mt-2">
          Una vez clonado el repositorio, abre la carpeta con tu editor de texto
          favorito. Dentro del editor, abre una terminal nueva y empieza
          instalando las dependencias necesarias de{" "}
          <strong className="text-red-900">Composer</strong> y{" "}
          <strong className="text-emerald-700">Node.js</strong>.
        </p>

        <CardTerminal title="Composer PHP" copyId="composer">
          <p id="composer">$ composer install</p>
        </CardTerminal>
        <CardTerminal title="Node.js" copyId="node">
          <p id="node">$ npm install</p>
        </CardTerminal>


        <h3 className="title">Variables de entorno y APP_KEY</h3>

        <p>
          Laravel (el sistema en el que está construido este proyecto) utiliza un archivo especial llamado <strong>.env</strong> para saber cómo debe comportarse en tu computadora.
          Este archivo contiene configuraciones importantes como la conexión a la base de datos, la URL del proyecto y la clave de seguridad de la aplicación.
        </p>

        <p className="mt-4">
          No es necesario modificar todas las líneas del archivo <strong>.env</strong>, solo algunas específicas. Para configurarlo correctamente, sigue estos pasos:
        </p>

        <CardTerminal title="Crear archivo .env y configurar conexión a base de datos" copyId="env">
          <p id="env">
            /** Variables necesarias para conectar tu base de datos */ <br />
            DB_CONNECTION=mysql <br />
            DB_HOST=127.0.0.1 <span className="text-gray-400"># Dirección de tu servidor MySQL</span> <br />
            DB_PORT=3306 <span className="text-gray-400"># Puerto por defecto de MySQL</span> <br />
            DB_DATABASE=example <span className="text-gray-400"># Nombre de tu base de datos</span> <br />
            DB_USERNAME=root <span className="text-gray-400"># Usuario de acceso a la base</span> <br />
            DB_PASSWORD=example <span className="text-gray-400"># Contraseña del usuario</span>
          </p>
        </CardTerminal>

        <p className="mt-4">
          Después de configurar estas variables, es importante generar una clave de seguridad única para tu aplicación. Esta clave se utiliza para encriptar información sensible como contraseñas o tokens de sesión.
        </p>

        <CardTerminal title="Generar APP_KEY de Laravel" copyId="keygen">
          <p id="keygen">$ php artisan key:generate</p>
        </CardTerminal>

        <p className="mt-4">
          Si todo ha salido bien y no hubo errores, tu archivo <strong>.env</strong> ahora incluirá una nueva línea generada automáticamente por Laravel con la clave de seguridad <strong>APP_KEY</strong>.
        </p>

        <CardTerminal title="Ejemplo de archivo .env con APP_KEY generada">
          APP_NAME=Biblioteca <span className="text-gray-400"># Nombre de la aplicación</span> <br />
          APP_ENV=local <span className="text-gray-400"># Entorno de desarrollo</span> <br />
          APP_KEY=base64:eH6QV55n9Fc7AV6zBhD/TWDK7jqqTMja7+zVAP8yThM= <span className="text-gray-400"># Clave de seguridad generada</span> <br />
          APP_DEBUG=true <span className="text-gray-400"># Muestra errores detallados (útil en desarrollo)</span> <br />
          APP_URL=http://localhost <span className="text-gray-400"># URL base de la app en tu entorno local</span>
        </CardTerminal>
      </main>

      <hr className="border-gray-600 mt-10" />

      <NextPage title="Libros" url="start/libros" />
    </div>
  );
}
