import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container text-white">
      <div className="container py-5">
        <div className="breadcrumb text-small mb-3">
          <a href="/" className="text-white text-decoration-none">
            Home
          </a>
          <span className="mx-2">/</span>
          <span className="text-muted">Hero Slug</span>
        </div>

        <div className="row align-items-lg-center">
          <div className="col-12  mb-4 mb-md-0">
            <h1 className="display-5">
              GET GROOVY GET WILD
              <br />
              IT &lsquo;S TIME TO Course!
            </h1>
          </div>

          {/* <div className="col-12 col-md-5 text-md-end">
            <a href="/Subscribe" className="btn btn-primary btn-lg">
              Subscribe Now
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
