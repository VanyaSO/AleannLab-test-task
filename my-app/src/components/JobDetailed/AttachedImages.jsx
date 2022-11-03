import React from "react";

const AttachedImages = ({itemsArr}) => {

    return(
        <div className='job-info-work-content'>
            {itemsArr ? itemsArr.map((item) => (
                <img src={item}/>
            )) : null}
        </div>
    )
}

export default AttachedImages;