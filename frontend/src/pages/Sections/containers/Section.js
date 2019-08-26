import React, { Component } from 'react';

import SectionLayout from '../components/SectionLayout';

import '../components/section_styles.css';

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                        },
                        {
                            id: 5,
                            description: 'test'
                        },
                        {
                            id: 6,
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

    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map(index => {
                        return (
                            <li id={index.id}>
                                <SectionLayout stateId={index.id} units={index.units} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Section;