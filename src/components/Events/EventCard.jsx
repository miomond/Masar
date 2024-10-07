import "./EventCard.css";
import { CiLocationOn } from "react-icons/ci";

const EventCard = () => {
  return (
    <div className="card event-card border-0 shadow-sm">
      <div className="position-relative">
        <div
          className="bg-light d-flex justify-content-center align-items-center"
          style={{ height: "150px" }}
        >
          <div
            className="rounded-circle bg-secondary"
            style={{ width: "80px", height: "80px" }}
          ></div>
        </div>
        <div
          className="position-absolute top-0 end-0 bg-white rounded text-center p-2"
          style={{ margin: "10px" }}
        >
          <span className="d-block fs-4 fw-bold">22</span>
          <span className="text-muted">April</span>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between text-muted mb-2">
          <div className="d-flex align-items-center gap-2 ">
            <CiLocationOn size={20} />
            <p className="m-0"> New York, US</p>
          </div>
          <div className="d-flex align-items-center gap-2 ">
            <CiLocationOn size={20} />
            <p className="m-0"> 8:00 am - 5:00 pm</p>
          </div>
        </div>
        <h5 className="card-title">
          Consumer Food Safety Education Conference
        </h5>
      </div>
    </div>
  );
};

export default EventCard;
