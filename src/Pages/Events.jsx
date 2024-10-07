import EventCard from "../components/Events/EventCard";
import EventsMainSection from "../components/Events/EventMainsection";
import Pagiation from "../components/Events/Pagiation";
import SearchSection from "../components/Events/SearchSection";

function EventsPage() {
  return (
    <div>
      <EventsMainSection />
      <div className="container d-flex flex-column gap-4 my-4">
        <SearchSection />

        <div className="row">
          {Array.from({ length: 10 }).map((_, id) => (
            <div key={id} className="col-12 col-md-6 col-lg-4 mb-4">
              <EventCard />
            </div>
          ))}
        </div>
        <Pagiation />
      </div>
    </div>
  );
}

export default EventsPage;
