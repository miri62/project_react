import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <img
        src="cardi.jpg"
        alt="card1"
        width={1000}
        className="img-fluid rounded mx-auto d-block"
      />
      <h1
        className="display-1 text-center mt-5 text-warning"
        style={{ fontFamily: "Pacifico" }}
      >
        Wellcome to bizz!!
      </h1>
    </>
  );
};

export default Home;
