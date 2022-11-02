import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function MuiPagination() {



    return (
        <Stack spacing={2}>
        <Pagination
            sx={{
                justifyContent: 'center',
                background: 'white',
                width: 'auto',
                margin: '0 auto',
                borderRadius: '10.4px'
            }}
            count={10}
            renderItem={(item) => (
                <PaginationItem
                    components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                />
                )}
            />
        </Stack>
    );
}
