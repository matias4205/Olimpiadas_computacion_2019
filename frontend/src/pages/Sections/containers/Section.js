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
                    sectionName: 'A',
                    unit: [
                        {
                            unitName: 'A1',
                            description: 'test'
                        },
                        {
                            unitName: 'A2',
                            description: 'test'
                        },
                        {
                            unitName: 'A3',
                            description: 'test'
                        },
                        {
                            unitName: 'A4',
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
        const { modalSectionIndex, modalUnitIndex } = this.state; // Gets the Section and Unit index from the state (watch lines 226 and 242)

        this.setState(prevState => {
            const { data: prevSections } = prevState;
            // From here
            const prevUnit = prevSections[modalSectionIndex].unit[modalUnitIndex]; // Abstracts the previous and specific unit that is going to be modified
            const newUnit = { // Changes the specific descrption of the abstracted unit
                ...prevUnit,
                description: newDescription
            }
            let newSections = [...prevSections];
            newSections[modalSectionIndex] = { // We have absolutely no idea about what this is for, but it does not works without it
                ...prevSections[modalSectionIndex]
            }
            newSections[modalSectionIndex].unit[modalUnitIndex] = newUnit; // This line creates the new array of section with the modified unit
            // To here, is the immutable way to change a component state, search about immutability
            return { // The callback returns here the new state and closes the modals
                ...prevState,
                modalSectionIndex: 0,
                modalUnitIndex: 0,
                data: newSections,
                deleteModalIsOpened: false,
                editModalIsOpened: false
            }
        });
    }

    handleDeleteUnit = () => {
        const { modalSectionIndex, modalUnitIndex } = this.state; // Gets the Section and Unit index from the state (watch lines 226 and 242)

        this.setState(prevState => {
            const { data: prevSections } = prevState;
            const prevUnits = prevSections[modalSectionIndex].unit;
            const newUnits = [...prevUnits];
            newUnits.splice(modalUnitIndex, 1);
            let newSections = [...prevSections];
            newSections[modalSectionIndex] = {
                ...prevSections[modalSectionIndex]
            }
            newSections[modalSectionIndex].unit = newUnits; // This line creates the new array of section with the modified unit
            return { // The callback returns here the new state and closes the modals
                ...prevState,
                modalSectionIndex: 0,
                modalUnitIndex: 0,
                data: newSections,
                deleteModalIsOpened: false,
                editModalIsOpened: false
            }
        })
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
                    onClick={this.handleDeleteUnit}
                    title={`Unit ${this.state.modalUnitName}`}
                />
                <EditModal
                    isOpen={this.state.editModalIsOpened}
                    onClose={this.toggleEditModal}
                    onSubmit={this.handleEditDescription}
                    title={`Edit unit ${this.state.modalUnitName} description`}
                    description={this.state.data[this.state.modalSectionIndex].unit[this.state.modalUnitIndex].description}
                />
            </React.Fragment>
        );
    }
}

export default Section;