import "./style.css";

import { Link } from "react-router-dom";
//import ThemeSwitcher from "../inputs/ThemeSwitcher";

const Cookies = () => {
  return (
    <div className="Cookies">
      <h1>Política de Cookies</h1>
      <h2>Cookies Operativas</h2>

      <p>
        Utilizamos cookies y herramientas similares (conjuntamente, “cookies”)
        para los fines descritos a continuación.
      </p>

      <p>
        1.Reconocer cuándo te registras para usar nuestros servicios.
        2.Reconocerte como miembro de Retrotech y ofrecerte otras
        funcionalidades y servicios personalizados. 3.Mostrar funcionalidades,
        productos y servicios que podrían ser de tu interés, incluidos los
        anuncios en nuestros servicios si son de productos y servicios
        disponibles en Retrotech. 4.Mantener un registro de los productos
        guardados en tu cesta. 5.Prevenir actividades fraudulentas. 6.Mejorar la
        seguridad. 7.Mantener un registro de tus preferencias, como el idioma.
      </p>
      <p>
        También utilizamos cookies para entender cómo usan los clientes nuestros
        servicios y así poder mejorarlos. Por ejemplo, usamos cookies para
        llevar a cabo investigaciones y análisis para mejorar el contenido, los
        productos y los servicios de Retrotech, y para medir y entender el
        funcionamiento de nuestros servicios.
      </p>
      <p>
        Cookies publicitarias: También usamos cookies para ofrecer ciertos tipos
        de anuncios, incluidos los de aquellos productos y servicios que no
        están disponibles en Retrotech, y otros anuncios relevantes para tus
        intereses. Terceros autorizados también pueden utilizar cookies cuando
        interactúas con los servicios de Retrotech. Estos terceros incluyen
        motores de búsqueda, proveedores de servicios de medición y analíticos,
        redes sociales y compañías de publicidad. Los terceros utilizan cookies
        cuando proporcionan contenidos publicitarios, incluidos anuncios
        relevantes para tus intereses, para medir la efectividad de sus anuncios
        y para prestar servicios por cuenta de Retrotech.
      </p>

      <h2>Información adicional</h2>

      <p>
        Las cookies operativas permanecerán en tu navegador durante 13 meses
        desde tu última visita a nuestros servicios, excepto las cookies
        utilizadas para recordar tus preferencias de privacidad, que podrán
        permanecer en tu navegador hasta 5 años. Las demás cookies permanecen en
        tu navegador durante 13 meses desde que nos prestas tu consentimiento
        para utilizarlas. Para gestionar las cookies, visita nuestra página de
        Preferencias de Cookies. Aplicaremos tus preferencias de cookies al
        servicio de Retrotech y al navegador en el que establezcas tus
        preferencias, y a cualquier otro en el que inicies sesión. Si no inicias
        sesión, es posible que tengamos que preguntarte de nuevo por tus
        preferencias. Si lo prefieres, consulta en los ajustes de tu navegador
        cómo evitar que éste acepte cookies nuevas, cómo configurar tu navegador
        para que te notifique cuando reciba una cookie nueva, cómo deshabilitar
        y eliminar las cookies, y cuándo caducarán las cookies. Las cookies
        operativas te permitirán aprovechar algunas de las funcionalidades
        esenciales de Retrotech. Si bloqueas o rechazas de cualquier otra forma
        cookies operativas a través de los ajustes de tu navegador, es posible
        que algunas funcionalidades y servicios no funcionen. Por ejemplo, no
        podrás añadir elementos a tu cesta, tramitar pedidos o usar cualquier
        servicio de Retrotech que requiera que inicies sesión. Es posible que
        debas ajustar manualmente algunas de tus preferencias cada vez que
        utilices nuestros servicios. Consulta nuestra{" "}
        <Link to={"/privacy"} style={{ color: "black" }}>
          Política de privacidad
        </Link>{" "}
        para más información sobre los tipos de información que recabamos.
      </p>
    </div>
  );
};

export default Cookies;
