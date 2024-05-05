export default function Stats() {
  return (
    <section className="stats_box py-10 grid place-items-center lg:grid-cols-4 grid-cols-2 gap-4 sm:w-9/12 w-11/12 mx-auto -mt-8 px-4">
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">125+</h1>
        <p>Interactions</p>
      </div>
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">25</h1>
        <p>Users</p>
      </div>
      <div>
        <h1 className="md:text-[40px] text-[25px] font-bold">18+</h1>
        <p>New Conections</p>
      </div>
      <div>
        <h1 className="md:text-[25px] text-[25px] font-bold">Upcoming Event:</h1>
        <p ><span className="md:text-[25px] text-[25px] font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yoga</span><br></br>
Tuesday, May 7, 2024<br></br>
 06:00 p.m.–07:00 p.m.
</p>
      </div>
    </section>
  );
}
