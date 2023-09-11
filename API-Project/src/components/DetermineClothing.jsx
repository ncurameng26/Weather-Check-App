import { useState, useEffect } from 'react'

function DetermineClothing(temp) {
        if (temp <= 40){
          return ("Wear Warm Clothes, Long Sleeves, Pants and Jacket. Layer!")
        }
        else if(temp > 40 && temp <= 50){
          return ("Wear Warm Clothes, Long Sleeves. Optional Jacket and Layers.")
        }
        else if(temp > 50 && temp <= 70){
          return ("Either Long top or Pants. Could do both but will be a bit hot depending.")
        }
        else if(temp > 70 && temp <= 80){
          return ("Both Shorts")
        }
        else{
          return ("Bear Minimum.")
        }
      }

export default DetermineClothing;
