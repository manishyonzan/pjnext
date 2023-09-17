"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";


const Clickedshow = () => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        productname: "random",
        description: "ddd",
        price: "123"
    })
    let formdata = "hello";

    useEffect(() => {
        let gdata = localStorage.getItem("clickeditem");
        let gotdata = JSON.parse(JSON.parse(gdata));
        setData(gotdata)
        console.log(gotdata);
        formdata = "name" + data.productname + "Price" + data.price

    }, []);

    const showfunction = () => {
        setShow(true);
    }

    return (
        <div className="flex">
            <div className="m-3">

                <Image
                    src={`/${data.imagename}`}
                    alt="My Image"
                    width={600}
                    height={600} />
            </div>
            <div className="border border-gray-200 relative">
                <h2>{data.productname}</h2>
                <p>{data.description}</p>
                <p>{data.price}</p>
                <div className="absolute bottom-5 right-5">
                {show?<div></div>:<Button variant="contained" className="bg-blue-500" color="primary" onClick={showfunction} >Buy</Button>}
                </div>
                {show ? <div>

                    <form className="formemail flex flex-col border border-gray-400 bg-blue-200" action="https://formsubmit.co/" method="POST">
                        <input className="hidden" type="text" name="Product" placeholder="Name" defaultValue={formdata} />
                        <h2>Give your Email or Phone number</h2>
                        <input className="border border-gray-400" type="text" name="name" placeholder="Name" required />
                        <input className="border border-gray-400" type="text" name="contact" placeholder="Email or Phone" required />
                        <input className="border border-gray-400" type="text" name="Address" placeholder="Address" required />
                        

                        <button className="hover:text-blue-500 hover:bg-blue-400 hover:text-white" type="submit">Send</button>
                    </form>
                </div> : <div></div>}
            </div>




        </div>
    )
}

export default Clickedshow
