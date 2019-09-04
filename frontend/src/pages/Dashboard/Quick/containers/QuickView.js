import React, { Component } from 'react';

import QuickViewLayout from '../components/QuickViewLayout';

import * as API from '../../../../utils/api';

class QuickView extends Component {
    async componentDidMount(){
        const { data, status } = await API.getReadings();
        console.log(data);
    }

    render() {
        return (
            <QuickViewLayout />
        );
    }
}

export default QuickView;