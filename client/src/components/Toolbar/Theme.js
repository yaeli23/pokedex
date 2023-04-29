import React from "react";
export let Theme = ({setTheme}) => {

    return (
        <div className="display-flex margin-10">
            <div className='secondary-title'>dark/light:</div>
            <button onClick={()=>setTheme(toggle =>!toggle)}>switch theme</button>
        </div>
    );
}
