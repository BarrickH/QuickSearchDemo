import { useEffect, useState } from "react"

export const cleanObject = (object: object) => {
    const result = {...object}
    Object.keys(result).forEach(key =>{
        // @ts-ignore
        const value = result[key]
        if(!value && value!==0 && value !== false){
            // @ts-ignore
            delete result[key]
        }
    })
    return result
}

export const useMount = (callback: ()=>void) => {
    useEffect(()=>{
        callback()
    },[])
}

// export const debounce = (func,delay) => {
//     let timeout;
//     console.log(delay)
//     return (...params) => {
//         console.log('timeout', timeout)
//         if (timeout){
//             clearTimeout(timeout);
//         }
//         timeout = setTimeout(function() {
//             console.log('func',func)
//             func(...params)
//         }, delay);
//     }
// }

export const useDebounce = (value:any,delay?:number) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timeout = setTimeout(function() {
            setDebounceValue(value)
        },delay)
        return ()=>clearTimeout(timeout)
    })
    return debounceValue
}