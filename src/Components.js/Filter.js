import React, { useState } from 'react';
import classes from "./Filter.module.css";

const Filter = () => {

    const list =
    [
        "India",
        "Pakistan",
        "Bangladesh",
        "Shrilanka",
        "Newziland",
        "Austria",
        "Nepal",
        "India",
        "Pakistan",
        "Bangladesh",
        "Shrilanka",
        "Newziland",
        "Austria",
        "Nepal",
        "India",
        "Pakistan",
        "Bangladesh",
        "Shrilanka",
        "Newziland",
        "Austria",
        "Nepal",
        "India",
        "Pakistan",
        "Bangladesh",
        "Shrilanka",
        "Newziland",
        "Austria",
        "Nepal",
        "India",
        "Pakistan",
        "Bangladesh",
        "Shrilanka",
        "Newziland",
        "Austria",
        "Nepal",
        "India",
        "Pakistan",
        "Bangladesh",
        "Shrilanka",
        "Newziland",
        "Austria",
        "Nepal",
        "India",
        "Pakistan",
        "Bangladesh",
        "Shrilanka",
        "Newziland",
        "Austria",
        "Nepal",
        "India",
        "Pakistan",
        "Bangladesh",
        "Shrilanka",
        "Newziland",
        "Austria",
        "Nepal",
    ]
    
    const [fileterList, seFilterList] = useState(list);

    const handleChange = (event) => {
          const filteredValues = list.filter(
            (arr) =>
              arr.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
          );
          seFilterList(filteredValues);
        };
    
 
    return (
        <div className={classes.mainDiv}>
            <div className={classes.search}>
                <input className={classes.input}  onChange={handleChange}/>
            </div>
            <div className={classes.list}>
                {
                fileterList.map((item) => (
                  <div>{item}</div> 
                ))}
            </div>
        </div>
    )
}

export default Filter