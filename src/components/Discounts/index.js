import './index.css'

const Discounts = () => (
  <div className="student-discounts-container">
    <div className="student-discount-description-container">
      <p className="percent-text">Get 20% off for student </p>
      <h1 className="student-discounts-availability-text">
        Student discounts available.{' '}
        <span className="get-ready-fun-text">
          {' '}
          Get ready for some fun in the sun!
        </span>
      </h1>
      <ul className="student-discounts-lists-container">
        <li className="discount-list-item">Lorem ipsum dolor sit amet</li>
        <li className="discount-list-item"> Massa quis natoque sit quam</li>
        <li className="discount-list-item">Eros non pellentesque elit</li>
        <li className="discount-list-item">tortor id euismod habitant</li>
        <li className="discount-list-item">Sed suspendisse id in ultrices</li>
      </ul>
      <button className="discount-explore-more-button">Explore More</button>
    </div>
    <img
      src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693665629/Mask_group_zq51fb.png"
      className="student-discount-image"
    />
  </div>
)

export default Discounts
