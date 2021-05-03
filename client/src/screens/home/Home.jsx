import Search from '../../components/search/Search'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const { bartenders } = props;
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
        <Link to='/bartenders/casual'><button>Casual</button></Link>
        <Link to='/bartenders/category/cocktail'><button>Cocktail</button></Link>
        <Link to='/bartenders/category/flair'><button>Flair</button></Link>
      </div>
    </div>  
  )
}

export default Home