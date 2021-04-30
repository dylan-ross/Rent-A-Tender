import { useState } from "react";
import { Link } from "react-router-dom"

const JobForm = (props) => {
  console.log(props);
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    date: '',
    startTime:'',
    endTime: ''
  })

  const { name, startTime, endTime } = formData;

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
      <form>
        {/* <input type="date" name="date" value={date}/> */}
        <input type="time"/>
        <input type="time"/>
        {/* <Link to={`/jobs/${jobs}`}><button>Confirm</button></Link> */}
      </form>
    </div>
  );
};

export default JobForm;
