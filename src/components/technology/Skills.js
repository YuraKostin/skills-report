import React from 'react';
import styled from 'styled-components';

const SkillsList = styled.ul`
    list-style-type: none;
    margin: 20px 0;
`;

const SkillName = styled.span`
    margin: 0 0 0 20px;
    cursor: pointer;
`;

class Skills extends React.Component {

    state = {
        skills: this.props.skills,
    };

    render() {
        return (
            <SkillsList>
                {this.state.skills && this.state.skills.map(({name, checked}) => (
                    <li key={`skill-name-${name}`}>
                        <label>
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={this.props.getChangeHandler(name)}
                            />
                            <SkillName>{name}</SkillName>
                        </label>
                    </li>
                ))}
            </SkillsList>
        );
    }
}

export default Skills;