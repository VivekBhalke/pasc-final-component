import "./Card.css"

const Card = () => {

  return (
    <div className="first-div">
      <div className="first-image-div">
        <img
            src="https://plus.unsplash.com/premium_photo-1689326295539-c659dad82d2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmljZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="image"
          />
      </div>
      <div className="second-div">
        <h2 className="Title">12 Mobile UX Design Trends For 2018</h2>
       
        <div className="content-div">
          <p>Things move quickly in the mobile app universe. To succeed in the
            field of mobile UX design, designers must have the foresight and
            prepare for new challenges around the corner</p>
        </div>
        <div className="author-div">
          <div className="main-author">
            <p className="name-of-author">Jon Kantner</p>
            <p className="date-and-time">7 , June 2024</p>
          </div>
          <div className="author-button-div">
            <button className="author-button">
              <p className="read-more">
                Read More
              </p>
              <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                    className="svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                  </svg>
              </div>
            </button>
           
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card;

