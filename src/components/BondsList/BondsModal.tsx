import React, { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import './BondsModal.css';



export function BondModal({active,setActive,children}) {
    return (
       <div className={active ? 'modal active' : 'modal'} onClick={()=> setActive(false)}>
           <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
            {children}
           </div>
       </div>
               )

}