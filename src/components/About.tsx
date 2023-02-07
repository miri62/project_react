import { FunctionComponent } from "react";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-8">
            <img
              className="img-fluid rounded float-end "
              src="1111.jpg"
              alt=""
              style={{ height: "35rem" }}
            />
          </div>
          <div className="col-lg-4  col-sm-4">
            <div className="card " style={{ height: "35rem"}}>
              <h2
                className="card-header"
                style={{ fontFamily: "Caveat", fontSize: "2.5rem" }}
              >
                Who Are We?
              </h2>
              <div
                className="card-body"
                style={{ fontFamily: "Caveat", fontSize: "2rem" }}
              >
                <h5
                  className="card-title"
                  style={{ fontFamily: "Caveat", fontSize: "2rem" }}
                >
                  Biz is a platforma for creating and publishing business cards.
                </h5>
                <p className="card-text">
                  Other users will be able to see your business deatails and
                  contact you with the deatils you provide on your business card
                </p>
                <p className="card-text">
                  Register now and start your Journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
