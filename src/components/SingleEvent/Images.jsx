function Images() {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center text-center">
          <div className="text-content">
            <h1 className="display-4"> Course Name</h1>
            <p className="lead">Course for the modern world.</p>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="https://assets.trainingindustry.com/content/uploads/2018/02/Events-Page-1920x1080.jpg"
            alt="academy"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="https://mvp.mit.edu/wp-content/uploads/2020/04/video-thumb-2x-live-events-streaming-342x194.jpg"
            alt="DJ"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center text-center">
          <div className="text-content">
            <h2 className="display-4">Masar Academy</h2>
            <p className="lead">Learn. Engage. Create. Excel.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
