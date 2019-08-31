import React, { Component } from 'react';

import SectionLayout from '../components/SectionLayout';
import ContentHeader from '../../../components/ContentHeader';
import Modal from '../../../components/Modal';

import '../components/section_styles.css';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteModalIsOpened: false,
            editModalIsOpened: false,
            data: [
                {
                    id: 'A',
                    units: [
                        {
                            id: 1,
                            description: 'test'
                        },
                        {
                            id: 2,
                            description: 'test'
                        },
                        {
                            id: 3,
                            description: 'test'
                        },
                        {
                            id: 4,
                            description: 'test'
                        }
                    ]
                },
                {
                    id: 'B',
                    units: [
                        {
                            id: 1,
                            description: 'test'
                        },
                        {
                            id: 2,
                            description: 'test'
                        },
                    ]
                },
                {
                    id: 'C',
                    units: [
                        {
                            id: 1,
                            description: 'test'
                        },
                        {
                            id: 2,
                            description: 'test'
                        },
                        {
                            id: 3,
                            description: 'test'
                        },
                        {
                            id: 4,
                            description: 'test'
                        },
                        {
                            id: 5,
                            description: 'test'
                        }
                    ]
                },
                {
                    id: 'D',
                    units: [
                        {
                            id: 1,
                            description: 'test'
                        },
                        {
                            id: 2,
                            description: 'test'
                        },
                        {
                            id: 3,
                            description: 'test'
                        },
                        {
                            id: 4,
                            description: 'test'
                        },
                        {
                            id: 5,
                            description: 'test'
                        }
                    ]
                },
                {
                    id: 'E',
                    units: [
                        {
                            id: 1,
                            description: 'test'
                        },
                        {
                            id: 2,
                            description: 'test'
                        },
                        {
                            id: 3,
                            description: 'test'
                        },
                        {
                            id: 4,
                            description: 'test'
                        }
                    ]
                },
                {
                    id: 'F',
                    units: [
                        {
                            id: 1,
                            description: 'test'
                        },
                        {
                            id: 2,
                            description: 'test'
                        },
                        {
                            id: 3,
                            description: 'test'
                        },
                        {
                            id: 4,
                            description: 'test'
                        }
                    ]
                },
                {
                    id: 'G',
                    units: [
                        {
                            id: 1,
                            description: 'test'
                        },
                        {
                            id: 2,
                            description: 'test'
                        },
                        {
                            id: 3,
                            description: 'test'
                        },
                        {
                            id: 4,
                            description: 'test'
                        }
                    ]
                },
                {
                    id: 'H',
                    units: [
                        {
                            id: 1,
                            description: 'test'
                        },
                        {
                            id: 2,
                            description: 'test'
                        },
                        {
                            id: 3,
                            description: 'test'
                        },
                        {
                            id: 4,
                            description: 'test'
                        }
                    ]
                },
                {
                    id: 'I',
                    units: [
                        {
                            id: 1,
                            description: 'test'
                        },
                        {
                            id: 2,
                            description: 'test'
                        },
                        {
                            id: 3,
                            description: 'test'
                        },
                        {
                            id: 4,
                            description: 'test'
                        }
                    ]
                }
            ]
        }
    }

    async componentDidMount() {
        // try {
        //     const response = await fetch('URL');
        //     const data = await response.json();
        //     this.setState({

        //     })
        // } catch (error) {
        //     console.log(error);
        // }
    }

    toggleEditModal = e => {
        if(this.state.editModalIsOpened){
            this.setState({
                editModalIsOpened: false
            })
        } else {
            this.setState({
                editModalIsOpened: true
            })
        }
    }

    toggleDeleteModal = e => {
        if(this.state.deleteModalIsOpened){
            this.setState({
                test: e,
                deleteModalIsOpened: false
            })
        } else {
            this.setState({
                test: e,
                deleteModalIsOpened: true
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <ContentHeader title="Sections Management" subtitle="Manage sections and units" />
                <section className="content">
                    <div className="masonry">
                        {this.state.data.map(index => {
                            return (
                                <SectionLayout
                                    stateId={index.id}
                                    units={index.units}
                                    openEditModal={this.toggleEditModal}
                                    openDeleteModal={this.toggleDeleteModal}
                                />
                            );
                        })}
                        <Modal
                            isOpen={this.state.editModalIsOpened}
                            onClose={this.toggleEditModal}
                            title={`Unit ${this.props.test}`}
                        >
                            Do you really want to delete this unit?
                        </Modal>
                        <Modal
                            isOpen={this.state.deleteModalIsOpened}
                            onClose={this.toggleDeleteModal}
                            title={`Edit unit ${this.props.test} description`}
                        >
                            <textarea class="form-control" rows="3" placeholder="Enter ..."></textarea>
                        </Modal>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;