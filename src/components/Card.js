import React from "react";


const Card = ({name, email , id}) => {

    return (
        <div className="bg-light-green dib br3 pas3 ma2 grow  bw2 shadow-2">
        <img alt="robots" src={`https://robohash.org/${id}?200x200`}></img>
        <div>
        </div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;