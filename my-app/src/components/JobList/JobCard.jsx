import PropTypes from "prop-types";
import BasicRating from "./Rating";
import {Link} from "react-router-dom";
import {memo} from "react";

const JobCard = ( {props} ) => {

    const {name, title} = props;

    const randomNumber = Math.floor(Math.random() * 5) + 1;

    const arrImg = [
        './images/job-card-imgOffice1.png',
        './images/job-card-imgOffice2.png',
        './images/job-card-imgOffice3.png',
    ];
    const imgOffice = arrImg[Math.floor(Math.random()*arrImg.length)];

    return(
        <div className="job-card">

                <div className="job-card-content">
                    <div className="job-card-img">
                        <img src={imgOffice}/>
                    </div>

                    <div className="job-card-text">
                        {/*Не получилось стилизовать, добавить могу но не знаю как
                    поменять стили на адаптиве поэтому так оставил*/}
                        <Link to={`/${name}`} className="job-card-text-title">
                            {title}
                        </Link>
                        <p>Department name • {name}</p>
                        <div className='job-card-text-location'>
                            <img src="./images/job-card-location.png"/>
                            <p>Vienna, Austria</p>
                        </div>
                    </div>
                </div>

                <div className="job-card-content job-card-content-bottom">
                <span>
                    <div className="job-card-rating">
                        <BasicRating rating={randomNumber}/>
                    </div>

                    <div className="job-card-marker">
                        <img src="./images/marker-icon.png"/>
                        <p>Posted {randomNumber} days ago</p>
                    </div>
                </span>

                    <div className="job-card-text-mob">
                        <Link to={`/${name}`} className="job-card-text-title">
                            {title}
                        </Link>
                        <p>Department name • {name}</p>
                        <div className='job-card-text-location'>
                            <img src="./images/job-card-location.png"/>
                            <p>Vienna, Austria</p>
                        </div>
                    </div>
                </div>

            </div>
    )
}

JobCard.prototype = {
    name: PropTypes.string,
    title: PropTypes.string,
}

export default memo(JobCard);