import React, {Component, useState, useEffect} from 'react';
import './MySkills.scss';
// import html5 from '../../images/skills/html5.svg';
// import css3 from '../../images/skills/css3.svg';
// import js from '../../images/skills/js.svg';
// import ts from '../../images/skills/ts.svg';
// import angular from '../../images/skills/angular.svg';
// import react from '../../images/skills/react.svg';
// import wepback from '../../images/skills/webpack.svg';
// import flutter from '../../images/skills/flutter.svg';
// import ionic from '../../images/skills/ionic.svg';
// import nodejs from '../../images/skills/nodejs.svg';
// import nextjs from '../../images/skills/next-js.svg';
// import sass from '../../images/skills/sass.svg';

import { Skills } from '../../../skills';


export class MySkills extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            active_skill: {
                index: 0,
                exp: "90%",
                color: "#e34c26",
            },
        };
    }

    _showSkillValue(skill, i) {
        skill.index = i;
        this.setState({
            active_skill: skill,
        })
    }


    render() {
        return (
            <div className='skills-container'>
                <p>My Skills</p>
                <br />
                <div className="d-flex justify-content-between flex-wrap">
                    {Skills.map((skill, i) => (
                        <div key={i} onClick={() => this._showSkillValue(skill, i)}>
                            <img src={skill.logo} alt={skill.name} className={this.state.active_skill.index == i ? 'active' : ''} />
                        </div>
                    ))}
                </div>
                <br />
                <div className="bar">
                    <div className='value' style={{width: this.state.active_skill.exp, background: this.state.active_skill.color}}></div>
                </div>
            </div>
        )
    }
}

export default MySkills

