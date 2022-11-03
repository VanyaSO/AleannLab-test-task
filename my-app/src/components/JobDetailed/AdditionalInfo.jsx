import React from "react";

const JobDetailedPage = ({itemsArr, text, classColor}) => {

    return(
        <>
            {text ? <p>{text}</p> : null}

            <div className='job-info-work-content'>
                {itemsArr ? itemsArr.map((item) => (
                    <span className={`additional-info-item ${classColor}`}>{item}</span>


                )) : null}
            </div>
        </>
    )
}


export default JobDetailedPage;