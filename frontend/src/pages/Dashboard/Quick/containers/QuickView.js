import React, { Component } from 'react';

import ContentHeader from '../../../../components/ContentHeader';
import InfoBox from '../../../../components/InfoBox';
import { Line } from 'react-chartjs-2';

function Dashboard(){
    const salesChartData = {
        labels  : ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
        datasets: [
            {
                label: 'Temperature',
                backgroundColor: 'rgba(255, 119, 1, .8)',
                strokeColor: '#FF7701',
                pointColor: '#FF7701',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgb(220,220,220)',
                data: [12, 12, 14, 14, 15, 15, 20, 20, 20, 20, 20, 20, 20, 20, 20, 24, 26],
            },
            {
                label: 'Water',
                data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86, 27, 90, 28, 48, 48],
                backgroundColor: 'rgba(60, 141, 188, .8)',
                strokeColor: '#3C8DBC',
                pointColor: '#3C8DBC',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgb(220,220,220)',
            },
            {
                label: 'Light',
                backgroundColor: 'rgba(0, 166, 90, .8)',
                strokeColor: '#00A65A',
                pointColor: '#00A65A',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data: [165, 259, 380, 181, 526, 355, 170, 260, 360, 670, 190, 200, 310, 320, 640, 740, 140],
            }
        ]
    }

    const salesChartOptions = {
        // Boolean - If we should show the scale at all
        showScale: true,
        // Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: false,
        // String - Colour of the grid lines
        scaleGridLineColor: 'rgba(0,0,0,.05)',
        // Number - Width of the grid lines
        scaleGridLineWidth: 1,
        // Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        // Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines  : true,
        // Boolean - Whether the line is curved between points
        bezierCurve: true,
        // Number - Tension of the bezier curve between points
        bezierCurveTension: 0.3,
        // Boolean - Whether to show a dot for each point
        pointDot: false,
        // Number - Radius of each point dot in pixels
        pointDotRadius: 4,
        // Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 1,
        // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius : 20,
        // Boolean - Whether to show a stroke for datasets
        datasetStroke: true,
        // Number - Pixel width of dataset stroke
        datasetStrokeWidth: 2,
        // Boolean - Whether to fill the dataset with a color
        datasetFill: true,
        // String - A legend template
        legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].lineColor%>\'></span><%=datasets[i].label%></li><%}%></ul>',
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,
        // Boolean - whether to make the chart responsive to window resizing
        responsive: true,
    };


    return (
        <div className="content-wrapper">
            <ContentHeader title="Dashboard" subtitle="Quick view" />
            <section className="content">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <InfoBox color="green" title="Ambient Light" value="80 Lumens" icon="ion ion-ios-lightbulb"/>
                    </div>
                    
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <InfoBox color="orange-active" title="Ambient Temperature" value="18C°" icon="ion ion-thermometer"/>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <InfoBox color="light-blue" title="Available Water" value="80%" icon="ion ion-waterdrop"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="box box-success">
                            <div className="box-header with-border">
                                <h3 className="box-title">Hour by Hour Average Report</h3>

                                <div className="box-tools pull-right">
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse">
                                        <i className="fa fa-minus" />
                                    </button>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="text-center">
                                            <h2><strong>Values: From 21 Aug 00:00 to 21 Aug 16:00</strong></h2>
                                        </p>
                                        <br/>
                                        <div className="chart">
                                            <Line width={600} data={salesChartData} options={salesChartOptions} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;