import React from 'react';
import './season-display.css';

const seasonConfig = {
    summer: {
        text: "Summer time. Let's hit the beach!!",
        iconName: "sun"
    },
    winter: {
        text: "Winter is here. Burr, it is cold!!",
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
            <div className={`center`}>
                <h1>Latitude: {props.lat}</h1>
                <h1>Longitude: {props.lng}</h1>
                <h1>{text}</h1>
            </div>
            <i className={`icon-right massive snowflake icon`} />
        </div>
    );
};

export default SeasonDisplay;