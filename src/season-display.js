import React from 'react';
import './season-display.css';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it is chilly",
        iconName: "snowflake"
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0? 'summer':'winter';
    } else {
        return lat > 0? 'winter':'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive snowflake icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive snowflake icon`} />
        </div>
    );
};

export default SeasonDisplay;