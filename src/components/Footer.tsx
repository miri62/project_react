import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <>
      <div className="footer" /* style={{ fontFamily: "Caveat" }} */>
        <h3>
          <i className="fa-regular fa-circle-c"></i> &copy; Miri Rakovski 2023
        </h3>
        <h4> miri@gmail.com</h4>
        <div style={{ fontSize: "1.5rem" }}>
          <i
            className="fa-brands fa-square-whatsapp "
            style={{ color: "green" }}
          ></i>

          <i
            className="fa-brands fa-square-facebook ms-2"
            style={{ color: "rgb(68, 94, 241)" }}
          ></i>

          <i
            className="fa-brands fa-square-twitter ms-2"
            style={{ color: "dodgerblue" }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
