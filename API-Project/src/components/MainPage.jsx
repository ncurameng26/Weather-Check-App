import {useState, useEffect } from 'react'
import axios from 'axios'
import DetermineClothing from './DetermineClothing';
import ConvertCelcius from './ConvertCelcius';
import WeatherImage from './WeatherImage';


const cityURL = "http://api.airvisual.com/v2/nearest_city?key=55730ce0-80fa-4958-bdad-a1f0c9c04316"

function MainPage() {

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(cityURL).then((response) => {
      setPost(response.data);
      });
  }, []);


  if (!post) return null;

  const photoID = post.data.current.weather.ic;

    return (
      <>

      <div className="heroContainer">
        <div className="container">
            <div className="column">
                <h2>Weather</h2>
                <h2>Check</h2>
                <h2>App</h2>

            </div>

            <div className="column"><img src="./src/assets/logo.png" alt="weather logo" /> </div>
        </div>

        <h1>Its Currently: {ConvertCelcius(post.data.current.weather.tp)} degrees fahrenheit </h1>
        <h1> {post.data.current.weather.hu}% humidity </h1>
        <h1> {post.data.current.weather.ws} MPH wind speed </h1>
        <h1> in the {post.data.city}, {post.data.state}</h1>
        <h1> Clothing: {DetermineClothing(ConvertCelcius(post.data.current.weather.tp))} </h1>
        <h1> {WeatherImage(photoID)} </h1>



      </div>

       
      </>
    )
  }

export default MainPage;
