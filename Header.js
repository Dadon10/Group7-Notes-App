import React from "react";

const Header = ({handleModeDarkMode}) => {
    return (
    <div className="header">
        <h1>Keep Notes</h1>
        <button onClick={()=> 
            handleModeDarkMode(
                (previousDarkMode) => !previousDarkMode)
            }
        className="save">Mode</button>
    </div>
    );
};

export default Header;