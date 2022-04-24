import axios from './Api/Api';
import { useEffect, useState } from 'react';
import './App.css';
import CharacterList from './Components/CharacterList';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';
import Spinner from './Components/Spinner';


function App() {
  const [query, setQuery] = useState("")
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)
 

  useEffect(() => {
    const FetchItems = async () => {
      const response = await axios.get(`/characters?name=${query}`)
      setItem(response.data)
      setLoading(false)
    }
    FetchItems()
  }, [query])

  return (
    <div className="App">
      <NavBar />
      <SearchBar setQuery={(Query) => setQuery(Query)} />
      {loading ? <Spinner /> : <CharacterList items={item} />}
    </div>
  );
}

export default App;