const Confirmation = (props) => {
  console.log(props);
  const { jobs } = props
  console.log(jobs)
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Congragulations! You've booked a an event!</p>
    </div>
  );
};

export default Confirmation;
