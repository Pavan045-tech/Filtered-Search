import React from "react";
import Details from "../Components/datalist";



const Search_bar = () => {
    const [search1,setchange]=React.useState('');

    return(
        Details.filter((item) => {
            if(item.name.includes(search1)){
                    return item;
            }}).map((item,key)=>{
            return(
                <tr id={key}>
                    <td><label for="search">Search :</label>
                        <input id="search" onChange={(event)=>{setchange(event.target.value)}}></input></td>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>{item.salary}</td>
                    <td>{item.Location}</td>
                    <td><button onClick={()=>{document.getElementById(key).setAttribute('style','visibility:collapse')}}>delete</button></td>
                </tr>
            )
        }));
}


export default Search_bar