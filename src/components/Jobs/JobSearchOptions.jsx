import "./JobSearch.css";

const JobSearchOptions = ({
  onSelectDate,
  onSelectCountry,
  onJobType,
  onsetSearchInput,
}) => {
  const handleSearchChange = (event) => {
    onsetSearchInput(event.target.value);
  };

  return (
    <div className="filter-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          name="job"
          onChange={handleSearchChange}
        />
      </div>
      <div className="sort-items">
        <DateFilter onSelectDate={onSelectDate} />
        <JobType onJobType={onJobType} />
        <CountryFilter onSelectCountry={onSelectCountry} />
      </div>
    </div>
  );
};
const DateFilter = ({ onSelectDate }) => {
  const handleOptionChange = (event) => {
    onSelectDate(event.target.value);
  };

  return (
    <select id="date-filter" onChange={handleOptionChange} placeholder="Date">
      <option value="any-date" className="date">
        Date
      </option>
      <option value="past-month">Past month</option>
      <option value="past-week">Past week</option>
      <option value="past-24-hours">Past 24 hours</option>
    </select>
  );
};
const CountryFilter = ({ onSelectCountry }) => {
  const handleCountryChange = (event) => {
    onSelectCountry(event.target.value);
  };

  return (
    <select
      id="country-filter"
      onChange={handleCountryChange}
      placeholder="Country"
    >
      <option value="any-country">Country</option>
      <option value="United States">USA</option>
      <option value="Behrian">Bahrian</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Canada">Canada</option>
      <option value="India">India</option>
    </select>
  );
};

const JobType = ({ onJobType }) => {
  const handleJobTypeChange = (event) => {
    onJobType(event.target.value);
  };

  return (
    <select id="job-type-filter" onChange={handleJobTypeChange}>
      <option value="any-time">Job Type</option>
      <option value="Full-time">Full Time</option>
      <option value="Part-time">Part Time</option>
    </select>
  );
};

export default JobSearchOptions;
