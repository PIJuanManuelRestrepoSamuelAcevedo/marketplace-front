import "./Card.css";

interface OfferInfo {
  offerId: number;
  ownerUsername: string;
  energySource: string;
  kwhQuantity: number;
  price: number;
}

interface Props {
  body: OfferInfo;
  href: string;
}

const Card = ({ body, href }: Props) => {
  return (
    <li className="link-card">
      <a href={href}>
        <h2>{body.ownerUsername}</h2>
        <p>
          Kwh Quantity: {body.kwhQuantity}
          <br />
          Price: {body.price} EPMT
          <br />
          Main source of energy: {body.energySource}
        </p>
      </a>
    </li>
  );
};

export default Card;
