import React,{useState} from "react";
import './search.css';
import Result from './result';


function Search(props) {
    const [search,setSearch] = useState('');
    const [result,setResult] = useState([]);
    

    const find=(e)=>{
        e.preventDefault();
        
            fetch("http://www.omdbapi.com/?t="+search+"&plot=full&apikey=f4f9974d")
      .then((response) => response.json())

      .then((data) => {
        setResult([data]);
        console.log(result);
      })
    
      .catch(err => {
        console.error(err)   
      })
     
   

    
    }
    const results = result.map(item=>(<Result Title={item.Title} Year={item.Year} Rated={item.Rated} Released={item.Released} Runtime={item.Runtime} Genre={item.Genre} Plot={item.Plot} Poster={item.Poster} Actors={item.Actors}/>));
        
return (
    <div class="content">
        <div className="wrap">
            <form>
                <input className="searchTerm" type="text" name="search" value={search} placeholder="Movie Name" onChange={e=>{setSearch(e.target.value)}}></input>
                <button className="searchButton" onClick={find}><i class="fa fa-search"></i></button>
            </form>
            <div className="result">
            {results}
            </div>
        </div>

    </div>
);
}

export default Search;