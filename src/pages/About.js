import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/ontoy3.png"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="ontoy">

  <div className="container mt-5">
    <div className="row">
      <div className="col">

      <div id="about">
        <div className="container">
      
            <div className="card shadow p-5">
              <div className="row">
              <div className="col-lg-4">
              <center><img src={myImage} /></center>
              </div>
              <div className="col-lg-8">
                <div className="card box shadow mb-3 p-3">
                <h4 className="text-dark"><span>About Me</span></h4>
              <p className="text-black"> I'm Cecil O. Gonzaga 23 years of age from Brgy Oringao Kabankalan City Neg. Occ. taking a Bachelor of Science in Information Technology (BSIT) at Central Philippines State University (CPSU). I have an interest in Networking and PC Repair  </p>
              <p className="text-black"> I am both an enthusiastic online seller and a dedicated student. Balancing these two roles has not only taught me valuable time management skills but also provided me with a unique perspective on the intersection of business and education.</p>
                </div>
                <div className="card box shadow p-3">
                <h4 className="text-dark"><span>Academic</span> </h4>
              <p className="text-black"> Primary: Oringao Elementary School S.Y:2014 <br /> Secondary: Junior High: Florentino Galang Senior National High School S.Y:2017 <br />Senior High: Florentino Galang Senior High School S.Y:2020 <br />Tretiary: Central Philippines State University (CPSU)SY:2024</p>
              <p> </p>
                </div>
              </div>
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

export default About;
