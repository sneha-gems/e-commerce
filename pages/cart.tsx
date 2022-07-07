import { useEffect, useReducer, useState } from "react";
import Card from "../components/Card";

import Footer from "../components/Footer";
import HeadCom from "../components/HeadCom";
import Navbar from "../components/Navbar";
import { actionName, initialState, reducer } from "../utils/common";

export default function Cart(){
    const [items, setItems] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
     const data = JSON.parse(localStorage.getItem("cart")|| "{}")
     setItems(data)
    },[state])


    return(
    <>
    <HeadCom title={"Cart"}/>
    <Navbar />
    <p>Welcome to cart</p>
    {items.map((item, index) => {
        return <Card data={item} key={index} onClick={() => dispatch({type: actionName.REMOVE_ITEM, payload: item})}/>
    })}
    
    <Footer />
    </>
    )
}