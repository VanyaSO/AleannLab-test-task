import React from "react";

const JobDetailedPage = ({itemsArr, text, classColor}) => {

    return(
        <>
            {text ? <p>{text}</p> : null}

            {itemsArr ? itemsArr.map((item) => (
                <span className={`additional-info-item ${classColor}`}>{item}</span>
            )) : null}
        </>
    )
}


export default JobDetailedPage;