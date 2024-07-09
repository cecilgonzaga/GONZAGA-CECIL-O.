import "./Experience.css";
import Navbar from "./Navbar";
import PC2Image from "./img/PCKEN2.jpg"
import PC1Image from "./img/PCKEN5.jpg"
import PC3Image from "./img/PCKEN3.jpg"

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="ontoy">

        <div className="container-fluid mt-1">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                Experiences
              </h1>
    <div className="exp">
    <div className="container">
          <hr/>
          <div className="row mb-3">
            <h3 className="text-center">PC-KEN On-the Job Training</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={PC1Image} />
          <h4 className="three text-black">Calibrating The Coin slot</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={PC2Image} />
          <h4 className="three text-black">Formatting The Laptop</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={PC3Image} />
          <h4 className="three text-black">Setting-up the laptop</h4>
          </div>
          </div>  
      </div>
    </div>
    </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Experience;
