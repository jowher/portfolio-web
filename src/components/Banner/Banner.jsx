import { Typewriter } from "react-simple-typewriter";
import "./BannerStyle.css";

const Banner = () => {
  return (
    <div className="banner_wrapper container">
      <div className="container banner_container">
        <div className="banner_left">
          <p className="title">Hey, I am</p>
          <h1 className="banner_heading">
            Muhammed Ali Jowher. I'm a <br />
            <Typewriter
              words={[
                "Software engineer",
                "Front end developer",
                "Data scientist",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              className="heading"
            />
            {/* <span className="heading">Software Engineer</span> */}
          </h1>
          <h3 className="sub_heading">
            As I embrace the language of bits and bytes, I dance through the
            realm of code, crafting digital marvels with rhythm and grace.
          </h3>
        </div>
        <div className="banner_right"></div>
      </div>
    </div>
  );
};

export default Banner;
