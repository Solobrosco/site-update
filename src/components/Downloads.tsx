import React from 'react';

interface DownloadsProps {
    resume?: boolean,
    certificates?: boolean,
}

const Downloads = (props: DownloadsProps) => {
    return(
        <div className='text-center text-white'>
            {props.resume && <div className='text-5xl bg-blue-900 font-black py-5'>
                Download Resume
            </div>}
            {props.certificates && <div className='text-5xl bg-blue-800 font-black py-5'>
                View Certificates
            </div>}
        </div>
    );
}

export default Downloads;