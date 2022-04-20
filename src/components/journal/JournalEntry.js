import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yZXN0JTIwbWlzdHxlbnwwfHwwfHw%3D&w=1000&q=80)'
                }}
            />
            <div className="jorunal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Anim irure dolor aliqua sit mollit.
                </p>
            </div>
        </div>
    )
}
