import { useState, useEffect } from 'react'

function ConvertCelcius(celcius){
    var temp = Math.floor(celcius * (9/5) + 32)
    return(temp)
  }

export default ConvertCelcius;
