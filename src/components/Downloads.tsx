import React from 'react';

interface DownloadsProps {
    resume?: boolean,
    certificates?: boolean,
}

const Downloads = (props: DownloadsProps) => {
    return(
        <div className='text-center text-gruvwhite'>
            {props.resume && <div className='px-10 text-5xl bg-gruvbg-3 font-black py-5'>
                Download Resume
            </div>}
            {props.certificates && <div className='px-10 text-5xl bg-gruvbg-2 font-black py-5'>
                View Certificates
            </div>}
        </div>
    );
}

export default Downloads;