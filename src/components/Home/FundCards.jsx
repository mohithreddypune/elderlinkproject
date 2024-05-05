import React from "react";
import { a1, a2, a3, a4, a5, a6, a7, a8, news_4, news_5 } from "../../assets/home";
// import{a1} from "../../assets/home/a1.png"
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import "./FundCards.css"; 

const cards = [
  {
    id: 1,
    topic:
      "How Social Connections Keep Seniors Healthy",
    image: a1,
    url:"https://greatergood.berkeley.edu/article/item/how_social_connections_keep_seniors_healthy",
  },
  {
    id: 2,
    topic: "Older adults have more control over their aging than they think ",
    image: a2,
    url:"https://www.apa.org/monitor/2020/10/adults-control-aging",
  },
  {
    id: 3,
    topic:
      "Common Medications for Older Adults",
    image: a3,
    url:"https://www.webmd.com/healthy-aging/common-medications-for-older-adults",
  },
  
  {
    id: 4,
    topic: "From Stores to Screens: The Older Adults’ Online Shopping Experience",
    image: a4,
    url:"https://userway.org/blog/older-adults-online-shopping/",
  },
  {
    id: 5,
    topic: "6 Common Medication Problems in Aging, & What You Can Dos",
    url:"https://betterhealthwhileaging.net/6-medication-problems-aging/",
    image: a5,
  },
  {
    id: 6,
    topic: "New report finds scammers are repeatedly targeting older people",
    image: a6,
    url:"https://techxplore.com/news/2023-11-scammers-older-people.html#:~:text=Two%20out%20of%20three%20older%20people%20have%20been,40%25%20suffered%20illegal%20approaches%20on%20a%20monthly%20basis",
  },
  {
    id: 7,
    topic:
      "How Teens Today Are Different from Past Generations",
    image: a7,
    url:"https://greatergood.berkeley.edu/article/item/how_teens_today_are_different_from_past_generations",
  },
  {
    id: 8,
    topic: "20 Questions to Ask Your Mother",
    image: a8,
    url:"https://greatergood.berkeley.edu/article/item/20_questions_to_ask_your_mother",
  },
];

export default function FundCards() {
  return (
    <section className="my-14">
      <Container>
        {/* <SectionTitle title="Latest Funding News" classes="text-center" /> */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-start mt-8">
          {cards.map((card) => (
            <div
              className="card h-auto rounded-md border-2 border-gray-200 overflow-hidden"
              key={card.id}
            >
              <div className="relative rounded-xl overflow-hidden">
                <img src={card.image} alt="fund1" />
              </div>
              <article className="px-4 py-2">
                <h2 className="font-bold text-[25px] hover:text-[#6D9886] transition-colors cursor-pointer my-4">
                  <a href={card.url} className="s1" target="_blank" rel="noopener noreferrer">{card.topic}</a>
                </h2> 
                {/* <p className="font-light text-[14px]">{card.text}</p> */}
                <a href={card.url} target="_blank" rel="noopener noreferrer" className="block mx-auto text-[#6D9886] mt-2">
                  Read more
                </a>
              </article>
            </div>
          ))}
        </div>
        < br></br>        < br></br>        < br></br>    


        <div  className="hovering text-xl text-center more_news_gradient h-44 w-full text-black font-bold uppercase py-4 flex items-end justify-center relative z-20">
          <a href="/articles" className="cursor-pointer">More articles</a>
        </div>
      </Container>
    </section>
  );
}