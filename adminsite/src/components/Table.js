import { animator } from 'chart.js'
import React, { useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'


function Table({ noOfEntries, searchValue, pageNo, init, setOrders }) {

    const customerDetailHistory = useHistory()

    const handleCustomerDetailPage = () => {
        customerDetailHistory.push('/admin/orderdetail/1')
    }

    const [orderDetail, setOrderDetail] = useState(init)
    useEffect(() => {
        console.log(init)
        var initialState = init.filter((order, index) => { return index < ((noOfEntries === '-1') ? (pageNo * index + 1) : pageNo * Number(noOfEntries)) && (((pageNo - 1) * Number(noOfEntries)) <= index) && ((order.orderID.toString().includes(searchValue)) || (order.name.includes(searchValue)) || (order.price.includes(searchValue)) || (order.address.includes(searchValue)) || (order.status.includes(searchValue))) })
        setOrderDetail(initialState)
    }, [noOfEntries, searchValue, pageNo])

    useEffect(() => {
        setOrders(orderDetail)

    })
    const [order, setOrder] = useState("ASC")
    const [col, setCol] = useState("name")
    const statusColor = { '0': ['alert alert-danger','Pending'], '1': ['alert alert-primary','Confirmed'], '2': ['alert alert-success','Dispatched'], '3': ['alert alert-info','Delivered'] }
    var ord = order
    function sortAlphaNumeric(column_name) {
        if (column_name !== col) {
            console.log('before', column_name, col, ord)
            setOrder("ASC")
            setCol(column_name)
            ord = "ASC"
            console.log('after', column_name, col, ord)
        }
        if (ord === "ASC") {
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

    return (
        <>
            <table id="bootstrap-data-table" class="table table-striped table-bordered dataTable no-footer" role="grid" aria-describedby="bootstrap-data-table_info">
                <thead>
                    <tr role="row">
                        <th onClick={() => sortAlphaNumeric("orderID")} class="sorting_asc" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" aria-sort="descending" style={{ width: '80px' }}>OrderID</th>
                        <th onClick={() => sortAlphaNumeric("name")} class="sorting" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" style={{ width: '200.333px' }}>Name </th>
                        <th onClick={() => sortAlphaNumeric("address")} class="sorting" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" style={{ width: '300.333px' }}>Shipping Address </th>
                        <th onClick={() => sortAlphaNumeric("price")} class="sorting" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" style={{ width: '100.333px' }}>Date </th>
                        <th onClick={() => sortAlphaNumeric("price")} class="sorting" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" style={{ width: '100.333px' }}>Price </th>
                        <th onClick={() => sortAlphaNumeric("status")} class="sorting" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" style={{ width: '100.333px' }}>Status </th>
                        <th onClick={() => sortAlphaNumeric("status")} class="sorting" tabindex="0" aria-controls="bootstrap-data-table" rowspan="1" colspan="1" style={{ width: '40px' }}>View </th></tr>
                </thead>
                <tbody>

                    {orderDetail.map((order, index) => {
                        return (
                            <tr key={index} role="row" class={index % 2 === 0 ? "even" : "odd"}>
                                {console.log(index)}
                                <td className='sorting_1'>{order.orderID}</td>
                                <td>{order.name}</td>
                                <td>{order.address}</td>
                                <td>{order.price}</td>
                                <td>{order.price}</td>
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
                                    <div className={statusColor[order.status][0]+' px-2 py-0 my-0 text-center'}>{statusColor[order.status][1]}</div>
                                </td>
                                <td>
                                    <div style={{ textAlign: 'center', color: "green" }}  onClick={handleCustomerDetailPage}><i className='fa-solid fa-eye'></i></div>
                                </td>

                            </tr>)
                    })}

                </tbody>
            </table>





        </>
    )
}

export default Table