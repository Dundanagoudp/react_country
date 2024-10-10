import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection =()=>{
      return (
            <main className="hero-section main">
            <div className="container grid grid-two-cols">

                  <div className="hero-content">
                  <h1 className="heading-xl">
                  Explore the World with Us</h1>
              <p className="paragraph">
              Discover breathtaking destinations and unique experiences that <br/>
              inspire your spirit; at WorldVista, travel is a transformative adventure.
</p>
<NavLink to="/country" >
<button className="btn btn-darken btn-inline bg-white-box">
Start Exploring <FaLongArrowAltRight />
</button>
</NavLink>
                         </div>
                  <div className="hero-image">
                        <img src="/world2.png" alt="image section" className="banner-image"/>
                  </div>
            </div>
      </main>
      );
};