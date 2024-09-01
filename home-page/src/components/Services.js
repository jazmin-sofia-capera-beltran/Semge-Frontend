import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ServiceCard } from "./ServiceCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Services = () => {

  const services = [
    {
      title: "Mantenimiento preventivo",
      description: "Especializado para vehículos diésel",
      imgUrl: projImg1,
    },
    {
      title: "Mantenimiento correctivo",
      description: "Especializado para vehículos diésel",
      imgUrl: projImg2,
    },
    {
      title: "Sistema Mecanico",
      description: "Reparación y mantenimiento de motores, inyectores, bombas, compresores y transmisiones.",
      imgUrl: projImg3,
    },
    {
      title: "Sistema Neumatico",
      description: "Reparación y mantenimento de compresores, válvulas y más",
      imgUrl: projImg4,
    },
    {
      title: "Sistema Electrico",
      description: "Reparación y mantenimento con escáneres especializados, mantenimiento de baterías, y más.",
      imgUrl: projImg5,
    },
    {
      title: "Repuestos",
      description: "Suministramos los repuestos de acuerdo a las necesidades de nuestros clientes de forma ágil y oportuna",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="service" id="services">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Servicios</h2>
                <p>Explora nuestros servicios especializados en mantenimiento y reparación de vehículos diésel.</p>
                      <Row>
                        {
                          services.map((service, index) => {
                            return (
                              <ServiceCard
                                key={index}
                                {...service}
                                />
                            )
                          })
                        }
                      </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
