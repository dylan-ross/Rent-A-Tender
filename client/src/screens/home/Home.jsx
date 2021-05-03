import Search from "../../components/search/Search";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Home = (props) => {
  const [input, setInput] = useState("");
  // const [bartenderList, setBartenderList] = useState([]);
  const { bartenders, setBartenders, bartenderList } = props;
  console.log(bartenders);

  const handleSearch = async (input) => {
    const filtered = bartenderList.filter((bartender) => {
      return bartender.name.toLowerCase().includes(input.toLowerCase()) ||
        bartender.category.toLowerCase().includes(input.toLowerCase()) ||
        bartender.skills.toLowerCase().includes(input.toLowerCase())
      
    });
    setInput(input);
    setBartenders(filtered);
    console.log(bartenders)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (bartenders) {
      return <Redirect to="/bartenders" />;
    }
  };
  return (
    <div className="home">
      <Search
        onSubmit={handleSubmit}
        onChange={handleSearch} input={input}
      />
      <div className="home-buttons">
        <Link to="/bartenders/casual">
          <button>Casual</button>
        </Link>
        <Link to="/bartenders/category/cocktail">
          <button>Cocktail</button>
        </Link>
        <Link to="/bartenders/category/flair">
          <button>Flair</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
