import React from 'react';

import Header from './Header';
import Skills from './Skills';

class Technology extends React.Component {
    constructor(props) {
        super(props);

        const {skills} = props;

        this.state = {
            skills,
            percent: 0,
        };
    }

    getSkillChangeHandler = (skillName) => () => {
        const newSkills = [...this.state.skills];
        const skillByName = newSkills.find(({name}) => name === skillName);

        if (!skillByName) {
            return;
        }

        skillByName.checked = !skillByName.checked;

        const {length: skillsTotal} = newSkills;
        const checkedSkillsCount = newSkills.filter(({checked}) => checked).length;
        const percent = Math.round(checkedSkillsCount * 100 / skillsTotal);

        this.setState({
            skills: newSkills,
            percent,
        });
    };

    render() {
        return (
            <div className="technology">
                <Header
                    technologyName={this.props.technologyName}
                    percent={this.state.percent}
                />
                <Skills
                    getChangeHandler={this.getSkillChangeHandler}
                    skills={this.state.skills}
                />
            </div>
        );
    }
}

export default Technology;