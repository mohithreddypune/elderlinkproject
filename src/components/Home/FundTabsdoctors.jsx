import React, { useState, useEffect } from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import "./Doctors.css";
import { d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,} from "../../assets/home/Doctors";


const allCards = [
    {
        id: 13,
        image:d13,
        topic: "Dr. Christopher Kalhorn, MD",
        patientrating:"5.0", 
        spec:"Neurosurgery",    
        address:"5454 Wisconsin Ave Ste 1225 Chevy Chase, MD 20815",
        phno:"(301) 280-4160",
        url: "https://www.healthgrades.com/physician/dr-christopher-kalhorn-3jcbv?what=Neurosurgery",
      },
      {
        id: 14,
        image:d14,
        topic: "Dr. Richard Pergolizzi, MD",
        patientrating:"4.1", 
        spec:"Interventional Neuroradiology",    
        address:"3833 Fairfax Dr Ste 400 Arlington, VA 22203",
        phno:"(703) 908-0800",
        url: "https://www.healthgrades.com/physician/dr-richard-pergolizzi-xppdb?what=Neurosurgery",
      },
    {
    id: 1,
    image:d1,
    topic: "Dr. Elliot Schreiber, DMD",
    patientrating:"5.0", 
    spec:"Dentistry",    
    address:"42 Broadway Ste 1515 New York, NY 10004",
    phno:"(646) 494-8112",
    url: "https://www.healthgrades.com/dentist/dr-elliot-schreiber-3sjsm?what=Dentistry",
  },
  
  {
    id: 4,
    image:d4,
    topic: "Dr. Evan Lynn, DDS",
    patientrating:"3.3", 
    spec:"Dentistry",    
    address:"42 Broadway Ste 1515 New York, NY 10004",
    phno:"(646) 355-8903",
    url: "https://www.healthgrades.com/dentist/dr-evan-lynn-2tckp?what=Dentistry",
  },
  {
    id: 5,
    image:d5,
    topic: "Dr. Charles Jobin, MD",
    patientrating:"4.8", 
    spec:"Orthopedic Surgery",    
    address:"51 W 51st St New York, NY 10019",
    phno:"(212) 235-1519",
    url: "https://www.healthgrades.com/physician/dr-charles-jobin-2l3pl?what=Orthopedic%20Surgery",
  },
  
 
  {
    id: 10,
    image:d10,
    topic: "Dr. John Juhl, DO",
    patientrating:"5.0", 
    spec:"Neuromusculoskeletal Medicine",    
    address:"61 Broadway Rm 910 New York, NY 10006",
    phno:"(212) 344-5361",
    url: "https://www.healthgrades.com/physician/dr-john-juhl-xvrxt?what=Family%20Medicine",
  },
  {
    id: 11,
    image:d11,
    topic: "Dr. Charmi Patel, MD",
    patientrating:"3.8", 
    spec:"Family Medicine",    
    address:"324 Palisade Ave Fl 2 Jersey City, NJ 07307",
    phno:"(201) 299-4507",
    url: "https://www.healthgrades.com/physician/dr-charmi-patel-xypxfcx?what=Family%20Medicine",
  },
  {
    id: 8,
    image:d8,
    topic: "Dr. Michael Fu, MD",
    patientrating:"4.6", 
    spec:"Orthopedic Surgery",    
    address:"535 E 70th St New York, NY 10021",
    phno:"(212) 606-1991",
    url: "https://www.healthgrades.com/physician/dr-michael-fu-xyllgsb?what=Orthopedic%20Surgery",
  },
  
  // {
  //   id: 17,
  //   image:d1,
  //   topic: "",
  //   patientrating:"", 
  //   spec:"",    
  //   address:"",
  //   phno:"",
  //   url: "",
  // },
  
];

export default function FundCards() {
    const [selectedSpec, setSelectedSpec] = useState("All"); // State to track the selected specialty
  const filteredCards = selectedSpec === "All" ? allCards : allCards.filter(card => card.spec.includes(selectedSpec)); // Filter cards based on the selected specialty

 

  const handleSpecChange = (spec) => {
    setSelectedSpec(spec);
  };


  return (
    <section className="my-14">
      <Container>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-start mt-8">
          {filteredCards.map((card) => (
            <div
              className="card h-auto rounded-md border-2 border-gray-200 overflow-hidden"
              key={card.id}
            >
              <div className="relative rounded-xl overflow-hidden">
                <img id="imgdoc" src={card.image} alt={card.topic} />
              </div>
              <article className="px-4 py-2">
                <h2 id="head" className="font-bold text-[25px] hover:text-[#6D9886] transition-colors cursor-pointer my-4">
                  <a id="head2" href={card.url} className="s1" target="_blank" rel="noopener noreferrer">{card.topic}</a>
                </h2>
                <p id="t">  {card.spec}</p>
                <p><span className="text1">Patient Rating: </span> {card.patientrating}</p>
                <p> </p>
                <p><span className="text1">Address: </span>{card.address}</p>
                <p><span className="text1">Ph no:</span>{card.phno}</p><br></br>
              </article>
            </div>
          ))}
        </div>
        < br></br>          < br></br>          < br></br>
        <div className="hovering text-xl text-center more_news_gradient h-44 w-full text-black font-bold uppercase py-4 flex items-end justify-center relative z-20">
          <a href="/doctors" className="cursor-pointer">More doctors</a>
        </div>
      </Container>
    </section>
  );
}