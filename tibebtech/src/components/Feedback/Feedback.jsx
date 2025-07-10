import { useEffect } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './feedback.css';
import { useTheme } from '../../context/ThemeContext';
import { testimonials } from '../../data/feedback';

const Feedback = () => {
  const { darkMode } = useTheme();
  
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', offset: 100 });
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i 
        key={index} 
        className={`bi ${index < rating ? 'bi-star-fill' : 'bi-star'} star-icon`}
      ></i>
    ));
  };

  const getOverallStats = () => {
    const totalReviews = testimonials.length;
    const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / totalReviews).toFixed(1);
    const fiveStarCount = testimonials.filter(t => t.rating === 5).length;
    const fourStarCount = testimonials.filter(t => t.rating === 4).length;
    
    return { totalReviews, averageRating, fiveStarCount, fourStarCount };
  };

  const stats = getOverallStats();

  return (
    <section className={`py-5 ${darkMode ? 'bg-secondary text-light' : 'bg-light'}`}>
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mb-3">What Our Students Say</h2>
          <p className="lead text-muted mb-4">
            Don't just take our word for it - hear from students who have transformed their careers
          </p>
          
          {/* Overall Stats */}
          <div className="stats-container mx-auto mb-4" data-aos="fade-up" data-aos-delay="100">
            <Row className="text-center">
              <Col md={3}>
                <div className="stat-item">
                  <h3 className="text-primary fw-bold">{stats.averageRating}</h3>
                  <div className="mb-2">
                    {renderStars(Math.round(stats.averageRating))}
                  </div>
                  <p className="text-muted small">Average Rating</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="stat-item">
                  <h3 className="text-primary fw-bold">{stats.totalReviews}+</h3>
                  <p className="text-muted small">Student Reviews</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="stat-item">
                  <h3 className="text-success fw-bold">{stats.fiveStarCount}</h3>
                  <p className="text-muted small">5-Star Reviews</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="stat-item">
                  <h3 className="text-warning fw-bold">98%</h3>
                  <p className="text-muted small">Satisfaction Rate</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={testimonial.id} xs={12} md={6} lg={4}>
              <Card 
                className={`h-100 testimonial-card shadow-sm rounded-4 ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <Card.Body className="d-flex flex-column">
                  {/* Rating */}
                  <div className="rating-section mb-3">
                    <div className="stars mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <small className="text-muted">
                      <i className="bi bi-clock me-1"></i>
                      {testimonial.completionDate}
                    </small>
                  </div>

                  {/* Feedback */}
                  <blockquote className="feedback-text flex-grow-1 mb-4">
                    <p className="text-muted fst-italic">
                      "{testimonial.feedback}"
                    </p>
                  </blockquote>

                  {/* Student Info */}
                  <div className="student-info">
                    <div className="d-flex align-items-center mb-2">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="avatar rounded-circle me-3"
                      />
                      <div>
                        <h6 className="mb-0 fw-semibold">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                    <Badge bg="primary" className="course-badge">
                      <i className="bi bi-play-circle me-1"></i>
                      {testimonial.course}
                    </Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
          <div className="cta-section">
            <h4 className="fw-bold mb-3">Ready to Join Thousands of Successful Students?</h4>
            <p className="text-muted mb-4">Start your learning journey today and see why our students love TibebTech</p>
            <button className="btn btn-primary btn-lg px-4">
              <i className="bi bi-rocket-takeoff me-2"></i>
              Start Learning Now
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Feedback;