import React from 'react';

interface DownloadsProps {
    resume?: boolean,
    certificates?: boolean,
}

const Downloads = (props: DownloadsProps) => {
    return (
        <div className='flex flex-col space-y-3 p-3 justify-center text-center bg-gruvbg-4 text-gruvwhite'>
            {props.resume && <button className="hover:text-gruvfg-3 text-3xl bg-gruvbg-2 hover:bg-gruvbg-5 font-black p-5 border-b-8 border-gruvbg-3 hover:border-gruvbg-2 rounded">
                    Download Resume
                </button>}
            {props.certificates && <button className="text-3xl bg-gruvbg-2 hover:text-gruvfg-3 hover:bg-gruvbg-5 font-black p-5 border-b-8 border-gruvbg-3 hover:border-gruvbg-2 rounded">
                    View Certificates
                </button>}
        </div>
    );
}

export default Downloads;