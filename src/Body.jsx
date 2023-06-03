import React from 'react';

let Body = (props) => {
    return (
        <>
            <div className='list'>
                <div className='delete' onClick={() => {
                    props.rohit(props.id)
                }} >x</div>
                <li>{props.text}</li>
            </div>
        </>
    )
}
export default Body;