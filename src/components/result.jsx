import React from 'react';
import './result.css';

function Result(props) {
    return(
        <div className="container" >
             <div class="cellphone-container">
                 <div className="movie">
                    <div className="menu">
                        <i className="material-icon"></i>
                    </div>
                    <div class="movie-img">
<img src={props.Poster} alt="pic"></img>
                    </div>
    <div className='text-movie-cont'>
        <div className="mr-grid">
            <div className="coll">
           <h1>{props.Title}</h1>    
        <ul className="movie-gen">
        <li> {props.Rated}/</li>
        <li>{props.Runtime} /</li>
        <li>{props.Genre}/</li>
        <li>{props.Released}</li>
        </ul>
        </div>
        </div>     
            <div className="mr-grid summary-row">
                <div className="col2">
                    <h5>Summary</h5>
                    </div>
                    <div class="mr-grid">
            <div class="col1">
              <p class="movie-description"> {props.Plot}</p>
              </div>
          </div>
          <div class="mr-grid actors-row">
            <div class="col1">
            <p class="movie-actors">{props.Actors}</p>
            </div>
           
            </div>
        </div>
      </div>
  </div>
</div>

        </div>
    )
}
export default Result;