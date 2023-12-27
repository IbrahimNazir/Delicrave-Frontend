import React from 'react'
import Header from './Header'
import AddProduct from '../pages/AddProduct'

function RightPanel({ onSidebarClick,Page}) {
    return (
        <>
            <div id="right-panel" class="right-panel">
                <Header onSidebarClick={onSidebarClick} />
                <Page/>
            </div>
        </>
    )
}

export default RightPanel