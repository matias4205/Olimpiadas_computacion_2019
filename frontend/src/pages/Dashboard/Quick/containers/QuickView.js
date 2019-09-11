import React, { Component } from 'react';

import QuickViewLayout from '../components/QuickViewLayout';

import * as API from '../../../../utils/api';

class QuickView extends Component {
    state = {
        lastHourAverages: []
    }

    makeReadingsAverage({ data }){
        let valuesAccumulator = {
            water: [],
            light: [],
            temperature: []
        }
        let valuesAverage = {
            water: [],
            light: [],
            temperature: []
        }
        data.forEach(({ units }) => {
            units.forEach(({ readings }) => {
                if(readings.length !== 0){
                    readings.forEach(({ data }) => {
                        if(data['water'].status === 'active'){
                            valuesAccumulator.water.push(data['water'].value);
                        }
                        if(data['light'].status === 'active'){
                            valuesAccumulator.light.push(data['light'].value);
                        }
                        if(data['temperature'].status === 'active'){
                            valuesAccumulator.temperature.push(data['temperature'].value);
                        }
                    });
                }
            });
        });

        valuesAverage['water'] = valuesAccumulator['water'].length ? valuesAccumulator['water'].reduce((acum, value) => acum+value) / valuesAccumulator['water'].length : null;
        valuesAverage['temperature'] = valuesAccumulator['temperature'].length ? valuesAccumulator['temperature'].reduce((acum, value) => acum+value) / valuesAccumulator['temperature'].length : null;
        valuesAverage['light'] = valuesAccumulator['light'].length ? valuesAccumulator['light'].reduce((acum, value) => acum+value) / valuesAccumulator['light'].length : null;
        
        return valuesAverage;
    }

    async componentDidMount(){
        const { data, status } = await API.getLastReadings();
        const lastHourAverages = this.makeReadingsAverage(data);

        this.setState({
            lastHourAverages
        });
    }

    render() {
        return (
            <QuickViewLayout lastHourAverages={this.state.lastHourAverages} />
        );
    }
}

export default QuickView;
