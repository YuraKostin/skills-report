import React, {Component} from 'react';
import styled, {ThemeProvider} from 'styled-components';

import GlobalStyles from './components/GlobalStyles';
import Technology from './components/technology';
import ThemedButton from './components/ThemedButton';

const technologies = [
    {
        technologyName: 'js',
        percent: 0,
        skills: [
            {
                name: 'fp'
            },
            {
                name: 'oop'
            },
            {
                name: 'regexp'
            },
            {
                name: 'Array methods'
            }
        ]
    },
    {
        technologyName: 'react',
        percent: 0,
        skills: [
            {
                name: 'jsx',
            },
            {
                name: 'HOC'
            }
        ]
    },
    {
        technologyName: 'git',
        percent: 0,
        skills: [
            {
                name: 'cherry pick'
            }
        ]
    },
    {
        technologyName: 'vue',
        percent: 0,
        skills: [
            {
                name: 'custom directives'
            }
        ]
    },
];

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const AppTitle = styled.h1`
    color: ${props => props.theme.primary};
    margin: 100px 0;
    display: flex;
    align-items: center;
`;

const ThemeToggler = styled(ThemedButton)`
  margin: 0 0 0 10px;
`;

const TechnologiesListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
`;

const SkillsReportContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  
`;
const SkillsReportItem = styled.div`
  flex: 0 0 28%;
  margin: 0 1% 30px;
`;

const themes = {
    main: {
        primary: 'orange',
        secondary: 'olive',
        highlight: 'darkorange',
    },

    dark: {
        primary: 'purple',
        secondary: 'darkblue',
        highlight: 'deeppink',
    }
};

class App extends Component {
    state = {
        currentTheme: 'main',
        technologies,
    };

    handleThemeChange = () => {
        const {currentTheme} = this.state;

        this.setState({
            currentTheme: currentTheme === 'main' ? 'dark' : 'main',
        });
    };

    getTechnologyChangeHandler = (technologyName) => (skillName) => () => {
        const technologies = [...this.state.technologies];
        const technology = technologies.find(({technologyName: _technologyName}) => _technologyName === technologyName);

        if (!technology) {
            return;
        }

        const { skills } = technology;
        const skillByName = skills.find(({name}) => name === skillName);

        if (!skillByName) {
            return;
        }

        skillByName.checked = !skillByName.checked;

        const {length: skillsTotal} = skills;
        const checkedSkillsCount = skills.filter(({checked}) => checked).length;

        technology.percent = Math.round(checkedSkillsCount * 100 / skillsTotal);

        this.setState({
            technologies,
        });
    };

    dropTechnologyProficiency = (technologyName) => () => {
        const technologies = [...this.state.technologies];
        const technology = technologies.find(({technologyName: _technologyName}) => _technologyName === technologyName);

        if (!technology) {
            return;
        }

        technology.percent = 0;
        technology.skills.forEach(skill => {
            skill.checked = false;
        });

        this.setState({
            technologies,
        });
    };

    render() {
        return (
            <React.Fragment>
                <GlobalStyles />

                <ThemeProvider theme={themes[this.state.currentTheme]}>
                    <AppContainer>
                        <AppTitle>
                            Технологии

                            <ThemeToggler onClick={this.handleThemeChange}>
                                Toggle theme (main|dark)
                            </ThemeToggler>
                        </AppTitle>

                        <TechnologiesListContainer>
                            {technologies && technologies.map(({technologyName, skills, percent}) => (
                                <Technology
                                    getSkillChangeHandler={this.getTechnologyChangeHandler(technologyName)}
                                    getSkillDropHandler={this.dropTechnologyProficiency(technologyName)}
                                    technologyName={technologyName}
                                    skills={skills}
                                    percent={percent}
                                    key={technologyName}
                                />
                            ))}
                        </TechnologiesListContainer>

                        <SkillsReportContainer>
                            {this.state.technologies.map(technology => (
                                <SkillsReportItem key={technology.technologyName}>
                                    <h3>{technology.technologyName}</h3>
                                    <ul>
                                        {technology.skills
                                            .filter(skill => skill.checked)
                                            .map(skill => (
                                                <li>{skill.name}</li>
                                            )
                                        )}
                                    </ul>
                                    <span>Skill proficiency: {technology.percent}/100 (%)</span>
                                </SkillsReportItem>
                            ))}
                        </SkillsReportContainer>
                    </AppContainer>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

export default App;
