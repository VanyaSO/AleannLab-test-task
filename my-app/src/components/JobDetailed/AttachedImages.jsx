import React from "react";

const AttachedImages = ({itemsArr}) => {

    return(
        <>
            {itemsArr ? itemsArr.map((item) => (
                <img src={item}/>
            )) : null}
        </>
    )
}


export default AttachedImages;