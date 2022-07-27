import React from 'react';

// Props Example
// Props is immutable, can't assign value in readonly property
const Name = (props) => {
    return (
        <div>
            <h1>Mr{props.gender=="F"?"s":""}. {props.name} -&gt;<span>Hero: {props.badge}</span></h1> 
            {props.children}
        </div>
    )
}

export default Name;

/* a.k.a -> also known as */