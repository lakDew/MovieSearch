import React from "react";
import axios from "axios";

export const firstCall=async ()=>{
    try{
        const data= await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716');

        return data.data.results;
    }

    catch(e){
        return "error";
    }
   
   
}


export const searchCall=(key)=>{
    if(key.length!=0){
       
        return new Promise((resolve,reject)=>{

            const url=`https://api.themoviedb.org/3/search/movie?query=${key}&api_key=cfe422613b250f702980a3bbf9e90716`;
        
            axios.get(url).then((res)=>{
                resolve(res.data.results)
            }).catch((err)=>{
                reject(err)
            })
        
         })
    }
   else{
      
    return new Promise((resolve,reject)=>{

        const url=`https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;
    
        axios.get(url).then((res)=>{
            resolve(res.data.results)
        }).catch((err)=>{
            reject(err)
        })
    
     })
   }
}
