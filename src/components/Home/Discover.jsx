import { discover_1, discover_2, discover_3,discover_4,discover_5 } from "../../assets/home";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import { Link } from 'react-router-dom'; 

const cards = [
  {
    id: 1,
    image: discover_1,
    title: "Articles",
    link: "/articles", 
  },
  {
    id: 2,
    image: discover_2,
    title: "Doctors",
    link: "/doctors",
  },
  {
    id: 3,
    image: discover_4,
    title: "Hospitals",
    link: "/hospitals",
  },
  {
    id: 4,
    image: discover_3,
    title: "Events",
    link:"/events"
  },
];

const DiscoverCard = ({ card }) => {
  return (
    <Link to={card.link}> 
      <div className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
        <img src={card.image} alt="discover_image" />
        <div className="absolute bottom-10 capitalize left-10 text-white font-bold md:text-[50px] text-[40px]">
          {card.title}
        </div>
      </div>
    </Link>
  );
};

export default function Discover() {
  return (
    <section className="my-14">
      <Container>
        <div>
          <SectionTitle title="Category" />
          <div className="grid lg:grid-cols-4 mt-8 sm:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
            {cards.map((card) => (
              <DiscoverCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}