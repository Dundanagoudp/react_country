import countryFacts from "../api/countrydata.json";

export const About =()=>{
      return <section className="section-about container">
            <h2 className="container-title">
                  here are interesting facts
                  <br/>
                  we're proud of
            </h2>
            <div className="gradient-cards">

{
      countryFacts.map((country)=>{
            const {id,countryName,capital,population,interestingFact} = country
            return (
                  <div className="card" key={id}>
                  <div className="container-card bg-blue-box">
                        <p className="card-title">{countryName}</p>
                        <p>
                              <span className="card-description"> {capital}</span>
                              
                        </p>
                        <p>
                              <span className="card-description"> {population}</span>
                        </p>
                        <p>
                              <span className="card-description"> {interestingFact}</span>
                        </p>
                  </div>

            </div>
            );
      })
}

                
            </div>
      </section>
};