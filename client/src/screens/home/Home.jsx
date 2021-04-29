import Search from '../../components/search/Search'
import { useState } from 'react'

const Home = (props) => {
  const { bartenders, currentUser } = props;
  const [queriedBartenders, setQueriedBartenders] = useState([]);

  const handleSearch = (event) => {
    const newQueriedBartenders = bartenders.filter((bartender) =>
      bartender.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedBartenders(newQueriedBartenders);
  };

  const handleSubmit = (event) => event.preventDefault();
  return (
    <>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
    </>  
  )
}

export default Home