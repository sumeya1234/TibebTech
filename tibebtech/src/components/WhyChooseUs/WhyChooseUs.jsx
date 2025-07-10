import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './whychooseus.css';  
import { useTheme } from '../../context/ThemeContext';

const WhyChooseUs = () => {
  const { darkMode } = useTheme();
  
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', offset : 100 });
  }, []);

  const benefits = [
    {
      title: "Short & Practical Courses",
      description: "Learn only what matters. Every lesson is focused and actionable.",
      icon: "bi-lightning-charge",
    },
    {
      title: "Self-Paced Learning",
      description: "Study anytime, anywhere. No deadlines, just progress.",
      icon: "bi-clock-history",
    },
    {
      title: "Free & Accessible",
      description: "All courses are 100% free and beginner-friendly.",
      icon: "bi-unlock",
    },
  ];

  return (
    <section className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
      <Container>
        <h2 className="text-center mb-4 fw-bold">Why Learn With Us?</h2>
        <Row className="g-4">
          {benefits.map((item, index) => (
            <Col key={index} xs={12} md={4}>
              <Card
                className={`h-100 text-center shadow-sm rounded-4 ${darkMode ? 'bg-secondary text-light border-secondary' : ''}`}
                data-aos="fade-up"
              >
                <Card.Body>
                  <i className={`bi ${item.icon} fs-1 text-primary mb-3`}></i>
                  <Card.Title className="fw-semibold">{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
