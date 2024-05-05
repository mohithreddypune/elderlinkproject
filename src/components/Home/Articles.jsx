import React, { useState, useEffect } from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import "./FundCards.css";
import { a1, a2, a3, a4, a5, a6, a7, a8,a9, a10, a11,a12, a13, a14, a15, a16, a17,a18,a19,a20,a21  } from "../../assets/home";


const allCards = [
  {
    id: 1,
    topic: "How Social Connections Keep Seniors Healthy",
    image: a1,
    url: "https://greatergood.berkeley.edu/article/item/how_social_connections_keep_seniors_healthy",
  },
  {
    id: 2,
    topic: "Older adults have more control over their aging than they think",
    image: a2,
    url: "https://www.apa.org/monitor/2020/10/adults-control-aging",
  },
  {
    id: 3,
    topic: "Common Medications for Older Adults",
    image: a3,
    url: "https://www.webmd.com/healthy-aging/common-medications-for-older-adults",
  },
  {
    id: 4,
    topic: "From Stores to Screens: The Older Adults’ Online Shopping Experience",
    image: a4,
    url: "https://userway.org/blog/older-adults-online-shopping/",
  },
  {
    id: 5,
    topic: "6 Common Medication Problems in Aging, & What You Can Dos",
    url: "https://betterhealthwhileaging.net/6-medication-problems-aging/",
    image: a5,
  },
  {
    id: 6,
    topic: "New report finds scammers are repeatedly targeting older people",
    image: a6,
    url: "https://techxplore.com/news/2023-11-scammers-older-people.html#:~:text=Two%20out%20of%20three%20older%20people%20have%20been,40%25%20suffered%20illegal%20approaches%20on%20a%20monthly%20basis",
  },
  {
    id: 7,
    topic: "How Teens Today Are Different from Past Generations",
    image: a7,
    url: "https://greatergood.berkeley.edu/article/item/how_teens_today_are_different_from_past_generations",
  },
  {
    id: 8,
    topic: "20 Questions to Ask Your Mother",
    image: a8,
    url: "https://greatergood.berkeley.edu/article/item/20_questions_to_ask_your_mother",
  },
  {
    id: 9,
    topic: "Climbing stairs may improve heart health, promote longevity",
    image: a9,
    url: "https://www.medicalnewstoday.com/articles/climbing-stairs-may-improve-heart-health-promote-longevity",
  },
  {
    id: 10,
    topic: "17 Crazy Medical Practices Around the World! ",
    image: a10,
    url: "https://www.news18.com/photogallery/world/17-crazy-medical-practices-around-the-world-check-out-pics-1600787.html",
  },
  {
    id: 11,
    topic: "Top 5 Medical Breakthroughs ",
    image: a11,
    url: "https://www.aarp.org/health/conditions-treatments/info-2023/top-medical-breakthroughs.html",
  },
  {
    id: 12,
    topic: "10 Common Chronic Diseases In Seniors",
    image: a12,
    url: "https://dailycaring.com/prevent-and-manage-the-10-most-common-chronic-diseases-in-older-adults/",
  },
  {
    id: 13,
    topic: "Aging and Diseases of the Heart ",
    image: a13,
    url: "https://www.ahajournals.org/doi/10.1161/01.CIR.0000086898.96021.B9",
  },
  {
    id: 14,
    topic: "Common Age-Related Diseases and Conditions",
    image: a14,
    url: "https://www.verywellhealth.com/age-related-diseases-2223996",
  },
  {
    id: 15,
    topic: "These 10 Signs May Indicate Mental Illness in the Elderly",
    image: a15,
    url: "https://www.bellavistahealth.com/blog/mental-illness-signs-in-the-elderly",
  },
  {
    id: 16,
    topic: "How Seniors Can Avoid Misdiagnosis",
    image: a16,
    url: "https://www.improvediagnosis.org/dxiq-column/how-seniors-can-avoid-misdiagnosis/",
  },
  {
    id: 17,
    topic: "Why It’s Important That Seniors Have a Social Life",
    image: a17,
    url: "https://www.walkermethodist.org/blog/why-its-important-for-seniors-to-have-a-social-life",
  },
  {
    id: 18,
    topic: "Top 5 Ways for the Aging to Remain Socially Engaged",
    image: a18,
    url: "https://health.howstuffworks.com/wellness/aging/senior-health-lifestyle/socially-engaged.htm",
  },
  {
    id: 19,
    topic: "4 Ways Socializing Benefits Older Adult",
    image: a19,
    url: "https://avantgardeseniorliving.com/senior-activities/4-ways-socializing-benefits-older-adults/",
  },
  {
    id: 20,
    topic: "What happens when old and young connect ?",
    image: a20,
    url: "https://greatergood.berkeley.edu/article/item/what_happens_when_old_and_young_connect",
  },
  {
    id: 21,
    topic: "Why children should interact with Seniors ?",
    image: a21,
    url: "https://www.dupageseniorcouncil.org/why-children-should-interact-with-seniors/",
  },
];

export default function FundCards() {
    const [selectedTopic, setSelectedTopic] = useState("All"); // State to track the selected topic
    const filteredCards = selectedTopic === "All" ? allCards : allCards.filter(card => card.topic.includes(selectedTopic)); // Filter cards based on the selected topic
  
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
      }, []);

    const handleTopicChange = (topic) => {
      setSelectedTopic(topic);
    };
  
  
    return (
      <section className="my-14">
        <Container>
          <SectionTitle title="Latest Articles" classes="text-center" />
          <div className="flex justify-center items-center mb-4">
            <span className="mr-2 font-bold">Filter by Topic:</span>
            <select
              className="border border-gray-300 rounded-md py-1 px-2"
              value={selectedTopic}
              onChange={(e) => handleTopicChange(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Social Connections">Social Connections</option>
              <option value="Aging">Aging Control</option>
              <option value="Medication">Medications</option>
              <option value="Shopping">Online Shopping</option>
              <option value="scammers">Scammers</option>
              <option value="Medical">Medical</option>
              <option value="Health">Health</option>
              <option value="Seniors">Seniors</option>



            </select>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-start mt-8">
            {filteredCards.map((card) => (
              <div
                className="card h-auto rounded-md border-2 border-gray-200 overflow-hidden"
                key={card.id}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img src={card.image} alt={card.topic} />
                </div>
                <article className="px-4 py-2">
                  <h2 className="font-bold text-[25px] hover:text-[#6D9886] transition-colors cursor-pointer my-4">
                    <a href={card.url} className="s1" target="_blank" rel="noopener noreferrer">{card.topic}</a>
                  </h2>
                  <a href={card.url} target="_blank" rel="noopener noreferrer" className="block mx-auto text-[#6D9886] mt-2">
                    Read more
                  </a>
                </article>
              </div>
            ))}
          </div>
          < br></br>
          {/* <div className="text-xl text-center more_news_gradient h-44 w-full text-black font-bold uppercase py-4 flex items-end justify-center relative z-20">
            <a className="cursor-pointer">More news</a>
          </div> */}
        </Container>
      </section>
    );
  }