import { useState } from "react";
import { Link } from "react-router-dom"

const JobForm = (props) => {
  console.log(props);
  const [formData, setFormData] = useState({
    date: '',
    start_time:'',
    end_time: ''
  })
  const { handleCreateJob } = props
  const { date, start_time, end_time } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="job-form">
      <h2>JobForm</h2>
      <form  onSubmit={(e) => {
        e.preventDefault();
        handleCreateJob(formData);
      }}>
        <input type="date" name="date" value={date} onChange={handleChange}/>
        <input type="time" name="start_time" value={start_time } onChange={handleChange}/>
        <input type="time" name="end_time" value={end_time} onChange={handleChange}/>
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default JobForm;
