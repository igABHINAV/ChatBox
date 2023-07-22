import React from 'react'

const Header = (props) => {
    return (
        <>
            <div className='d-flex border-bottom text-center' style={{ borderBottom: '4px solid grey' }}>
                <div className='d-flex col-11'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                    </svg>
                    <h4 className='mx-4'>{props.trip}</h4>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-pencil-square align-left"
                    style={{ textAlign: 'left' }}
                    viewBox="0 0 16 16"
                >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                </svg>

            </div>
            <br />
            <div className='d-flex border-bottom text-center' style={{ borderBottom: '4px solid grey' }}>

                <img
                    className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width={32}
                    height={32}
                    src="https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                />
                <h6>From <strong>{props.from} </strong> to <strong>{props.to}</strong></h6>
                <br />
                <br />
            </div>

        </>
    )
}

export default Header