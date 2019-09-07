import React, { Component } from 'react';

import SectionLayout from '../components/SectionLayout';
import ContentHeader from '../../../components/ContentHeader';
import EditModal from '../components/EditModal';
import DeleteModal from '../components/DeleteModal';

import './styles/section_styles.css';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalSectionName: '',
            modalSectionIndex: 0,
            modalUnitName: '',
            modalUnitIndex: 0,
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

    toggleEditModal = async (sectionName, sectionIndex, unitName, unitIndex) => { //We have to edit the state in an inmutable way
        if (this.state.editModalIsOpened) {
            this.setState({
                editModalIsOpened: false
            })
        } else {
            await this.setState({
                modalSectionName: sectionName,
                modalSectionIndex: sectionIndex,
                modalUnitName: unitName,
                modalUnitIndex: unitIndex,
                editModalIsOpened: true
            })
        }
    }

    toggleDeleteModal = async (sectionName, sectionIndex, unitName, unitIndex) => {
        if (this.state.deleteModalIsOpened) {
            this.setState({
                deleteModalIsOpened: false
            })
        } else {
            await this.setState({
                modalSectionName: sectionName,
                modalSectionIndex: sectionIndex,
                modalUnitName: unitName,
                modalUnitIndex: unitIndex,
                deleteModalIsOpened: true
            })
        }
    }

    handleEditDescription = newDescription => {
        const { modalSectionIndex, modalUnitIndex } = this.state;

        this.setState((prevState) => {
            const { data: prevSections } = prevState;
            // From here
                const prevUnit = prevSections[modalSectionIndex].units[modalUnitIndex];
                const newUnit = {
                    ...prevUnit,
                    description: newDescription
                }
                let newSections = [ ...prevSections ];
                newSections[modalSectionIndex] = {
                    ...prevSections[modalSectionIndex]
                }
                newSections[modalSectionIndex].units[modalUnitIndex] = newUnit;
            // To here, is the immutable way to change a component state, search about immutability
            return {
                ...prevState,
                data: newSections,
                deleteModalIsOpened: false,
                editModalIsOpened: false
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <ContentHeader title="Sections Management" subtitle="Manage sections and units" />
                <section className="content">
                    <div className="masonry">
                        <SectionLayout
                            data={this.state.data}
                            openEditModal={this.toggleEditModal}
                            openDeleteModal={this.toggleDeleteModal}
                        />
                    </div>
                </section>
                <DeleteModal 
                    isOpen={this.state.deleteModalIsOpened}
                    onClose={this.toggleDeleteModal}
                    onClick={ ()=>{} }
                    title={`Unit ${this.state.modalSectionName}${this.state.modalUnitName}`}
                />
                <EditModal
                    isOpen={this.state.editModalIsOpened}
                    onClose={this.toggleEditModal}
                    onSubmit={this.handleEditDescription}
                    title={`Edit unit ${this.state.modalSectionName}${this.state.modalUnitName} description`}
                    description={ this.state.data[this.state.modalSectionIndex].units[this.state.modalUnitIndex].description }
                />
            </React.Fragment>
        );
    }
}

export default Section;