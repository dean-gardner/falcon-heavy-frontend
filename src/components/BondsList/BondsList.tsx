import React,{useEffect,useState} from "react";
import axios from 'axios';
import { BondItem } from "./BondItem";
import {TezosToolkit} from '@taquito/taquito'
import './BondsList.css';
import {BondModal} from './BondsModal';


export function  BondsList() {
    const [modalActive,setModalActive]  = useState(false);
    const [keys,setKeys] = useState([]);
    const [activeItem,setActiveItem] = useState({} as any);
    const [tokenAmount, setTokenAmount] = useState(0);
    const getKeys = async (bigMapId : any = 153491) => {
       // const endPoint = 'https://api.hangzhou.tzstats.com';
        const res = await axios.
        get(`https://api.hangzhou2net.tzkt.io/v1/bigmaps/${bigMapId}/keys`, {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
      })
     return res.data
    }
    
    useEffect(() => {
      //  getKeys()
            const tezos = new TezosToolkit('https://hangzhounet.api.tez.ie');
           tezos.contract.at('KT1AfWJCfbmpGqdSB8rfRCR4Jb1VsBLmhGCV').then(c => {
               c.storage().then((storage: any) => {
                const bigmapId = storage.bonds_marketplace.id.c[0]; 
                 console.log('bigmapId',bigmapId)
                getKeys(bigmapId).then((keys) => {
                    setKeys(keys)
                    console.log('keys',keys);
                    console.log('value',keys[0].value)
                    const keysValues = keys.map((item: any) => (parseInt(item.key)) );
                    console.log('keysValues')
                    console.log('storage.bonds_marketplace',storage.bonds_marketplace.get(keysValues[0]));
                    console.log('keysValues[0]',keysValues)
                })
               })
           })
    },[])


    return (
        <>
        <table>
        <tr>
    <th>Item icons</th>
    <th>Item name</th>
    <th>Market price USD</th>
    <th>ROI</th>
    <th>Duration</th>
            </tr>
        { keys.map((key) =>(
        <BondItem setActiveItem={setActiveItem} setModalActive={setModalActive} item={key.value}/>
    ))}
            </table>
            <BondModal  active={modalActive} setActive={setModalActive}>
                {console.log('active Item',activeItem)}
                <div>
                    <div>TOKENS {activeItem.pair1_token_code} {activeItem.pair2_token_code}</div>
                    <label for='amount'>Token amount</label>
                    <input type='number' id='amount' onChange={
                        (e)=>{
                            setTokenAmount(e.target.value)
                        }
                        } value={tokenAmount} type='number'></input>
                        {tokenAmount > parseInt(activeItem.max_payout) &&<span>Error</span>}
                    <div>ROI {tokenAmount * parseInt(activeItem.ROI)}</div>
                    <div>VESTING period {activeItem.vesting_days_period} months</div>
                    <div>TBV {activeItem.total_bonds_purchased_price_usd}</div>
                </div>
                <div className="buttons">
                    <button className="modal__btn">Confirm</button>
                    <button className="modal__btn cancel__btn" onClick={()=>setModalActive(false)}>Cancel</button>
                </div>
            </BondModal>
            </>
    )
    
}

/* 
  При нажатии кнопки Бонд будет попап виндоу где будет Бонд прайс - инпут с к-вом токенов 
    модерация max_payout: "100"  чтоб это было  больше чем юзер получит как 110 процентов 

   и название токена  в паре 
    pair1_token_code: "CO1"
    pair2_token_code: "CO2"

  + Рои в процентах - сумма вознаграждения в зависимости от введеного значения в инпут
  1 инпут - 


  --- LATER     рядом 2 поля -   к-во Пленти и к-во второго токена



  Еще выводим Вестинг период (з сервера берем его)
  Конфирм Баттон и Баттон Отмена
  Значение TBV - Total Bonded Value  total_bonds_purchased_price_usd: "1"
*/