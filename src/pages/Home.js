import "./Home.css";
import Navbar from "./Navbar";

import myImage from "./img/sisil 1.png"

const Home = () => {
  return (
    <>
      <Navbar />



    <div className="wrapper">
      <div className="overlay">
        <div className="container1">

    <div id="home-info" >
         


        <div className="container mt-5">
          <div className="row ok">
            <div className="col-lg-6">
                <img src={myImage} />
            </div>
            <div className="col-lg-6 jao">
              <div className="card">
              <h2 className=" fw-bold display-3 text-center text-black mb-5">
                Greetings.. <br/> I'm Cecil O. Gonzaga
              </h2>
              <h4 className=" text-black text-center mt-4"> I am both an enthusiastic online seller and a dedicated student. </h4>
              <center>
              <a href="/about" className="btn shadow mt-3 fw-bold">
                Explore More
              </a>
              </center>
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

export default Home;
