import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewuser = () => {
    const [uname, xuname] = useState( [] )
        const fetchData=()=>{
           axios.get("https://jsonplaceholder.typicode.com/users").then(
              (response)=>{
                xuname(response.data)
              }
           ).catch() 
        }
        useEffect(()=>{fetchData()},[])
    return (
        <div className='bg-primary-subtle p-4 rounded'>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {uname.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                                            <div className="card h-100">
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.name}</h5>
                                                    <h6 class="card-subtitle mb-2 text-body-secondary">ID:{value.id}   Username: {value.username}</h6>
                                                    <h6 class="card-subtitle mb-2 text-body-secondary"><b>Mobile:</b>{value.phone} <b>Email:</b>{value.email}</h6>
                                                    <p class="card-text"><b>Address:</b> {value.address.street}, {value.address.suite}, {value.address.city}, {value.address.zipcode}</p>
                                                    <p class="card-text"><b>Company:</b> {value.company.name}, {value.company.catchPhrase}, {value.company.bs}</p>
                                                    <a href="#" class="card-link">{value.website}</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewuser