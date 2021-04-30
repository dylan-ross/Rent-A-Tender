import Search from '../../components/search/Search'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const { bartenders, currentUser, currentBartenders } = props;
  const [queriedBartenders, setQueriedBartenders] = useState([]);

  const handleSearch = (event) => {
    const newQueriedBartenders = bartenders.filter((bartender) =>
      bartender.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedBartenders(newQueriedBartenders);
  };

  const handleSubmit = (event) => event.preventDefault();
  return (
    <div className='home'>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <div className='home-buttons'>
        <Link to='/bartenders'><button>Casual</button></Link>
        <Link to='/bartenders'><button>Cocktail</button></Link>
        <Link to='/bartenders'><button>Flair</button></Link>
      </div>
    </div>  
  )
}

export default Home