import data from "../../data/index.json";

export default function WorkExperience() {
  return (
    <section className="experience--section" id="experience">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Work Experience</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.workexperience?.map((item, index) => (
          <div key={index} className="experience--section--card">
            <div className="experience--section--card--review"> 
            </div>
            <p className="text-md">{item.description}</p>
            <div className="experience--section--card--company--detail">
              <div>
                <p className="text-md experience--company--title">
                  {item.Company_title}
                </p>
                <p className="text-md experience--company--name">
                  {item.Company_name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
