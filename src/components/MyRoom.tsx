import React from 'react';

const MyRoom = () => {
    return(
        <div className='text-white py-5 bg-blue-800 flex items-center justify-center'>
            <div className='block'>
                <h2 className='font-semibold px-5'>
                    Want to talk? Join my room if its open! I'm happy to talk with you.
                </h2>
            </div>
            <div className='block px-5'>
                {/* State controls which buttons are shown WAIT for API key from Whereby */}
                <button className='bg-red-600 text-white font-semibold py-2 px-4 border border-red-900 cursor-not-allowed rounded shadow'>
                    Closed
                </button>
                <button className='bg-green-600 hover:bg-green-300 hover:text-green-900 text-white font-semibold py-2 px-4 border border-green-900 rounded shadow'>
                    Open
                </button>
            </div>
        </div>
    );
}

export default MyRoom;