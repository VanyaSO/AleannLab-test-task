import React, {memo} from 'react';
import { useState, useEffect } from "react";
import { fetchProducts } from "./api";
import JobCard from "./JobList/JobCard";
import MuiPagination from "./JobList/Pagination";
import {queryState} from "./query-state";
import CircularIndeterminate from "./Load";

const JobsPage = () => {
    const [jobsList, setJobsList] = useState([]);
    const [jobsQueryStatus, setJobsQueryStatus] = useState([])
    const [jobsQueryError, setJobsQueryError] = useState(queryState.initial)

    useEffect(() => {
        setJobsQueryStatus(queryState.loading);

        fetchProducts()
            .then((jobsList) => {
                setJobsList(jobsList)
                setJobsQueryStatus(queryState.success);
                setJobsQueryError(null);
            }).catch((error) => {
            setJobsQueryStatus(queryState.error);
            setJobsQueryError(error);
        })
    }, []);

    const isLoading = jobsQueryStatus === queryState.loading || jobsQueryStatus === queryState.initial
    const isSuccess = jobsQueryStatus === queryState.success
    const isError = jobsQueryError === queryState.error

    return(

        <>
            {isLoading && (
                <CircularIndeterminate />
            )}

            {!isLoading && isSuccess && (
                <div className="job-list">
                    <div className="container">
                        {jobsList.map((job) => (
                            <JobCard key={job.id} props={job} />
                        ))}
                        <div className="job-list-pagination">
                            <MuiPagination/>
                        </div>
                    </div>
                </div>
            )}


            {!isLoading && isError && (
                <div style={{ color: 'red' }}>
                    {jobsQueryError?.message || 'Something went wrong'}
                </div>
            )}
        </>
    )
}


export default memo(JobsPage);