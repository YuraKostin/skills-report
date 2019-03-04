import React from 'react';

const Skills = ({skills, getChangeHandler}) => (
    <ul className="technology__skills">
        {skills && skills.map(({name}) => (
            <li className="technology__skills-item" key={`skill-name-${name}`}>
                <label>
                    <input
                        type="checkbox"
                        className="technology__skills-item-checkbox"
                        onChange={getChangeHandler(name)}
                    />
                    <span className="technology__skills-item-name">{name}</span>
                </label>
            </li>
        ))}
    </ul>
);

export default Skills;