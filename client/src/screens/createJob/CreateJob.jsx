import { useState } from "react";
import { Link, useParams } from "react-router-dom"

const CreateJob = (props) => {
  console.log(props);
  const params = useParams()
  const { id } = params
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
      <h2>Book Your Event</h2>
      <form  className="job-form" onSubmit={(e) => {
        e.preventDefault();
        handleCreateJob({ ...formData, bartender_id: id });
      }}>
        <input type="date" name="date" value={date} onChange={handleChange}/>
        <input type="time" name="start_time" value={start_time } onChange={handleChange}/>
        <input type="time" name="end_time" value={end_time} onChange={handleChange}/>
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default CreateJob;
