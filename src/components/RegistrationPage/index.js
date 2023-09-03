import './index.css'

const RegistrationPage = () => (
  <div className="student-registration-page-container">
    <img
      src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693666969/Group_167_eux1p7.png"
      className="registration-voucher-student-image"
    />
    <div className="form-card-container">
      <h1 className="book-now-heading-text">Book Now</h1>
      <p className="lorem-ipsum-registration-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <form className="form-container">
        <div className="city-input-container">
          <label className="city-label-text" htmlFor="city">
            CITY
          </label>
          <br />
          <input placeholder="Placeholder" className="city-input" id="city" />
        </div>
        <div className="arrival-departure-container">
          <div className="arrival-input-container">
            <label className="city-label-text" htmlFor="arrival-date">
              ARRIVAL
            </label>
            <input
              placeholder="10 October"
              className="arrival-date-input"
              id="arrival-date"
            />
          </div>
          <div className="arrival-input-container">
            <label className="city-label-text" htmlFor="arrival-date">
              ARRIVAL
            </label>
            <input
              placeholder="11 October"
              className="arrival-date-input"
              id="arrival-date"
            />
          </div>
        </div>

        <div className="arrival-departure-container">
          <div className="arrival-input-container">
            <p className="city-label-text">STAR</p>
            <div className="hotel-star-container">
              <button className="decrement-button">-</button>
              <p className="star-count-text-container">4</p>
              <button className="decrement-button">+</button>
            </div>
          </div>
          <div className="arrival-input-container">
            <p className="city-label-text">ROOM</p>
            <div className="hotel-star-container">
              <button className="decrement-button">-</button>
              <p className="star-count-text-container">1</p>
              <button className="decrement-button">+</button>
            </div>
          </div>
        </div>
        <button className="hotel-book-now-button">Book Now</button>
      </form>
    </div>
  </div>
)

export default RegistrationPage
