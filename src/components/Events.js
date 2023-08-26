import React, { useEffect, useState} from "react";
import EventItem from "./EventItem";

const Events=(props)=>{
  let {mode} = props;
  const [data, setData] = useState([])
  const updateEvents=async()=>{
    props.setProgress(10);
    const url = `https://gdscdev.vercel.app/api`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setData(parsedData.content.data)
    props.setProgress(100);
  }
  useEffect(() => {
    updateEvents();
  }, [])
  
    return (
      <>
        <h1 className="text-center mb-4" style={{ margin: "35px 0px", marginTop: '90px', color: props.mode==='dark'?'white':'black'}}>
          Tech Conferences around the world
        </h1>
          <div className="container">
          <div className="row">
            {data.map((element) => {
                return (
                  <div className="col-md-6" key={element.id}>
                    <EventItem
                    mode={mode}
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.banner_image}
                      organiserName={element.organiser_name}
                      organiserIconUrl={element.organiser_icon}
                      venueName={element.venue_name}
                      venueCity={element.venue_city}
                      venueCountry={element.venue_country}
                      date={element.date_time}
                    />
                  </div>
                );
              })}
          </div>
          </div>
      </>
    );
}
export default Events;
