import React from 'react';
import styled from 'styled-components';

import ThemedButton from '../ThemedButton';

const TechnologyHeader = styled.div`
    position: relative;
`;

const TechnologyTitle = styled.h2`
    position: absolute;
    line-height: 100px;
    width: 100%;
    text-align: center;
    z-index: 1;
`;

const TechnologyProgressContainer = styled.div`
    height: 100px;
    background: #fff;
    position: relative;
    width: 100%;
    border: 1px solid ${(props => props.theme.highlight)};
    margin: 0 0 20px;
`;

const getProgressWidth = ({percent}) => `${percent}%`;

const TechnologyProgressInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    background: ${props => props.theme.highlight};
    width: ${getProgressWidth};
    transition: width .5s ease-in-out;
`;

const Header = ({technologyName, percent, handleSkillDrop}) => (
    <TechnologyHeader>
        <TechnologyTitle>{technologyName} {percent}%</TechnologyTitle>
        <TechnologyProgressContainer>
            <TechnologyProgressInner percent={percent} />
        </TechnologyProgressContainer>

        <ThemedButton onClick={handleSkillDrop}>Drop skill progress</ThemedButton>
    </TechnologyHeader>
);

export default Header;