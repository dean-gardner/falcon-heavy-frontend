import React, { useEffect, useState } from "react";
import './BondItem.css';




export function BondItem({setActiveItem,setModalActive,item}) {

    console.log('item',item)
    return (
        <tr>
            <td>{item.icon}</td>
            <td>{item.pair1_token_code} {item.pair2_token_code}</td>
            <td>{item.market_price_in_usd}</td>
            <td>{item.ROI}</td>
            <td>{item.vesting_days_period}</td>
            <td><button onClick={()=>{
                setActiveItem(item);
                setModalActive(true);
                }} 
                className="bond_btn">Bond</button></td>
        </tr>
               )

}