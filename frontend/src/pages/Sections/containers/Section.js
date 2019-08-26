import React, { Component } from 'react';

import SectionLayout from '../components/SectionLayout';
import ContentHeader from '../../../components/ContentHeader';

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

    render() {
        return (
            <React.Fragment>
                <ContentHeader title="Sections Management" subtitle="Manage sections and units" />
                <section className="content">
                    <div className="masonry">
                        {this.state.data.map(index => {
                            return (
                                <SectionLayout stateId={index.id} units={index.units} />
                            );
                        })}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;