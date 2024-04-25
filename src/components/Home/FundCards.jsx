import FundCard from "./FundCard";
import {
  funds_1,
  funds_2,
  funds_3,
  funds_4,
  funds_5,
  funds_6,
  funds_7,
  funds_8,
} from "../../assets/home";

const cards = [
  {
    
    image: funds_1,
    
  },
  {
    
    image: funds_2,
    
  },
  {
    
    image: funds_3,
    
  },
  {
    
    image: funds_4,
    
  },
  {
    
    image: funds_5,
    
  },
  {
    
    image: funds_6,
    
  },
  {
   
    image: funds_7,
    
  },
  {
    
    image: funds_8,
    
  },
];

export default function FundCards() {
  return (
    <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
      {cards.map((card) => (
        <FundCard key={card.id} card={card} />
      ))}
    </article>
  );
}
