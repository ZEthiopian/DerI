import "./Vision.scss";
import React from 'react';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      
      img:
        "https://media.istockphoto.com/photos/creative-visual-of-business-big-data-and-finance-analysis-on-computer-picture-id1311253708?b=1&k=20&m=1311253708&s=170x170&h=LfaIGhXIwHslnOXy1k7rsMYdCavLQ_TV0JG22pSjZ44=",
      icon: "assets/twitter.png",
      desc:
        " Create a convenient platform for various business institutions to operate. And deliver tech products that help save time & money that should rather be spent on other important things! The larger goal here is to promote a good & healthy economic growth!",
    },
    {
      id: 2,
     
      img:
        "https://media.istockphoto.com/photos/taking-care-of-the-crop-aerial-view-of-a-tractor-fertilizing-a-picture-id1154958041?b=1&k=20&m=1154958041&s=170x170&h=Sk4ccs10eyyTlnaFNmXsdo8HxsbG-ybgMyah3NNeh3k=",
      icon: "assets/youtube.png",
      desc:
        "Manufacture agricultural machines & utilities to improve & advance the African agriculture sector. These tech products are envisioned to help the farmer improve food production & livelihood. The main target here is to help a nation feed itself & its neighbours!",
      featured: true,
    },
    {
      id: 3,
     
      img:
        "https://media.istockphoto.com/photos/african-children-during-english-class-southern-ethiopia-east-africa-picture-id1093177328?b=1&k=20&m=1093177328&s=170x170&h=IT0VLoWMn_brXr-CTBPeoBotGnvrwUmqeCsFw8pLoxM=",
      icon: "assets/linkedin.png",
      desc:
        "Create an excellent education sector by making use of high quality tech products to people in cities & remote places. The target here is to educate more people in African nations",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Our Vision</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
             <a href=""> <img className="right" src={d.icon} alt="" /> </a>
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
