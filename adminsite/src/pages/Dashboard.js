import React from 'react'
import { Chart as hartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import Table from '../components/Table'
function Dashboard() {
    return (
        <>
            <div class="content">
                <div class="animated fadeIn">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="stat-widget-five">
                                        <div class="stat-icon dib flat-color-1">
                                            <i class="pe-7s-cash"></i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text">$<span class="count">23569</span></div>
                                                <div class="stat-heading">Revenue</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="stat-widget-five">
                                        <div class="stat-icon dib flat-color-2">
                                            <i class="pe-7s-cart"></i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">3435</span></div>
                                                <div class="stat-heading">Sales</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="stat-widget-five">
                                        <div class="stat-icon dib flat-color-3">
                                            <i class="pe-7s-browser"></i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">349</span></div>
                                                <div class="stat-heading">Templates</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="stat-widget-five">
                                        <div class="stat-icon dib flat-color-4">
                                            <i class="pe-7s-users"></i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">2986</span></div>
                                                <div class="stat-heading">Clients</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">




                        <div class="col-lg-6">
                            <div className='card'>
                                <div className='card-body'>

                                    <h4 className='mb-3'>Daily Sales</h4>
                                    <Bar data={{
                                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", 'Sat', "Sun"],
                                        datasets: [
                                            {
                                                label: 'Sale Today',
                                                data: [300, 100, 350, 30, 100, 350, 30],
                                                backgroundColor: [
                                                    'rgba(0,255,188)',
                                                ],
                                                borderRadius: 5
                                            },
                                            {
                                                label: 'Sale Last Year',
                                                data: [250, 90, 370, 10, 90, 370, 10,],
                                                backgroundColor: [
                                                    'rgba(202,255,208)',
                                                ],
                                                borderRadius: 5
                                            }
                                        ]

                                    }} />
                                </div>
                            </div>


                        </div>




                        <div class="col-lg-6">
                            <div className='card'>
                                <div className='card-body'>

                                    <h4 className='mb-3'>Montly Sales</h4>
                                    <Line data={{
                                        labels: ["Jan", "Fab", "Mar", "Apr", "May", 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                        datasets: [
                                            {
                                                label: 'Sale Today',
                                                data: [3000, 1000, 3050, 3330, 1000, 3500, 930, 1000, 3050, 3330, 1000, 3050],
                                                borderColor: [
                                                    'rgba(100,255,188)',
                                                ],
                                                backgroundColor: [
                                                    'rgba(200,255,188)',
                                                ],
                                                borderRadius: 5,
                                                fill: false,
                                                cubicInterpolationMode: 'monotone',
                                                tension: 0.4

                                            },

                                        ]

                                    }} />
                                </div>
                            </div>


                        </div>

                        <div class="col-lg-6">
                            <div className='card'>
                                <div className='card-body'>

                                    <h4 className='mb-3'>Top Selling</h4>
                                    <Doughnut data={{
                                        labels: ["Chocobar", "Fiest", "Kulfa", "Peshawari", "Other"],
                                        datasets: [
                                            {
                                                label: 'Sale Today',
                                                data: [300, 100, 350, 30, 100],
                                                backgroundColor: [
                                                    'rgba(0,255,150)',
                                                    'rgba(30,255,120)',
                                                    'rgba(60,255,90)',
                                                    'rgba(90,255,60)',
                                                    'rgba(120,255,30)',
                                                ],
                                                borderRadius: 5
                                            },

                                        ]

                                    }} />
                                </div>
                            </div>


                        </div>



                    </div >

                </div >
            </div >
        </>
    )
}

export default Dashboard