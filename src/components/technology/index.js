import React from 'react';

import Header from './Header';
import Skills from './Skills';
import styled from 'styled-components';

const StyledTechnology = styled.div`
    width: 30%;
    color: ${props => props.theme.secondary};
    margin: 0 0 50px;
`;

const Technology = (props) => (
    <StyledTechnology>
        <Header
            technologyName={props.technologyName}
            percent={props.percent}
            handleSkillDrop={props.getSkillDropHandler}
        />
        <Skills
            getChangeHandler={props.getSkillChangeHandler}
            skills={props.skills}
        />
    </StyledTechnology>
);

export default Technology;