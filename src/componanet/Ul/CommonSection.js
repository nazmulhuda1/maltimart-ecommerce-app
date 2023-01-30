import React from 'react';
import { Container } from 'reactstrap';
import '../../Style/CommonSection.css'


const CommonSection = ({ title }) => {
    return (
        <section className="common_section">
            <Container>
                <div className="common_title">
                    <h3>{title}</h3>
                </div>
            </Container>
        </section>
    );
};

export default CommonSection;