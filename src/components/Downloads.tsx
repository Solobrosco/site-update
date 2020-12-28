import React from 'react';

interface DownloadsProps {
    resume?: boolean,
    certificates?: boolean,
}

const Downloads = (props: DownloadsProps) => {
    return (
        <div className='flex flex-col space-y-3 p-3 justify-center text-center bg-gruvbg-3 text-gruvwhite'>
            {props.resume && <button className="text-yellow-800 hover:text-yellow-900 text-3xl bg-yellowgruv-light hover:bg-yellowgruv font-black p-5 border-b-8 border-yellowgruv hover:border-yellowgruv-light rounded">
                    Download Resume
                </button>}
            {props.certificates && <button className="text-3xl bg-purplegruv-light hover:text-gruvfg-3 hover:bg-purplegruv font-black p-5 border-b-8 border-purplegruv hover:border-purplegruv-light rounded">
                    View Certificates
                </button>}
        </div>
    );
}

export default Downloads;