import EventCard from "../components/Events/EventCard";
import EventPackages from "../components/SingleEvent/EventContent";
import Hero from "../components/SingleEvent/Hero";
import Images from "../components/SingleEvent/Images";
import "../Styles/singleEvents.css";

function SingleEvent() {
  return (
    <div>
      <Hero />
      <div className="container">
        <Images />
        <EventPackages />
        <div>
          <h1 className="text-black text-center my-4"> Realated Events </h1>
          <div className=" row my-4">
            {Array.from({ length: 3 }).map((_, id) => (
              <div key={id} className="col-12 col-md-6 col-lg-4 mb-4">
                <EventCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleEvent;
