import { FaLongArrowAltRight } from "react-icons/fa";

export const Home =()=>{
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
<button className="btn btn-darken btn-inline bg-white-box">
  Start Exploring <FaLongArrowAltRight />
</button>
                               </div>
                        <div className="hero-image">
                              <img src="" alt="" />
                        </div>
                  </div>
            </main>
      )
};