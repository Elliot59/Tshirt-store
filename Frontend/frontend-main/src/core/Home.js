import React, {useState, useEffect} from "react";
import {getProducts} from "./helper/coreapicall";
import Base from "./Base";
import "../styles.css"
import Card from "./Card";


export default function Home(){
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    const loadAllProducts = () => {
        getProducts()
            .then( (data) => {
                if(data.error){
                    setError(data.error)
                    console.log(error)
                }
                else {
                    setProducts(data)
                }
        })
    }

    useEffect(() => {loadAllProducts()}, [])

    return(
        <Base title="Home Page" description="Welcome to Tshirt store">
            <h1>Homepage</h1>
            <br/>
            <div className="row">
                {products.map((product, index) => {
                    return(
                        <div key={index} className="col-4 mb-4">
                            <h1>
                                <Card product={product}/>
                            </h1>
                        </div>
                    )
                })}
            </div>
        </Base>
    );

}