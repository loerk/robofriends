import React from 'react';

//scroll is a wrapp component
//we tell the component to make everything inside scrollable
//it has to render its CHILDREN

//even if i dont pass props to the component it automatically has a property called children which is the wrapped element
const Scroll = (props) => {
    return (
        //outer {} is marking js expression > inner {} is a js object with css styles in JSX
        <div style={{ overflowY: 'scroll', height: '500px' }}>
            {props.children}
        </div>
    )
}

export default Scroll