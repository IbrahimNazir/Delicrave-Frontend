import React, { useState, useEffect } from 'react'
import { Chart as hartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import Table from '../components/Table'
import { apiGetAllDashboardItems } from '../utils/ApiHandler';
import Dessert from './Dessert';

function Dashboard() {
    const [dashboarditems, setDashboarditems] = useState(
        {
            "daysell": 164,
            "dayorders": 5,
            "totalnoofdesserts": 3,
            "totalcategories": 2,
            "totalflavors": 2,
            "topsellingdessert": [
                {
                    "dessert__name": "Chocolate cake",
                    "total_items_sold": 100
                },
                {
                    "dessert__name": "Feast",
                    "total_items_sold": 37
                },
                {
                    "dessert__name": "Chocobar",
                    "total_items_sold": 27
                }
            ],
            "dailysell": [
                {
                    "date": "2024-01-09",
                    "total_sale": 1750.0
                }
            ],
            "monthlysale": [
                {
                    "date__month": 1,
                    "total_sale": 1750.0
                }
            ]
        }
    )

    const month = { 0: "Jan", 1: "Fab", 2: "Mar", 3: "Apr", 4: "May", 5: 'Jun', 6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 1: "Nov", 11: "Dec" }
    const days = { 0: "Sun", 1: "Mon", 2: "Tues", 3: "Wed", 4: "Thu", 5: 'Fri', 6: "Sat" }
    const fetchDashboardAsync = async () => {
        try {
            const result = await apiGetAllDashboardItems();
            console.log('response', result)
            setDashboarditems(result)
        } catch (error) {
            console.log(error)
        }
    };

    const getDay = (day) => {
        const d = new Date(day.date).getDay()
        return days[d]
    }


    useEffect(() => {
        fetchDashboardAsync()
    }, [])



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
                                            <i class="fa-solid fa-money-bill"></i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">{dashboarditems.daysell}</span></div>
                                                <div class="stat-heading">Sale</div>
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
                                            <i class="fa-solid fa-cart-shopping"></i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">{dashboarditems.dayorders}</span></div>
                                                <div class="stat-heading">Orders</div>
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
                                            <i class="fa fa-ice-cream"></i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">{dashboarditems.totalnoofdesserts}</span></div>
                                                <div class="stat-heading">Desserts</div>
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
                                            <i class="fa-solid fa-list"></i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">{dashboarditems.totalcategories}</span></div>
                                                <div class="stat-heading">Categories</div>
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
                                        <div class="stat-icon dib flat-color-5">
                                            <i class="fa-solid fa-eye-dropper"></i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">{dashboarditems.totalflavors}</span></div>
                                                <div class="stat-heading">Flavors</div>
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
                                                <div class="stat-text"><span class="count">{dashboarditems.totalcategories}</span></div>
                                                <div class="stat-heading">Categories</div>
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
                                        // labels: ["Mon", "Tue", "Wed", "Thu", "Fri", 'Sat', "Sun"],
                                        labels: dashboarditems.dailysell.map((day) => getDay(day)),
                                        datasets: [
                                            {
                                                label: 'Week Sale',
                                                data: dashboarditems.dailysell.map((day) => day.total_sale),
                                                backgroundColor: [
                                                    'rgba(0,255,188)',
                                                ],
                                                borderRadius: 5
                                            },
                                            // {
                                            //     label: 'Sale Last Year',
                                            //     data: [250, 90, 370, 10, 90, 370, 10,],
                                            //     backgroundColor: [
                                            //         'rgba(202,255,208)',
                                            //     ],
                                            //     borderRadius: 5
                                            // }
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
                                        // labels: ["Jan", "Fab", "Mar", "Apr", "May", 'Jun', "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                        labels: dashboarditems.monthlysale.map((monthlysale) => month[monthlysale.date__month - 1]),
                                        datasets: [
                                            {
                                                label: 'Sale Today',
                                                data: dashboarditems.monthlysale.map((monthlysale) => monthlysale.total_sale),
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
                                        labels: dashboarditems.topsellingdessert.map((dessert) => dessert.dessert__name),
                                        datasets: [
                                            {
                                                label: 'Month Sell',
                                                data: dashboarditems.topsellingdessert.map((dessert) => dessert.total_items_sold),
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