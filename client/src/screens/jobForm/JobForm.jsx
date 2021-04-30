import { useState } from "react";
import { Link } from "react-router-dom"

const JobForm = (props) => {
  console.log(props);
  const [formData, setFormData] = useState({
    date: '',
    startTime:'',
    endTime: ''
  })
  const { handleCreateJob } = props
  const { date, startTime, endTime } = formData;

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
        <input type="time" name="startTime" value={startTime } onChange={handleChange}/>
        <input type="time" name="endTime" value={endTime} onChange={handleChange}/>
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default JobForm;
