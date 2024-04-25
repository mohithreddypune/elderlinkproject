import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import random from "../../assets/random.png";

const NewsCard = ({ text }) => (
  <div className="w-[320px] px-4 py-6 bg-white rounded-md news_card_shadow">
    <p className="text-[#5B6469] font-bold text-[15px]">{text} </p>
    <div className="pt-7 text-[13px] flex items-center gap-2">
      <img src={random} alt="person" className="w-10 h-10 rounded-full" />
      <div>
        <h1 className="font-medium">Ram</h1>
        <p className="text-[#BFBFC8]">@Ramsijji9789</p>
      </div>
    </div>
  </div>
);

export default function Stories() {
  return (
    <section className="my-14">
      <Container>
        <div className="pt-14 pb-4 h-[700px] overflow-auto bg-[#F7F7F7] flex items-center lg:flex-nowrap flex-wrap gap-1">
          <article className="lg:w-1/2 w-full lg:pb-0 pb-4 flex flex-col lg:items-start items-center lg:ml-14 lg:mt-52">
            <SectionTitle title="FEEDBACK " />
            <p className="text-[#5B6469]">Let's see what people say about us</p>
          </article>
          <div className="flex gap-4 sm:flex-nowrap flex-wrap lg:w-1/2 mx-auto">
            <div className="rounded-md w-full flex flex-col gap-3 items-center">
              <NewsCard text=" Compassion and Empathy: We truly appreciate how caring and empathetic you are. You make my mother feel understood and well-cared for, which means so much to us." />
              <NewsCard text=" Communication Skills:Your ability to communicate clearly and keep us updated has been a huge relief. We always feel in the loop about our father's condition and care. " />
              <NewsCard text=" Professionalism:We are impressed by your professionalism and You respect our privacy and manage to handle sensitive situations with grace. " />
            </div>
            <div className="rounded-md w-full flex flex-col gap-3 items-center">
              <NewsCard text=" Technical Skills:Your expertise, especially in handling the medical aspects of care, is exceptional. We feel confident in your abilities to manage medication and other care needs." />
              <NewsCard text=" Patience: Your patience doesn't go unnoticed. We admire how you handle challenging situations calmly, which makes all the difference." />
              <NewsCard text=" Engagement:It's wonderful to see how actively you engage with my brother. Your interaction goes beyond basic care and supports his emotional and social well-being." />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
