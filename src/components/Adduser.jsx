import React from 'react'
import Navbar from './Navbar'

const Adduser = () => {
    return (
        <div className="bg-info-subtle min-vh-100 py-4">
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                `<label htmlFor="" className="form-label">User Id</label>
                                <input type="text" className="form-control" />`
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" name="" id="" className="form-control" />                        </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <>
                                    <h4>Address</h4>

                                    <label htmlFor="street" className="form-label">Street</label>
                                    <input type="text" className="form-control" id="street" name="street" placeholder="" />

                                    <label htmlFor="suite" className="form-label">Suite</label>
                                    <input type="text" className="form-control" id="suite" name="suite" placeholder="" />

                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" name="city" placeholder="" />

                                    <label htmlFor="zipcode" className="form-label">Zip Code</label>
                                    <input type="text" className="form-control" id="zipcode" name="zipcode" placeholder="" />

                                    <h5>Geo Location</h5>

                                    <label htmlFor="lat" className="form-label">Latitude</label>
                                    <input type="text" className="form-control" id="lat" name="lat" placeholder="" />

                                    <label htmlFor="lng" className="form-label">Longitude</label>
                                    <input type="text" className="form-control" id="lng" name="lng" placeholder="" />
                                </>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Website</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <>
                                    <h4>Company Details</h4>

                                    <label htmlFor="companyName" className="form-label">Company Name</label>
                                    <input type="text" className="form-control" id="companyName" placeholder="" />

                                    <label htmlFor="catchPhrase" className="form-label">Catch Phrase</label>
                                    <input type="text" className="form-control" id="catchPhrase" placeholder="" />

                                    <label htmlFor="bs" className="form-label">Business Strategy</label>
                                    <input type="text" className="form-control" id="bs" placeholder="" />
                                </>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adduser