import "./Card.css";

interface BuyerInfo {
  tokensMonth: number;
  energySource: string;
}

interface Props {
  title: string;
  body: BuyerInfo;
  href: string;
}

const Card = ({ title, body, href }) => {
  return (
    <>
      <li className="link-card">
        <a href={href}>
          <h2>{title}</h2>
          <p>
            Average of tokens: {body.tokensMonth} EPMT
            <br />
            Main source of energy: {body.energySource}
          </p>
        </a>
      </li>
    </>
  );
};

export default Card;
