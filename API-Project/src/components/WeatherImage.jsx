// // import { useState } from 'react';

function WeatherImage(weatherImageID){
    if (weatherImageID == "01d"){
        return (<img src="./src/assets/01d.png" alt="Clear Day" />)
    }
    else if (weatherImageID == "01n"){
        return ( <img src="./src/assets/01n.png" alt="Clear Night" />  )
    }
    else if (weatherImageID == "02d"){
        return ( <img src="./src/assets/02d.png" alt="Cloudy Day" />  )
    }
    else if (weatherImageID == "02n"){
        return ( <img src="./src/assets/02n.png" alt="Cloudy Night" />  )
    }
    else if (weatherImageID == "03d"){
        return ( <img src="./src/assets/03d.png" alt="Cloudy Day" />  )
    }
    else if (weatherImageID == "04d"){
        return ( <img src="./src/assets/04d.png" alt="Very Cloudy Day" />  )
    }
    else if (weatherImageID == "9d"){
        return ( <img src="./src/assets/9d.png" alt="Cloudy Rainy Day" />  )
    }
    else if (weatherImageID == "10d"){
        return ( <img src="./src/assets/10d.png" alt="Sunny Rainy Day" />  )
    }
    else if (weatherImageID == "11d"){
        return ( <img src="./src/assets/11d.png" alt="Lighning" />  )
    }
    else if (weatherImageID == "13d"){
        return ( <img src="./src/assets/13d.png" alt="Snow" />  )
    }
    else if (weatherImageID == "50d"){
        return ( <img src="./src/assets/50d.png" alt="Mist" />  )
    }
}

export default WeatherImage;