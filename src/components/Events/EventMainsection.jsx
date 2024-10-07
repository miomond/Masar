import "./EventSection.css";
const EventsMainSection = () => {
  return (
    <section className="events-section py-5">
      <div className="container text-center">
        {/* <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/pages">Pages</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Instructor
            </li>
          </ol>
        </nav> */}

        <h1 className="display-4 fw-bold ">Events</h1>
        <p className="lead">
          Products that help beginner designers become true unicorns.
        </p>
      </div>
    </section>
  );
};

export default EventsMainSection;
