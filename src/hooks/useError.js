import { useState } from "react"

export const useError = (initialvalue)=>{
const [message, setMessage] =  useState(initialvalue)


const messageError = (message)=>{
    setMessage(message)

}
return {
    message , messageError
}
   
}


