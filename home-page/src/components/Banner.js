import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Michi_azul.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [text, setText] = useState(''); // Estado para almacenar el texto que se va mostrando
  const [delta, setDelta] = useState(150); // Intervalo entre caracteres (velocidad de escritura)
  const toRotate = "SEMGEDIESEL S.A.S"; // Texto que se va a escribir
  const period = 60000; // Tiempo de espera después de que se escribe el texto completo

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta); // Intervalo que llama a la función `tick` cada `delta` milisegundos

    return () => clearInterval(ticker); // Limpia el intervalo cuando el componente se desmonta
  }, [text]); // Ejecuta este efecto cada vez que `text` cambia

  const tick = () => {
    const updatedText = toRotate.substring(0, text.length + 1); // Añade el siguiente carácter al texto

    setText(updatedText); // Actualiza el estado con el nuevo texto

    if (updatedText === toRotate) {
      setDelta(period); // Si el texto completo se ha escrito, espera un periodo largo
    } else {
      setDelta(150); // Si aún falta por escribir, mantiene el intervalo de escritura
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* Elimina la clase `txt-rotate` o ajusta para eliminar cualquier animación de cursor */}
                  <h1><span className="text-no-cursor">{text}</span></h1>
                  <p>Combinamos experiencia y tecnología de última generación para ofrecer servicios automotrices diésel excepcionales. Realizamos diagnóstico, mantenimiento preventivo y correctivo de motores diésel, turboalimentadores y sistemas de inyección, con la más alta precisión.</p>
                  <button onClick={() => console.log('connect')}>Obtenga una cotización <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
