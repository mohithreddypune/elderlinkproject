import React, { useState, useEffect } from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import "./Hospitals.css";
import { h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16 } from "../../assets/home/Hospitals";


const allCards = [
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
    id: 2,
    topic: "Lenox Hill Hospital",
    patientrating:"67%", 
    user:"79%",    
    image:h2,
    facility:"48%",
    address:"100 E 77th St New York, NY 10075",
    phno:"(212) 434-2000 ",
    url: "https://www.healthgrades.com/hospital-directory/new-york-ny-manhattan/lenox-hill-hospital-hgst760a7b36330119",
  },
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
    id: 4,
    topic: "North Shore University Hospital",
    patientrating:"69%", 
    user:"73%",    
    image:h4,
    facility:"51%",
    address:"300 Community Dr Manhasset, NY 11030",
    phno:"(516) 562-0100",
    url: "https://www.healthgrades.com/hospital-directory/new-york-ny-nyc-suburbs-long-island/north-shore-university-hospital-hgstb50a7b36330106",
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
    id: 7,
    topic: "Mather Hospital",
    patientrating:"77%", 
    user:"79%",    
    image:h7,
    facility:"63%",
    address:"75 N Country Rd Port Jefferson, NY 11777",
    phno:"(631) 473-1320",
    url: "https://www.healthgrades.com/hospital-directory/new-york-ny-nyc-suburbs-long-island/mather-hospital-hgstd00a7b36330185",
  },
  {
    id: 8,
    topic: "Jersey City Medical Center",
    patientrating:"63%", 
    user:"73%",    
    image:h8,
    facility:"54%",
    address:"355 Grand St Jersey City, NJ 07302",
    phno:"(201) 915-2000",
    url: "https://www.healthgrades.com/hospital-directory/new-jersey-nj-north/jersey-city-medical-center-hgsta9380596310074",
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
    id: 12,
    topic: "Johns Hopkins Bayview Medical Center",
    patientrating:"68%", 
    user:"78%",    
    image:h12,
    facility:"51%",
    address:"4940 Eastern Ave Baltimore, MD 21224",
    phno:"(410) 550-0100",
    url: "https://www.healthgrades.com/hospital-directory/maryland-md-baltimore/johns-hopkins-bayview-medical-center-hgsta2857767210029",
  },
  {
    id: 13,
    topic: "Cleveland Clinic",
    patientrating:"77%", 
    user:"81%",    
    image:h14,
    facility:"52%",
    address:"9500 Euclid Ave Cleveland, OH 44195",
    phno:"(216) 444-2200",
    url: "https://www.healthgrades.com/hospital-directory/ohio-oh/cleveland-clinic-hgst62e80596360180",
  },
  {
    id: 14,
    topic: "Jefferson Einstein Hospital",
    patientrating:"61%", 
    user:"74%",    
    image:h13,
    facility:"57%",
    address:"5501 Old York Rd Philadelphia, PA 19141",
    phno:"(215) 395-6885",
    url: "https://www.healthgrades.com/hospital-directory/pennsylvania-pa-philadelphia/jefferson-einstein-hospital-hgst436ae6a6390142",
  },
  {
    id: 15,
    topic: "Montefiore Medical Center",
    patientrating:"60%", 
    user:"75%",    
    image:h15,
    facility:"55%",
    address:"111 E 210th St Bronx, NY 10467",
    phno:"(718) 920-4321",
    url: "https://www.healthgrades.com/hospital-directory/new-york-ny-nyc-suburbs-long-island/montefiore-medical-center-hgst890a7b36330059",
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
  },
//   {
//     id: 17,
//     topic: "",
//     patientrating:"", 
//     user:"",    
//     image:h1,
//     facility:"",
//     address:"",
//     phno:"",
//     url: "",
//   },
//   {
//     id: 18,
//     topic: "",
//     patientrating:"", 
//     user:"",    
//     image:h1,
//     facility:"",
//     address:"",
//     phno:"",
//     url: "",
//   },

];

export default function FundCards() {
    const [selectedAddress, setSelectedAddress] = useState("All"); // State to track the selected address
    const filteredCards = selectedAddress === "All" ? allCards : allCards.filter(card => card.address.includes(selectedAddress)); // Filter cards based on the selected address
  
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
      }, []);

    const handleAddressChange = (address) => {
      setSelectedAddress(address);
    };
  
  
    return (
      <section className="my-14">
        <Container>
          <SectionTitle title="Hospitals" classes="text-center" id="title" />
          <div className="flex justify-center items-center mb-4">
            <span className="mr-2 font-bold">Filter by Location:</span>
            <select
              className="border border-gray-300 rounded-md py-1 px-2"
              value={selectedAddress}
              onChange={(e) => handleAddressChange(e.target.value)}
            >
              <option value="All">All</option>
                         
              {allCards.map((card) => (
                <option key={card.id} value={card.address}>{card.address}</option>
              ))}
            </select>
          </div>
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
          < br></br>
          {/* <div className="text-xl text-center more_news_gradient h-44 w-full text-black font-bold uppercase py-4 flex items-end justify-center relative z-20">
            <a className="cursor-pointer">More news</a>
          </div> */}
        </Container>
      </section>
    );
  }