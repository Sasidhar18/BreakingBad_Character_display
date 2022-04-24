import axios from './Api/Api';
import { useEffect, useState } from 'react';
import './App.css';
import CharacterList from './Components/CharacterList';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import Spinner from './Components/Spinner';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [query, setQuery] = useState("")
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchItems = async () => {
      const response = await axios.get(`/characters?name=${query}`)
      setItem(response.data)
      setLoading(false)
    }
    FetchItems()
  }, [query])

  // dispatch({ type: "GET_USER" })
  console.log(user)
  return (
    <div className="App">
      <NavBar />
      <SearchBar setQuery={(Query) => setQuery(Query)} />
      {loading ? <Spinner /> : <CharacterList items={item} />}
    </div>
  );
}

export default App;