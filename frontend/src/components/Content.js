import React from 'react';

import ContentHeader from './ContentHeader';
import { Line } from 'react-chartjs-2';

const Content = () => {
    const salesChartData = {
        labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
        {
            label: 'Digital Goods',
            backgroundColor: 'rgba(60,141,188,0.9)',
            strokeColor: 'rgba(60,141,188,0.8)',
            pointColor: '#3b8bba',
            pointStrokeColor: 'rgba(60,141,188,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
            label: 'Electronics',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgb(210, 214, 222)',
            strokeColor: 'rgb(210, 214, 222)',
            pointColor: 'rgb(210, 214, 222)',
            pointStrokeColor: '#c1c7d1',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgb(220,220,220)',
            
            // backgroundColor: 'rgba(75,192,192,0.4)',
            // borderColor: 'rgba(75,192,192,1)',
            // borderCapStyle: 'butt',
            // borderDash: [],
            // borderDashOffset: 0.0,
            // borderJoinStyle: 'miter',
            // pointBorderColor: 'rgba(75,192,192,1)',
            // pointBackgroundColor: '#fff',
            // pointBorderWidth: 1,
            // pointHoverRadius: 5,
            // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            // pointHoverBorderColor: 'rgba(220,220,220,1)',
            // pointHoverBorderWidth: 2,
            // pointRadius: 1,
            // pointHitRadius: 10,
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
        maintainAspectRatio: false,
        // Boolean - whether to make the chart responsive to window resizing
        responsive: true,
    };

    return (
        <div className="content-wrapper">
            <ContentHeader title="Dashboard" subtitle="Quick view" />
            <section className="content">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline"></i></span>

                            <div className="info-box-content">
                            <span className="info-box-text">CPU Traffic</span>
                            <span className="info-box-number">90<small>%</small></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-red"><i className="fa fa-google-plus"></i></span>

                            <div className="info-box-content">
                                <span className="info-box-text">Likes</span>
                                <span className="info-box-number">41,410</span>
                            </div>
                        </div>
                    </div>

                    <div className="clearfix visible-sm-block"></div>

                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-green"><i className="ion ion-ios-cart-outline"></i></span>

                            <div className="info-box-content">
                                <span className="info-box-text">Sales</span>
                                <span className="info-box-number">760</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="info-box">
                            <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline"></i></span>

                            <div className="info-box-content">
                                <span className="info-box-text">New Members</span>
                                <span className="info-box-number">2,000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <div className="box">
                        <div className="box-header with-border">
                        <h3 className="box-title">Monthly Recap Report</h3>

                        <div className="box-tools pull-right">
                            <button type="button" className="btn btn-box-tool" data-widget="collapse">
                                <i className="fa fa-minus" />
                            </button>
                        </div>
                        </div>
                        <div className="box-body">
                            <div className="row">
                                <div className="col-md-8">
                                <p className="text-center">
                                    <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                                </p>

                                <div className="chart">
                                    <Line id="salesChart" height={200} data={salesChartData} options={salesChartOptions} />
                                </div>  
                                </div>
                                <div className="col-md-4">
                                <p className="text-center">
                                    <strong>Goal Completion</strong>
                                </p>

                                <div className="progress-group">
                                    <span className="progress-text">Add Products to Cart</span>
                                    <span className="progress-number"><b>160</b>/200</span>

                                    <div className="progress sm">
                                    <div className="progress-bar progress-bar-aqua" style={{width: "80%"}}></div>
                                    </div>
                                </div>
                                <div className="progress-group">
                                    <span className="progress-text">Complete Purchase</span>
                                    <span className="progress-number"><b>310</b>/400</span>

                                    <div className="progress sm">
                                    <div className="progress-bar progress-bar-red" style={{width: "80%"}}></div>
                                    </div>
                                </div>
                                <div className="progress-group">
                                    <span className="progress-text">Visit Premium Page</span>
                                    <span className="progress-number"><b>480</b>/800</span>

                                    <div className="progress sm">
                                    <div className="progress-bar progress-bar-green" style={{width: "80%"}}></div>
                                    </div>
                                </div>
                                <div className="progress-group">
                                    <span className="progress-text">Send Inquiries</span>
                                    <span className="progress-number"><b>250</b>/500</span>

                                    <div className="progress sm">
                                    <div className="progress-bar progress-bar-yellow" style={{width: "80%"}}></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="row">
                                <div className="col-sm-3 col-xs-6">
                                <div className="description-block border-right">
                                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                    <h5 className="description-header">$35,210.43</h5>
                                    <span className="description-text">TOTAL REVENUE</span>
                                </div>
                                </div>
                                <div className="col-sm-3 col-xs-6">
                                <div className="description-block border-right">
                                    <span className="description-percentage text-yellow"><i className="fa fa-caret-left"></i> 0%</span>
                                    <h5 className="description-header">$10,390.90</h5>
                                    <span className="description-text">TOTAL COST</span>
                                </div>
                                </div>
                                <div className="col-sm-3 col-xs-6">
                                <div className="description-block border-right">
                                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 20%</span>
                                    <h5 className="description-header">$24,813.53</h5>
                                    <span className="description-text">TOTAL PROFIT</span>
                                </div>
                                </div>
                                <div className="col-sm-3 col-xs-6">
                                <div className="description-block">
                                    <span className="description-percentage text-red"><i className="fa fa-caret-down"></i> 18%</span>
                                    <h5 className="description-header">1200</h5>
                                    <span className="description-text">GOAL COMPLETIONS</span>
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
};

export default Content;