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
        <h1 className="md:text-[40px] text-[25px] font-bold">Coming soon</h1>
        <p>Events</p>
      </div>
    </section>
  );
}
