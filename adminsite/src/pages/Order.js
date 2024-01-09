import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import RightPanel from '../components/RightPanel'
import { apiGetAllOrders } from '../utils/ApiHandler'
import { useParams } from 'react-router-dom/cjs/react-router-dom'





function Order() {
    
    const init = [
        {
            "id": 1,
            "date": "2024-01-06",
            "status": "Pending",
            "totalamount": 500.0,
            "paymethod": "COD",
            "rating": 5,
            "review": "Best",
            "customer": {
                "id": 1,
                "username": "Ibrahim",
                "name": "Ibrahim Nazir",
                "contact": "030020067",
                "email": "ibrahim@gmail.com",
                "address": "A-55, Sector 5"
            }
        }
    ]
    const [orders, setOrders] = useState(init)
    // const [order, setOrder] = useState([{}])
    const [noOfEntries, setNoOfEntries] = useState('20')
    const [searchValue, setSearchValue] = useState('')
    const [pageNo, setPageNo] = useState(1)
    // const [orders, setOrders] = useState([{ id: 0, customer: {}, data: "asd", paymethod: "card", rating: 0, totalamount: 0, review: "", status: "" }])
    const [n, setN] = useState(0)

    var pag = document.getElementsByClassName("paginate_button")
    const fetchOrdersAsync = async () => {
        try {
            const result = await apiGetAllOrders();
            console.log('response', result)
            setOrders(result)
            console.log("orders: ",orders.sort((a,b)=> Number(b.id)-Number(a.id)))
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        for (const iterator of pag) {
            iterator.classList.remove("active")
        }
        pag[pageNo % 3 ? pageNo % 3 : 3].classList.add("active")

    }, [pageNo])
    var noOfPages = Math.ceil(orders.length / Number(noOfEntries))

    useEffect(() => {
        fetchOrdersAsync()
        console.log("useEffect",orders)
    }, [])


    return (
        <>
            <div class="content">
                <div class="animated fadeIn">
                    <div class="row">

                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <strong class="card-title">Orders</strong>
                                </div>
                                <div class="card-body">
                                    <div id="bootstrap-data-table_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-6">
                                                <div class="dataTables_length" id="bootstrap-data-table_length">
                                                    <label style={{ display: 'flex' }}>Show
                                                        <select value={noOfEntries} onChange={(e) => { setNoOfEntries(e.target.value) }} style={{ width: '20%', margin: '0px 10px' }} name="bootstrap-data-table_length" aria-controls="bootstrap-data-table" class="form-control form-control-sm">
                                                            <option value="10">10</option>
                                                            <option value="20">20</option>
                                                            <option value="50">50</option>
                                                            <option value={orders.length.toString()}>All</option>
                                                        </select> entries
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6" style={{ textAlign: 'right', position: 'relative' }}>
                                                <label style={{ display: 'block', float: 'right' }}>Search:
                                                    <input value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} style={{ display: 'block', float: "right", width: '73%', marginLeft: '10px', marginBottom: '10px' }} type="search" class="form-control form-control-sm" placeholder="" aria-controls="bootstrap-data-table" />
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-12">
                                                {console.log("here am I bef")}
                                                <Table noOfEntries={noOfEntries} searchValue={searchValue} pageNo={pageNo} init={orders} setOrders={setOrders} />
                                                {console.log("here am I after")}

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12 col-md-5">
                                                <div class="dataTables_info" id="bootstrap-data-table_info" role="status" aria-live="polite">Showing {pageNo * noOfEntries - noOfEntries + 1} to {pageNo * noOfEntries >= orders.length ? orders.length : pageNo * noOfEntries} of {orders.length} entries
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-7">
                                                <div class="dataTables_paginate paging_simple_numbers" id="bootstrap-data-table_paginate">
                                                    <ul class="pagination">

                                                        <li class="paginate_button page-item next" id="bootstrap-data-table_next" hidden={pageNo === 1} >
                                                            <a value={pageNo} onClick={() => {

                                                                setPageNo(prev => prev - 1)
                                                                const pg = pageNo - 2
                                                                setN(Math.floor(pg / 3))


                                                            }} class="page-link">Prev</a>
                                                        </li>

                                                        {Math.ceil(orders.length / Number(noOfEntries)) >= 1 ?
                                                            <li class="paginate_button page-item">
                                                                <a value={pageNo} onClick={() => { setPageNo(3 * n + 1) }} class="page-link">{3 * n + 1}</a>
                                                            </li>
                                                            : ""
                                                        }
                                                        {Math.ceil(orders.length / Number(noOfEntries)) >= 2 ?
                                                            <li class="paginate_button page-item">
                                                                <a value={pageNo} onClick={() => { setPageNo(3 * n + 2) }} class="page-link">{3 * n + 2}</a>
                                                            </li>
                                                            : ""
                                                        }
                                                        {Math.ceil(orders.length / Number(noOfEntries)) >= 3 ?
                                                            <li class="paginate_button page-item">
                                                                <a value={pageNo} onClick={() => { setPageNo(3 * n + 3) }} class="page-link">{3 * n + 3}</a>
                                                            </li>
                                                            : ""
                                                        }

                                                        <li class="paginate_button page-item next" id="bootstrap-data-table_next" hidden={pageNo === noOfPages}>
                                                            <a value={pageNo} onClick={() => {
                                                                setPageNo(prev => prev + 1)
                                                                const p = pageNo
                                                                setN(Math.floor(p / 3))
                                                            }} class="page-link">Next</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order