import { animator } from 'chart.js'
import React, { useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'


function Table({ noOfEntries, searchValue, pageNo, init, setOrders }) {

    const customerDetailHistory = useHistory()
    console.log("I have been called with the value:", init)

    const handleCustomerDetailPage = (id) => {
        customerDetailHistory.push(`/admin/orderdetail/${id}`)
    }

    const [orderDetail, setOrderDetail] = useState(init)

    useEffect(() => {
        console.log("init", init[0].id)
        var initialState = init.filter((order, index) => { return index < ((noOfEntries === '-1') ? (pageNo * index + 1) : pageNo * Number(noOfEntries)) && (((pageNo - 1) * Number(noOfEntries)) <= index) && ((order.id.toString().toLowerCase().includes(searchValue.toLowerCase())) || (order.customer.name.toLowerCase().includes(searchValue.toLowerCase())) || (order.totalamount.toString().toLowerCase().includes(searchValue.toLowerCase())) || (order.customer.address.toLowerCase().includes(searchValue.toLowerCase())) || (order.status.toLowerCase().includes(searchValue.toLowerCase()))) })
        setOrderDetail(initialState)
    }, [noOfEntries, searchValue, pageNo, init])

    useEffect(() => {
        setOrders(orderDetail)

    }, [])
    const [order, setOrder] = useState("ASC")
    const [col, setCol] = useState("name")
    const statusColor = { 'Pending': ['alert alert-danger', 'Pending'], 'Confirmed': ['alert alert-primary', 'Confirmed'], 'On The Way': ['alert alert-success', 'Dispatched'], 'Delivered': ['alert alert-info', 'Delivered'], 'Cancel': ['alert alert-danger', 'Cancel'] }
    var ord = order
    function sortAlphaNumeric(column_name) {
        if (column_name !== col) {
            console.log('before', column_name, col, ord)
            setOrder("ASC")
            setCol(column_name)
            ord = "ASC"
            console.log('after', column_name, col, ord)
        }
        const splitColumn = column_name.split(".")
        if (ord === "ASC" && splitColumn[0] === "customer") {
            const sorted = [...orderDetail].sort((a, b) => a[splitColumn[0]][splitColumn[1]].toString().toLowerCase() > b[splitColumn[0]][splitColumn[1]].toString().toLowerCase() ? 1 : -1)
            setOrderDetail(sorted)
            setOrder("DSC")
        }
        else if (ord === "DSC" && splitColumn[0] === "customer") {
            const sorted = [...orderDetail].sort((a, b) => a[splitColumn[0]][splitColumn[1]].toString().toLowerCase() < b[splitColumn[0]][splitColumn[1]].toString().toLowerCase() ? 1 : -1)
            setOrderDetail(sorted)
            setOrder("ASC")
        }

        else if (ord === "ASC") {
            const sorted = [...orderDetail].sort((a, b) => a[column_name].toString().toLowerCase() > b[column_name].toString().toLowerCase() ? 1 : -1)
            setOrderDetail(sorted)
            setOrder("DSC")
        }
        else if (ord === "DSC") {
            const sorted = [...orderDetail].sort((a, b) => a[column_name].toString().toLowerCase() < b[column_name].toString().toLowerCase() ? 1 : -1)
            setOrderDetail(sorted)
            setOrder("ASC")
        }
    }
    function sortNumeric(column_name) {
        if (column_name !== col) {
            console.log('before', column_name, col, ord)
            setOrder("ASC")
            setCol(column_name)
            ord = "ASC"
            console.log('after', column_name, col, ord)
        }
        if (ord === "ASC") {
            const sorted = [...orderDetail].sort((a, b) => Number(a[column_name]) - Number(b[column_name]))
            setOrderDetail(sorted)
            setOrder("DSC")
        }
        else if (ord === "DSC") {
            const sorted = [...orderDetail].sort((a, b) => Number(b[column_name]) - Number(a[column_name]))
            setOrderDetail(sorted)
            setOrder("ASC")
        }
    }
    function sortDate(column_name) {
        if (column_name !== col) {
            console.log('before', column_name, col, ord)
            setOrder("ASC")
            setCol(column_name)
            ord = "ASC"
            console.log('after', column_name, col, ord)
        }
        if (ord === "ASC") {
            const sorted = [...orderDetail].sort((a, b) => new Date(a[column_name]) - new Date(b[column_name]))
            setOrderDetail(sorted)
            setOrder("DSC")
        }
        else if (ord === "DSC") {
            const sorted = [...orderDetail].sort((a, b) => new Date(b[column_name]) - new Date(a[column_name]))
            setOrderDetail(sorted)
            setOrder("ASC")
        }
    }


    return (
        <>
            <table id="bootstrap-data-table" class="table table-striped table-bordered dataTable no-footer" role="grid" aria-describedby="bootstrap-data-table_info">
                <thead>
                    <tr role="row">
                        <th onClick={() => sortNumeric("id")} class="sorting_asc" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" aria-sort="descending" style={{ width: '80px' }}>OrderID</th>
                        <th onClick={() => sortAlphaNumeric("customer.name")} class="sorting" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" style={{ width: '200.333px' }}>Name </th>
                        <th onClick={() => sortAlphaNumeric("customer.address")} class="sorting" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" style={{ width: '300.333px' }}>Shipping Address </th>
                        <th onClick={() => sortDate("date")} class="sorting" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" style={{ width: '100.333px' }}>Date </th>
                        <th onClick={() => sortNumeric("totalamount")} class="sorting" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" style={{ width: '100.333px' }}>Price </th>
                        <th onClick={() => sortAlphaNumeric("status")} class="sorting" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" style={{ width: '100.333px' }}>Status </th>
                        <th class="sorting" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" style={{ width: '40px' }}>View </th></tr>
                </thead>
                <tbody>
                    {/* {

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
                    */}

                    {orderDetail.map((order, index) => {
                        return (
                            <tr key={index} role="row" class={index % 2 === 0 ? "even" : "odd"}>
                                {console.log(index)}
                                <td className='sorting_1'>{order.id}</td>
                                <td>{order.customer.name}</td>
                                <td>{order.customer.address}</td>
                                <td>{order.date}</td>
                                <td>{order.totalamount}</td>
                                <td>
                                    {/* <select name="select" id="select" class="form-control" style={{ color: "white", backgroundColor: statusColor[order.status], fontWeight: "800" }} value={order.status}
                                        onChange={(e) => {
                                            setOrderDetail(orderDetail.slice(0, index).concat([{ ...order, status: e.target.value }], orderDetail.slice(index + 1)))
                                        }}>
                                        <option style={{ color: 'black', background: "#e7e7e7" }} value="0">Pending</option>
                                        <option style={{ color: 'black', background: "#e7e7e7" }} value="1">Confirmed</option>
                                        <option style={{ color: 'black', background: "#e7e7e7" }} value="2">Dispatch</option>
                                        <option style={{ color: 'black', background: "#e7e7e7" }} value="3">Delivered</option>
                                    </select> */}
                                    <div className={ `${statusColor[order.status][0]} px-2 py-0 my-0 text-center`}>{statusColor[order.status][1]}</div>
                                </td>
                                <td>
                                    <div style={{ textAlign: 'center', color: "green" }} onClick={()=>handleCustomerDetailPage(order.id)}><i className='fa-solid fa-eye'></i></div>
                                </td>

                            </tr>)
                    })}

                </tbody>
            </table>





        </>
    )
}

export default Table