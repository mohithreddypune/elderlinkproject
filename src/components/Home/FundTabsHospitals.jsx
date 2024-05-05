import React, { useState,  } from "react";
import Container from "../Container";
import "./Hospitals.css";
import { h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16 } from "../../assets/home/Hospitals";


const allCards = [
    
      {
        id: 3,
        topic: "Mount Sinai Morningside",
        patientrating:"55%", 
        user:"72%",    
        image:h3,
        facility:"53%",
        address:"1111 Amsterdam Ave New York, NY 10025",
        phno:"(212) 257-2032",
        url: "https://www.healthgrades.com/hospital-directory/new-york-ny-manhattan/mount-sinai-morningside-hgstc80a7b36330046",
      },
      
      
      {
        id: 5,
        topic: "NYC Health + Hospitals/​Queens",
        patientrating:"64%", 
        user:"76%",    
        image:h5,
        facility:"53%",
        address:"8268 164th St Jamaica, NY 11432",
        phno:"(718) 883-3000",
        url: "https://www.healthgrades.com/hospital-directory/new-york-ny-queens/nyc-health-hospitals-queens-hgst600a7b3633023",
      },
      {
        id: 1,
        topic: "NewYork-Presbyterian Brooklyn Methodist Hospital",
        patientrating:"67%", 
        user:"75%",    
        image:h1,
        facility:"55%",
        address:"506 6th St Brooklyn, NY 11215",
        phno:"(718) 355-9811",
        url: "https://www.healthgrades.com/hospital-directory/new-york-ny-nyc-suburbs-long-island/newyork-presbyterian-brooklyn-methodist-hospital-hgstb00a7b36330236",
      },
  
      {
        id: 6,
        topic: "St. Francis Hospital & Heart Center",
        patientrating:"80%", 
        user:"78%",    
        image:h6,
        facility:"49%",
        address:"100 Port Washington Blvd Roslyn, NY 11576",
        phno:"(516) 562-6000",
        url: "https://www.healthgrades.com/hospital-directory/new-york-ny-nyc-suburbs-long-island/st-francis-hospital-heart-center-hgsta30a7b36330182",
      },
     
      {
        id: 9,
        topic: "New York Presbyterian Hospital",
        patientrating:"70%", 
        user:"76%",    
        image:h9,
        facility:"53%",
        address:"525 E 68th St New York, NY 10065",
        phno:"(212) 235-1579",
        url: "https://www.healthgrades.com/hospital-directory/new-york-ny-manhattan/new-york-presbyterian-hospital-hgst750a7b36330101",
      },
      {
        id: 10,
        topic: "Cooperman Barnabas Medical Center",
        patientrating:"64%", 
        user:"75%",    
        image:h10,
        facility:"61%",
        address:"94 Old Short Hills Rd Livingston, NJ 07039",
        phno:"(973) 322-5000",
        url: "https://www.healthgrades.com/hospital-directory/new-jersey-nj-north/cooperman-barnabas-medical-center-hgstc9380596310076",
      },
      {
        id: 11,
        topic: "Maimonides Midwood Community Hospital",
        patientrating:"54%", 
        user:"68%",    
        image:h11,
        facility:"67%",
        address:"2525 Kings Hwy Brooklyn, NY 11229",
        phno:"(718) 692-5300",
        url: "https://www.healthgrades.com/hospital-directory/new-york-ny-nyc-suburbs-long-island/maimonides-midwood-community-hospital-hgst8a0a7b36330019",
      },

      {
        id: 16,
        topic: "Jamaica Hospital Medical Center",
        patientrating:"51%", 
        user:"71%",    
        image:h16,
        facility:"50%",
        address:"8900 Van Wyck Expy Jamaica, NY 11418",
        phno:"(718) 206-6000",
        url: "https://www.healthgrades.com/hospital-directory/new-york-ny-queens/jamaica-hospital-medical-center-hgst5a0a7b36330014",
      },];


  export default function FundCards() {
    const [selectedTopic, setSelectedTopic] = useState("All"); // State to track the selected topic
    const filteredCards = selectedTopic === "All" ? allCards : allCards.filter(card => card.topic.includes(selectedTopic)); // Filter cards based on the selected topic
  
    
    const handleTopicChange = (topic) => {
      setSelectedTopic(topic);
    };
    return (
      <section className="my-14">
        <Container>
          {/* <SectionTitle title="Latest Funding News" classes="text-center" /> */}
          <div id="grid" className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-start mt-8">
            {filteredCards.map((card) => (
              <div id="name"
                className="card h-auto rounded-md border-2 border-gray-200 overflow-hidden"
                key={card.id}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img src={card.image} alt={card.topic} />
                </div>
                <article className="px-4 py-2">
                  <h2 id="size" className=" hover:text-[#6D9886] transition-colors cursor-pointer my-4">
                    <a id="size2" href={card.url} className="s1" target="_blank" rel="noopener noreferrer">{card.topic}</a>
                  </h2>
                  <p><span className="text">Patient Rating: </span> {card.patientrating}</p>
                  <p><span className="text">Care Team: </span> {card.user}, <span className="text"> Facility: </span>{card.facility}</p>
                  <p> </p>
                  <p><span className="text">Address: </span>{card.address}</p>
                  <p><span className="text">Ph no:</span>{card.phno}</p><br></br>
                  {/* <a href={card.url} target="_blank" rel="noopener noreferrer" className="block mx-auto text-[#6D9886] mt-2">
                    Read more
                  </a> */}
                </article>
              </div>
            ))}
          </div>
          < br></br>          < br></br>          < br></br>
          <div  className="hovering text-xl text-center more_news_gradient h-44 w-full text-black font-bold uppercase py-4 flex items-end justify-center relative z-20">
            <a href="/hospitals" className="cursor-pointer">More hospitals</a>
          </div>
        </Container>
      </section>
    );
  }