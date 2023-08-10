import { useState } from "react";
import "./JobItem.css";
import moment from "moment";

const JobItem = ({ jobDetails }) => {
  const [showRestOfDescription, setShowRestOfDescription] = useState(false);
  return (
    <article className="job-item">
      <div className="company-info">
        <div className="company-logo-name">
          <img
            className="company-logo"
            src={jobDetails.logo}
            alt="company logo"
          />
          <span className="company-name">{jobDetails.name}</span>
        </div>
        <p className="job-date">🕑 {moment(jobDetails.created_at).fromNow()}</p>{" "}
      </div>
      <div
        className="job-details"
        onClick={() => setShowRestOfDescription(!showRestOfDescription)}
      >
        <h3 className="job-description-header">
          {" "}
          {!showRestOfDescription ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
              <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z" />
            </svg>
          )}{" "}
          Job Description
        </h3>
        <p
          className={`job-description-text ${
            !showRestOfDescription && "show-compelete-text"
          }`}
        >
          {jobDetails.description}
        </p>
      </div>

      <hr />
      <div className="job-info">
        <div className="job-title">{jobDetails.positionTitle}</div>
        <div className="job-location">📍 {jobDetails.location}</div>
        <div className="job-pay">💲{jobDetails.pay} month</div>
        <div className="job-type">⌛ {jobDetails.type}</div>
      </div>
    </article>
  );
};
export default JobItem;
