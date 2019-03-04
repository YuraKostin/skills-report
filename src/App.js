import React, { Component } from 'react';

import Technology from './components/technology';

import './App.css';

const technologies = [
    {
        technologyName: 'js',
        skills: [
            {
                name: 'fp'
            },
            {
                name: 'oop'
            }
        ]
    },
    {
        technologyName: 'react',
        skills: [
            {
                name: 'jsx'
            },
            {
                name: 'HOC'
            }
        ]
    },
    {
        technologyName: 'git',
        skills: [
            {
                name: 'cherry pick'
            }
        ]
    },
    {
        technologyName: 'vue',
        skills: [
            {
                name: 'custom directives'
            }
        ]
    },
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="app__title">Технологии</h1>

        <div className="app__technologies-list">
            {technologies && technologies.map(({technologyName, skills}) => (
                <Technology
                    technologyName={technologyName}
                    skills={skills}
                    key={technologyName}
                />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
