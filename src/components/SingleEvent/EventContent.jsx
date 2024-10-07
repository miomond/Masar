import "./EventPackage.css";

const EventPackages = () => {
  return (
    <div className=" package-container">
      <h1 className="text-white text-center"> E-learning Courses </h1>
      <p className="lead text-white text-center mb-5">
        Unlock your potential with personalized learning. Join our exclusive Gen
        Z e-learning experience where education meets creativity.
      </p>

      <div className="row g-4 mx-auto  justify-content-between Section-container">
        <div className="col-md-6">
          <h2 className="text-purple mb-3">Course Packages Include</h2>
          <div className="row">
            <div className="col-6">
              <ul className=" text-white">
                <li>Video Lectures</li>
                <li>Interactive Quizzes</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className=" text-white">
                <li>Live Sessions</li>
                <li>Personalized Feedback</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="text-center shadow-lg  ">
            <h2 className="text-purple text-nowrap ">AED 1,500.00</h2>
            <p className="text-muted mb-3 text-nowrap">
              <s>AED 2,000.00</s>
            </p>

            <button className="btn btn-outline-light btn-lg mx-1 mb-2 w-100">
              ENROLL NOW
            </button>
            <p className="mt-3">
              Pay now or use Tabby for 4 interest-free installments.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 ">
        <div className="col-md-6">
          <div className="card bg-light shadow">
            <div className="card-body">
              <h3 className="text-purple">Location</h3>
              <p>Online via Zoom (or any preferred platform)</p>
              <p className="text-muted">Location may vary based on package.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-light shadow">
            <div className="card-body">
              <h3 className="text-purple">Date</h3>
              <p>
                Starting on: <strong>October 20, 2024</strong>
              </p>
              <p className="text-muted">
                Classes will be held every weekend for 4 weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPackages;
