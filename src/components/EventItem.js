import React from 'react'

const EventItem=(props)=>{
    let {title, description, imageUrl, organiserName, organiserIconUrl, venueName, venueCity, venueCountry, date} = props;
    return (
      <div className="my-3">
        <div className="card">
        <img src={!imageUrl?"https://files.realpython.com/media/PyGame-Update_Watermarked.bb0aa2dfe80b.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body rounded-bottom" style={{ backgroundColor: props.mode==='dark'?'#182C35':'white', color: props.mode==='dark'?'white':'black'}}>
          <h3 className="card-title mb-3" style={{color: '#1a73e8'}} >{title}</h3>
          <p className="mb-0"><b style={{color: '#74a8ff'}}>Date & Time : </b>{new Date(date).toGMTString()}</p>
          <p className = "mb-3"><b style={{color: '#74a8ff'}}>Venue : </b>{venueName}, {venueCity} | {venueCountry}</p>
          <p className="card-text" >{description}</p>
          <p className="card-text fw-bold"><small style={{color: '#34a853'}}><span style={{color: props.mode==='dark'?'white':'black'}}>Organised By :</span> {!organiserName?"Unknown":organiserName}</small><img style={{width: '20%', height:'20%', padding: '10px'}} src={!organiserIconUrl?"https://freepngimg.com/save/14962-php-logo-transparent/600x600":organiserIconUrl} alt="..." /></p>
         <a href="#" className="btn btn-primary">Learn More</a>
        </div>
        </div>
      </div>
    )
}

export default EventItem