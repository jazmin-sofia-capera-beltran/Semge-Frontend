// Importa funciones y componentes necesarios desde React y otros módulos.
import { useState, useEffect } from "react"; // useState y useEffect son hooks de React para manejar estados y efectos secundarios.
import { Navbar, Nav, Container } from "react-bootstrap"; // Importa componentes de react-bootstrap para la barra de navegación y el contenedor.
import logo from '../assets/img/Logo.png'; // Importa el logo de la barra de navegación.
import { HashLink } from 'react-router-hash-link'; // Importa HashLink para manejar enlaces que incluyan hash (#) en las rutas.
import {
  BrowserRouter as Router // Importa BrowserRouter de react-router-dom para manejar la navegación de la aplicación.
} from "react-router-dom";

// Define el componente NavBar.
export const NavBar = () => {

  // Define el estado `activeLink` para manejar el enlace activo en la barra de navegación. Inicialmente es 'home'.
  const [activeLink, setActiveLink] = useState('home');
  // Define el estado `scrolled` para manejar si la página ha sido desplazada. Inicialmente es false.
  const [scrolled, setScrolled] = useState(false);

  // useEffect se usa para agregar un evento de desplazamiento (scroll) cuando el componente se monta.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) { // Si el usuario se desplaza más de 50 píxeles, cambia `scrolled` a true.
        setScrolled(true);
      } else {
        setScrolled(false); // Si el desplazamiento es menor a 50 píxeles, cambia `scrolled` a false.
      }
    }

    window.addEventListener("scroll", onScroll); // Añade el evento `scroll` al objeto `window`.

    // Limpia el evento `scroll` cuando el componente se desmonte.
    return () => window.removeEventListener("scroll", onScroll);
  }, []) // El arreglo vacío indica que este efecto se ejecuta solo una vez, después de que el componente se monte.

  // Función para actualizar el enlace activo en la barra de navegación.
  const onUpdateActiveLink = (value) => {
    setActiveLink(value); // Cambia el estado `activeLink` al valor proporcionado.
  }

  // El componente retorna el JSX que define la estructura visual de la barra de navegación.
  return (
    <Router> {/* Envoltorio de Router para manejar la navegación. */}
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}> {/* La clase del Navbar cambia si `scrolled` es true. */}
        <Container> {/* Un contenedor de react-bootstrap para alinear los elementos dentro del Navbar. */}
          <Navbar.Brand href="/"> {/* El logo de la marca que redirige a la página principal. */}
          <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> {/* Botón para desplegar el menú en pantallas pequeñas. */}
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav"> {/* Contenedor para los enlaces de navegación y elementos de la barra. */}
            <Nav className="ms-auto"> {/* Los enlaces de navegación se alinean a la derecha con la clase `ms-auto`. */}
              {/* Cada Nav.Link tiene una clase dinámica que depende de si es el enlace activo o no. */}
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
              <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Servicios</Nav.Link>
            </Nav>
            <span className="navbar-text"> {/* Contenedor para el botón de "Contactenos". */}
              <HashLink to='#connect'> {/* Enlace con hash que lleva a la sección "Contactenos" en la página. */}
                <button className="vvd"><span>Contactenos</span></button> {/* Botón con el texto "Contactenos". */}
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
