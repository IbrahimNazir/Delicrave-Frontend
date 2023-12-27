import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import RightPanel from '../components/RightPanel'

var init = [
    { orderID: 10, name: 'xiri Satou', price: '9', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'sdfasfasfc 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
    { orderID: 10, name: 'xiri Satou', price: '120', address: 'S-232, Sec 71', status: '0' },
    { orderID: 9, name: 'Zarira Chuli', price: '900', address: 'Z-232, Sec 71', status: '1' },
    { orderID: 8, name: 'Xamosa Khan', price: '300', address: 'A-232, Sec 71', status: '3' },
]



function Order() {
    const [noOfEntries, setNoOfEntries] = useState('20')
    const [searchValue, setSearchValue] = useState('')
    const [pageNo, setPageNo] = useState(1)
    const [orders, setOrders] = useState([])
    const [n, setN] = useState(0)

    var pag = document.getElementsByClassName("paginate_button")

    useEffect(() => {
        for (const iterator of pag) {
            iterator.classList.remove("active")
        }
        pag[pageNo % 3 ? pageNo % 3 : 3].classList.add("active")

    }, [pageNo])
    var noOfPages = Math.ceil(init.length / Number(noOfEntries))


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
                                                            <option value={init.length.toString()}>All</option>
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
                                                <Table noOfEntries={noOfEntries} searchValue={searchValue} pageNo={pageNo} init={init} setOrders={setOrders} />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12 col-md-5">
                                                <div class="dataTables_info" id="bootstrap-data-table_info" role="status" aria-live="polite">Showing {pageNo * noOfEntries - noOfEntries + 1} to {pageNo * noOfEntries >= init.length ? init.length : pageNo * noOfEntries} of {init.length} entries
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-7">
                                                <div class="dataTables_paginate paging_simple_numbers" id="bootstrap-data-table_paginate">
                                                    <ul class="pagination">

                                                        <li class="paginate_button page-item next" id="bootstrap-data-table_next" hidden={pageNo === 1} >
                                                            <a value={pageNo} onClick={() => {

                                                                setPageNo(prev => prev - 1)
                                                                const pg = pageNo-2
                                                                setN(Math.floor(pg / 3))


                                                            }} class="page-link">Prev</a>
                                                        </li>

                                                        {Math.ceil(init.length / Number(noOfEntries)) >= 1 ?
                                                            <li class="paginate_button page-item">
                                                                <a value={pageNo} onClick={() => { setPageNo(3 * n + 1) }} class="page-link">{3 * n + 1}</a>
                                                            </li>
                                                            : ""
                                                        }
                                                        {Math.ceil(init.length / Number(noOfEntries)) >= 2 ?
                                                            <li class="paginate_button page-item">
                                                                <a value={pageNo} onClick={() => { setPageNo(3 * n + 2) }} class="page-link">{3 * n + 2}</a>
                                                            </li>
                                                            : ""
                                                        }
                                                        {Math.ceil(init.length / Number(noOfEntries)) >= 3 ?
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