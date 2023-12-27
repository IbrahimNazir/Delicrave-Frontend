import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Error404() {
    const homePageHistory = useHistory()
    const handleHomePage = () => {
        homePageHistory.push("/admin/dashboard")
    }
    return (
        <>
            <div class="d-flex align-items-center justify-content-center min-hight-100 vh-100" style={{minHeight:"100vh"}}>
                <div class="text-center">
                    <h1 class="display-1 fw-bold">404</h1>
                    <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                    <p class="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <a class="btn btn-primary" onClick={handleHomePage}>Go Home</a>
                </div>
            </div>
        </>)
}

export default Error404