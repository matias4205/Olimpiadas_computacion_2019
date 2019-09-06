import React, { Component } from 'react';

import SectionLayout from '../components/SectionLayout';
import ContentHeader from '../../../components/ContentHeader';
import Modal from '../../../components/Modal';

import '../components/section_styles.css';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIndex: 0,
            modalSectionID: '',
            modalUnitID: 1,
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
                            description: 'aaaaaaaaaaaaa'
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
                            description: 'tesssssst'
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

    toggleEditModal = async (sectionID, unitID, index) => {
        if (this.state.editModalIsOpened) {
            this.setState({
                editModalIsOpened: false
            })
        } else {
            await this.setState({
                modalIndex: index,
                modalSectionID: sectionID,
                modalUnitID: unitID,
                editModalIsOpened: true
            })
        }
    }

    toggleDeleteModal = async (sectionID, unitID, index) => {
        if (this.state.deleteModalIsOpened) {
            this.setState({
                deleteModalIsOpened: false
            })
        } else {
            await this.setState({
                modalIndex: index,
                modalSectionID: sectionID,
                modalUnitID: unitID,
                deleteModalIsOpened: true
            })
        }
    }

    handleEditDescription = description => {
        this.setState({
            data: [
                ...data,
                //HACER UNA FUNCION PARA EL SUBMIT
                //HACER UN HOOK PARA EL MODAL QUE GUARDE EL ONCHANGE
                //QUE EL HOOK LE HAGA LA PETICION A LA BASE DE DATOS Y SI ES EXITOSA (HAY CONEXION) AHI SI MODIFIQUE EL SMART PADRE
                //
            ]
            
            [data[this.state.modalIndex].units[this.state.modalUnitID - 1].description]: description
        });
    }

    render() {
        return (
            <React.Fragment>
                <ContentHeader title="Sections Management" subtitle="Manage sections and units" />
                <section className="content">
                    <div className="masonry">
                        {this.state.data.map((item, index) => {
                            return (
                                <SectionLayout
                                    key={item.id}
                                    id={item.id}
                                    section={index}
                                    units={item.units}
                                    openEditModal={this.toggleEditModal}
                                    openDeleteModal={this.toggleDeleteModal}
                                />
                            );
                        })}
                        <Modal
                            isOpen={this.state.editModalIsOpened}
                            onClose={this.toggleEditModal}
                            title={`Unit ${this.state.modalSectionID}${this.state.modalUnitID}`}
                        >
                            Do you really want to delete this unit?
                        </Modal>
                        <Modal
                            isOpen={this.state.deleteModalIsOpened}
                            onClose={this.toggleDeleteModal}
                            title={`Edit unit ${this.state.modalSectionID}${this.state.modalUnitID} description`}
                        >
                            <textarea className="form-control" rows="3" value={this.state.data[this.state.modalIndex].units[this.state.modalUnitID - 1].description}></textarea>
                        </Modal>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;