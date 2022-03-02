import React, { Component } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';
import './projects.scss';
import { Modal } from "react-bootstrap";
import myProjects from '../firebase_docs';

export class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            projects: [],
            showModal: false,
            single_project: {},
        };
    }
    
    componentDidMount() {
        this.state.projects = [];
        myProjects()
        .then((res) => {
            this.setState({
                projects: res,
                loading: false
            }, () => this.state = [])
        })
        .catch(err => { console.log(err); })
    }
    
    componentWillmount() {
        this.state.projects = [];
    }
    

    // Modal Functions
    // open modal function
    _openPopup(project) {
        this.setState({
            showModal: true,
            single_project: project
        })
    }
    // close modal function
    handleClose() {
        this.setState({ showModal: false, single_project: {} })
    };



    render() {
        const { projects, loading, showModal, single_project } = this.state;

        const splideOptions = {
            type: 'loop',
            autoplay: true,
            perPage: 4,
            breakpoints: {
                1200: {
                    perPage: 3,
                    type: 'loop',
                },
                991: {
                    type: 'loop',
                    perPage: 3,
                },
                768: {
                    type: 'loop',
                    perPage: 1,
                }
            },
            gap: 10,
            focus: 'center',
            interval: 5000,
            pauseOnHover: false,
            pauseOnFocus: false,
            resetProgress: true,
            lazyLoad: true,
        };

        return loading ? (
            <>
                <div>loading...</div>
            </>
        ) : (
            <>
                {
                    <Splide options={splideOptions}>
                        {projects.map((project, index) => (
                            <SplideSlide key={index}>
                                <div onClick={() => this._openPopup(project)}>
                                    <div className='for__projectItem'>
                                        <div className="body">
                                            <img src={project.defult_image} />
                                        </div>
                                        <div className="details">
                                            <h6>{project.name}</h6>
                                            <h6>{project.type}</h6>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                }
                {showModal ?
                    <Modal 
                        show={showModal} 
                        onHide={() => this.handleClose() }
                        size='xl'
                        centered
                        aria-labelledby="contained-modal-title-vcenter"
                    >
                        <Modal.Header className='border-0' closeButton >
                            <Modal.Title className='modalTitle'>
                                <h4>{single_project.name} Project</h4>
                                <p>{single_project.type}</p>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='modalBody'>
                            <div className='container-fluid'>
                                <div className="row g-2 aboutProject">
                                    <div className="col-md-2 col-12">
                                        <p>Link: </p>
                                    </div>
                                    <div className="col-md-10 col-12">
                                        <p>
                                            {single_project.link ? 
                                                <a href={single_project.link} target={'_blank'}>{single_project.link}</a>
                                                : 
                                                <a>404 link not found 😓</a>
                                            }
                                        </p>
                                    </div>
                                    <div className="col-md-2 col-12">
                                        <p>Description: </p>
                                    </div>
                                    <div className="col-md-10 col-12">
                                        <p>{single_project.description}</p>
                                    </div>
                                    <div className="col-md-2 col-12">
                                        <p>My Rule: </p>
                                    </div>
                                    <div className="col-md-10 col-12">
                                        <p>{single_project.my_rule}</p>
                                    </div>
                                    <div className="col-md-2 col-12">
                                        <p>Worked At: </p>
                                    </div>
                                    <div className="col-md-10 col-12">
                                        <p><a href={single_project.worked_in.website} target={"_blank"}>{single_project.worked_in.name}</a></p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    {single_project.images.map((img, index) => (

                                        <div className="col-md-4 col-12 mb-2" key={index}>
                                            <img src={img} alt={`${single_project.name} project, img ${index}`} />
                                        </div>
                                        
                                    ))}
                                </div>

                            </div>
                        </Modal.Body>
                    </Modal> :
                    null
                }
            </>
        )
    }
}

export default Projects


