import "bootstrap/dist/css/bootstrap.min.css";
import createJob from "../hooks/createJob";
import { useState } from "react";

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    positionTitle: "",
    pay: "",
    description: "",
    type: "",
    logo: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSelect = (event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      type: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await createJob(
        formData,
        event.target.logo.files[0]
      );

      if (data) {
        setFormData({
          name: "",
          location: "",
          positionTitle: "",
          pay: "",
          description: "",
          type: "",
          logo: null,
        });
      } else if (error) {
        console.error("Error creating job:", error);
      }
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <div className="new-div" style={{ with: "100%" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#486284",
          marginBottom: "3rem",
          marginTop: "8rem",
          textAlign: "center",
        }}
      >
        Job Posting 💼
      </h1>
      <br />
      <div className="col-md-8 offset-md-2  ">
        <form
          onSubmit={handleSubmit}
          method="POST"
          noValidate
          encType="multipart/form-data"
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Company Name
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              required
              onChange={handleChange}
              value={formData.name}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              Company Location
            </label>
            <input
              className="form-control"
              type="text"
              id="location"
              required
              onChange={handleChange}
              value={formData.location}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="positionTitle">
              Job Position
            </label>
            <input
              className="form-control"
              type="text"
              id="positionTitle"
              required
              onChange={handleChange}
              value={formData.positionTitle}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="pay">
              Salary
            </label>
            <div className="input-group">
              <span className="input-group-text" id="price-label">
                $
              </span>
              <input
                type="text"
                className="form-control"
                id="pay"
                placeholder="0.00"
                aria-label="price"
                required
                onChange={handleChange}
                value={formData.pay}
              />
            </div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3 mt-3">
            <label className="form-label" htmlFor="description">
              Job Description
            </label>
            <textarea
              className="form-control"
              type="text"
              id="description"
              name="campground[description]"
              required
              onChange={handleChange}
              value={formData.description}
            ></textarea>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <label htmlFor="type">Select an Option:</label>
            <select
              className="form-control"
              id="type"
              onChange={handleSelect}
              value={formData.type}
            >
              <option value="">Select one...</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>
          <div className="form-file custom-file">
            <label style={{display: "block", marginBottom: "0.3rem"}} htmlFor="image">
                Choose image(s):
            </label>
            <input
              type="file"
              className="form-file-input"
              id="logo"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 mt-4 ">
            <button className="btn custom-button" type="submit">
              Submit Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobForm;
