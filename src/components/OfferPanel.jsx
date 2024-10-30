import { useEffect, useState } from "react";
import Card from "./Card";

const OfferPanel = () => {


    let dummy = { tokensMonth: 2, energySource: "Solar" };
    let dummy2 = {
    tokensMonth: 102,
    energySource: "Hydroelectric",
    };

    const initialOffers = [
        {id:1, title:"JuanM-UdeA", body:dummy2},
        {id:2, title: "DiegoB-UdeA", body:dummy}, 
        {id:100, title: "Samuel-UdeA", body:dummy},
        {id:1, title:"JuanM-UdeA", body:dummy2},
        {id:2, title: "DiegoB-UdeA", body:dummy}, 
        {id:100, title: "Samuel-UdeA", body:dummy},
        {id:1, title:"JuanM-UdeA", body:dummy2},
        {id:2, title: "DiegoB-UdeA", body:dummy}, 
        {id:100, title: "Samuel-UdeA", body:dummy},
        {id:1, title:"JuanM-UdeA", body:dummy2},
        {id:2, title: "DiegoB-UdeA", body:dummy}, 
        {id:100, title: "Samuel-UdeA", body:dummy},
        {id:1, title:"JuanM-UdeA", body:dummy2},
        {id:2, title: "DiegoB-UdeA", body:dummy}, 
        {id:100, title: "Samuel-UdeA", body:dummy},
    ];

    const [offers, setOffers] = useState(initialOffers);

    const offer_url = import.meta.env.TRANSACTION_API;

    useEffect(()=>{
        // Maybe use state for this one. At the time i am just visualizing the fetch.
        fetch(offer_url)
        .then((response) => {
            if (response.ok) return response.json();
        })
        .then((fetchedData) => {
            setOffers(fetchedData);
        })
        .catch(() => console.error(`An error occurred fetching from ${offer_url}`));

    },[]);

    //console.log(initialOffers)

    return (
    
    <div class="flex flex-col flex-wrap md:flex-row justify-center gap-2 p-2">

        {offers.map((offer)=>(
            <div>
                <Card title={offer.title} body={offer.body} href={`/comprar/${offer.id}`}/>
            </div>
        ))}
    </div>
    );    
};

export default OfferPanel;