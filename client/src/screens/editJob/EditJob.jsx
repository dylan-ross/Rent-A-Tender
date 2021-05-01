import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const EditJob = (props) => {
  const [formData, setFormData] = useState({
    date: '',
    start_time:'',
    end_time: ''
  })

  const params = useParams()
  const { id } = params
  const { jobs, handleEditJob } = props
  const { date, start_time, end_time } = formData;

  useEffect(() => {
    const prefillFormData = () => {
      const jobItem = jobs.find(job => job.id === Number(id))
      setFormData({
        date: jobItem.date,
        start_time: jobItem.start_time,
        end_time: jobItem.end_time,
      })
    }
    if (jobs.length) {
      prefillFormData()
    }
  }, [jobs])



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
        handleEditJob(id, formData);
      }}>
        <input type="date" name="date" value={date} onChange={handleChange}/>
        <input type="time" name="start_time" value={start_time } onChange={handleChange}/>
        <input type="time" name="end_time" value={end_time} onChange={handleChange}/>
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default EditJob;