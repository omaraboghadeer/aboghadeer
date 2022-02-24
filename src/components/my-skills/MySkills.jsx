import React, {Component} from 'react';
import './MySkills.scss';

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

