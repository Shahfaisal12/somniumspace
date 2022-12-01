import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const StaySharp = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="staysharp-section">
      <div className="container">
        <div className="header-content py-5 text-center">
          <h3 className="mb-5 fs-3">STAY SHARP WITH UPCOMING EVENTS</h3>
          <h3 className="mb-0 fs-3">DREAM EVENTS HEAT</h3>
          <h3 className="mb-0 fs-3">
            Have Fun and Share with your Friends our Weekly and Special Events
          </h3>
        </div>
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <div class="slider" id="enents">
              <h4 class="slider-header">Featured Events</h4>
              <section class="slider-section">
                <div
                  class="slider-image-sec"
                  style={{
                    backgroundImage: `url(
                      "https://parcels.somniumspace.org/parcels/api/Events/44/DownloadFile"
                    )`,
                  }}
                ></div>
                <div
                  class="slider-image-sec slider-image2"
                  style={{
                    backgroundImage: `url(
                      "https://parcels.somniumspace.org/parcels/api/Events/65/DownloadFile"
                    )`,
                  }}
                ></div>
              </section>
            </div>
          </div>
          <div className="col-md-5">
            <h4 class="slider-header mb-5">Featured Events</h4>
            <div>
              <Calendar onChange={onChange} value={value} className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaySharp;
