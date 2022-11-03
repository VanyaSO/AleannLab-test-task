import React, {useCallback, useEffect, useState, memo} from 'react';
import {useNavigate, useParams} from "react-router";
import {fetchProducts} from "./api";
import CircularIndeterminate from "./Load";
import {queryState} from "./query-state";
import AdditionalInfo from "./JobDetailed/AdditionalInfo"
import AttachedImages from "./JobDetailed/AttachedImages"
import {useJsApiLoader} from "@react-google-maps/api";
import Map from "./JobDetailed/Maps";


const JobDetailedPage = () => {
    const [jobsList, setJobsList] = useState([]);
    const { name } = useParams();
    const navigate = useNavigate();
    const [jobsQueryStatus, setJobsQueryStatus] = useState([])
    const [jobsQueryError, setJobsQueryError] = useState(queryState.initial)

    useEffect(() => {
        setJobsQueryStatus(queryState.loading);

        fetchProducts()
            .then((jobsList) => {
                setJobsList(jobsList)
                setJobsQueryStatus(queryState.success);
                setJobsQueryError(null);
                console.log(jobsList)
            }).catch((error) => {
            setJobsQueryStatus(queryState.error);
            setJobsQueryError(error);
        })
    }, []);

    // Тут у меня не получилось сделать через Array.find(),
    // поэтому пришлось сделать так, знаю что не правильно но другого выхода я не нашел,
    const job = jobsList.filter(item => item.name === name);

    const goBack = useCallback(() => {
        navigate('/');
    }, [navigate])

    const isLoading = jobsQueryStatus === queryState.loading || jobsQueryStatus === queryState.initial
    const isSuccess = jobsQueryStatus === queryState.success
    const isError = jobsQueryError === queryState.error

    // const API_KEY = process.env.REACT_APP_API_KEA;

    // const centerDef = {
    //     lat: -3.745,
    //     lng: -38.523
    // };
    //
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: API_KEY,
    // })

    return(
        <>
            {isLoading && (
                <CircularIndeterminate />
            )}

            {!isLoading && isSuccess && (
                <>
                    {job.map((job) => (
                        <div key={job.id} className="job-detailed">
                            <div  className="container">
                                <div className="job-detailed-info">
                                    <div className='job-detailed-info-top-panel line-divisions'>
                                        <h3 className='title-divisions'>
                                            Job Details
                                        </h3>

                                        <div className='detailed-dop-funks'>
                                            <span className='dop-funk'>
                                                <img src="./images/marker-icon.png" />
                                                <p>Save to my list</p>
                                            </span>
                                            <span className='dop-funk'>
                                                <img src="./images/shape-icon.png" />
                                                <p>Share</p>
                                            </span>
                                        </div>
                                    </div>

                                    <div className='detailed-dop-funks-mob'>
                                            <span className='dop-funk'>
                                                <img src="./images/star.png" />
                                                <p>Save to my list</p>
                                            </span>
                                        <span className='dop-funk'>
                                                <img src="./images/shape-icon.png" />
                                                <p>Share</p>
                                        </span>
                                    </div>


                                    <button className="btn-apply mob-none">Apply now</button>

                                    <div className="info-about-job">
                                        <div className='job-title-salary'>
                                            <h3 className='job-title'>{job.title}</h3>

                                            <div className='job-salary mob-none'>
                                                <h3>&#8364; {job.salary}</h3>
                                                <p>Brutto, per year</p>
                                            </div>
                                        </div>
                                        <div className="job-description">
                                            <div className='data-salary-post-mob'>
                                                <p className="data-post">Posted 2 days ago</p>

                                                <div className='job-salary'>
                                                    <h3>&#8364; {job.salary}</h3>
                                                    <p>Brutto, per year</p>
                                                </div>
                                            </div>
                                            <p className='description-text'>{job.description}</p>
                                            <h3 className='description-title'>Responsopilities</h3>
                                            <p className='description-text'>
                                                Wellstar Medical Group, a physician-led multi-specialty group in Atlanta,
                                                Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to
                                                join their existing cardiovascular program. This is an opportunity to
                                                play a key role on a multidisciplinary team of cardiologists and surgeons.
                                            </p>
                                            <p className='description-text'>
                                                The ideal candidate will have five or more years of experience
                                                in cardiac surgery. This candidate should be facile with off-pump
                                                revascularization, complex aortic surgery, minimally invasive valve
                                                and valve repair, transcatheter valve replacement, surgical atrial
                                                fibrillation ablation, ventricular assist device placement, and extra
                                                corporeal membrane oxygenation.
                                            </p>
                                            <p className='description-text'>
                                                Wellstar is one of the largest integrated healthcare
                                                systems in the Southeast with 11 hospitals in Atlanta
                                                metro region. With two open heart programs at Kennestone
                                                Regional Medical Center and Atlanta Medical Center,
                                                Wellstar cardiac surgeons perform over 1200 cardiac procedures per year.
                                                The cardiac service line is the only center in Georgia with the
                                                Joint Commission’s Comprehensive Cardiac Center certification.
                                            </p>
                                            <h3 className='description-title'>Compensation & Benefits:</h3>
                                            <ul className='description-compensation'>
                                                <li className='description-text'>Our physicians enjoy a wide range of benefits, including:</li>
                                                <li className='description-text'>Very competitive compensation package with bonuses</li>
                                                <li className='description-text'>Medical, Dental, and Vision Insurance</li>
                                                <li className='description-text'>Occurrence-based Malpractice Coverage</li>
                                                <li className='description-text'>Short-term and Long-term Disability Insurance and life insurance</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <button className="btn-apply">Apply now</button>

                                    <div className='job-info-work'>
                                        <div className="additional-info">
                                            <h3 className='title-divisions line-divisions'>Additional info</h3>
                                            <AdditionalInfo classColor={"blue"} text={"Employment type"} itemsArr={job.employment_type}/>
                                            <AdditionalInfo classColor={"gold"} text={"Benefits"} itemsArr={job.benefits}/>
                                        </div>

                                        <div className="attached-images">
                                            <h3 className='title-divisions line-divisions'>Attached images</h3>
                                            <AttachedImages itemsArr={job.pictures}/>
                                        </div>
                                    </div>

                                    <button className='btn-back' onClick={goBack} >
                                        <img src="./images/arrow-back.png" />RETURN TO JOB BOARD
                                    </button>
                                </div>

                                <h3 className='title-divisions line-divisions desk-none'>Contacts</h3>
                                <div className="job-detailed-map">
                                    <div className='job-detailed-map-text'>
                                        <h3>Department name.</h3>
                                        <h3>University Hospital Giessen.</h3>
                                        <address>
                                            <img src="./images/job-card-location.png"/>
                                            {job.address}
                                        </address>
                                        <p>{job.email}</p>
                                        <p>{job.phone}</p>
                                    </div>
                                    {/*{isLoaded ? <Map center={centerDef} apikey={API_KEY}/> : <h3>help</h3>}*/}
                                </div>

                            </div>

                        </div>
                    ))}
                </>
            )}


            {!isLoading && isError && (
                <div style={{ color: 'red' }}>
                    {jobsQueryError?.message || 'Something went wrong'}
                </div>
            )}
        </>

    )
}


export default memo(JobDetailedPage);