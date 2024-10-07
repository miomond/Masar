import { IoSearchCircle } from "react-icons/io5";

const SearchSection = () => {
  return (
    <div className="mt-3">
      <div className="row d-flex justify-content-between align-items-center ">
        <div className="col-12 col-md-8 d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2">
          <div className="input-group flex-grow-1">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Keyword"
            />
            <button className="input-group-text fs-3">
              <IoSearchCircle />
            </button>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="categoryDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </button>
            <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
              <li>
                <p className="dropdown-item">Category 1</p>
              </li>
              <li>
                <p className="dropdown-item">Category 2</p>
              </li>
              <li>
                <p className="dropdown-item">Category 3</p>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              id="locationDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Location
            </button>
            <ul className="dropdown-menu" aria-labelledby="locationDropdown">
              <li>
                <p className="dropdown-item">Location 1</p>
              </li>
              <li>
                <p className="dropdown-item">Location 2</p>
              </li>
              <li>
                <p className="dropdown-item">Location 3</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-1 mt-2 mt-md-0 d-flex ms-auto">
          <div className="dropdown">
            <div
              className="dropdown-toggle "
              id="sortDropdown"
              data-bs-toggle="dropdown"
              style={{ cursor: "pointer" }}
            >
              Sort by
            </div>
            <ul className="dropdown-menu" aria-labelledby="sortDropdown">
              <li>
                <button className="dropdown-item">Date Created</button>
              </li>
              <li>
                <button className="dropdown-item">Relevance</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
