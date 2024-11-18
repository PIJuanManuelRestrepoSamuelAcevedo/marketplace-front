import Card from "./Card";

  //const base_url = import.meta.env.PUBLIC_TRANSACTION_API;
  const offer_url = "https://transaccional-api.onrender.com" + "/offers/get-offers";
  // Maybe use state for this one. At the time i am just visualizing the fetch.
  const response = await fetch(offer_url)
    .then((response) => {
      if (response.ok) return response.json();
    })
    .catch(() => console.error(`An error occurred fetching from ${offer_url}`));

const OfferPanel = () => {

    let offers = response;

    return (
    
    <div className="flex flex-col flex-wrap md:flex-row justify-center gap-2 p-2">

        {offers.map((offer)=>(
            <div key={offer.offerId}>
                <Card body={offer} href={`/comprar/${offer.offerId}`}/>
            </div>
        ))}
    </div>
    );    
};

export default OfferPanel;