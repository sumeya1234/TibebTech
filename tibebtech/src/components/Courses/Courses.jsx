// import React from 'react'
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { courses } from '../../data/courses';

// const Courses = () => {
//   return (
//     <section className="py-5 bg-light">
//       <Container>
//         <h2 className="mb-4 text-center fw-bold">Featured Courses</h2>
//         <Row>
//         {courses.map((course) => (
//           <Col key={course.id} xs={12} md={4} className="mb-4">
//             <Card className="h-80 shadow-sm">
//             <Card.Img
//               variant="top"
//               src={`https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`}
//               alt={course.title}
//               onError={(e) => {
//                 e.target.src = `https://img.youtube.com/vi/${course.videoId}/hqdefault.jpg`;
//               }}
//             />
//               <Card.Body>
//                 <Card.Title>{course.title}</Card.Title>
//                 <Card.Text>{course.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//         </Row>
//       </Container>
//     </section>
//   )
// }

// export default Courses
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './courses.css';
import { featuredCourses } from '../../data/courses';

const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', offset: 120 });
  }, []);


  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Featured Courses</h2>
          <p className="lead text-muted">
            Discover our most popular courses designed to accelerate your learning journey
          </p>
        </div>
        
        <Row className="g-4">
          {featuredCourses.map((course, index) => (
            <Col key={course.id} xs={12} md={6} lg={4}>
              <Card 
                className="h-100 course-card shadow-sm rounded-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card.Img 
                  variant="top" 
                  src={course.image} 
                  alt={course.title}
                  className="course-image"
                />
                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    <span className={`badge ${course.level === 'Beginner' ? 'bg-success' : 'bg-warning'} mb-2`}>
                      {course.level}
                    </span>
                    <span className="badge bg-secondary ms-2">
                      {course.duration}
                    </span>
                  </div>
                  <Card.Title className="fw-semibold">{course.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {course.description}
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">
                    Start Learning
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
          <Button variant="outline-primary" size="lg">
            View All Courses
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Courses;
