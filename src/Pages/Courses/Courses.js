import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseCard from '../../CourseCard/CourseCard';
import CourseCategories from '../../CourseCategories/CourseCategories';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                            <CourseCategories></CourseCategories>
                    </Col>
                    <Col lg="8">
                            <CourseCard></CourseCard>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;