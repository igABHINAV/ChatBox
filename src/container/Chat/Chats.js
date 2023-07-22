import React from 'react'

const Chats = (props) => {
  const shadowStyle = {
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    borderBottomLeftRadius: '20px',

  };
  return (
    <div className="d-flex text-body-secondary pt-3 justify-content-center">
      <img
        className="bd-placeholder-img flex-shrink-0 me-2 rounded"
        width={32}
        height={32}
        src={`${props.image}`}
        role="img"
        aria-label="Placeholder: 32x32"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
      <div className='border  mx-1 my-2  ' style={{ width: "80%" }}>
        <p className="pb-3 mb-0 small lh-sm border-bottom bg-white" style={shadowStyle}>
          <strong className="d-block text-gray-dark px-2 py-2">{props.message}
          </strong>


        </p>
      </div>
    </div>

  )
}

export default Chats
