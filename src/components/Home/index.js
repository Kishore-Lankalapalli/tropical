import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="home-text-container">
      <p className="discovery-the-beauty-text">
        Discover the beauty of the tropics{' '}
      </p>
      <h1 className="tropical-destinations-heading">
        Tropical Destinations{' '}
        <span className="for-student-text">For Student</span>
      </h1>
      <p className="lorem-ipsum-text">
        Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
        integer rutrum nisi. A nec nisl vitae
      </p>
      <button type="button" className="sign-up-button">
        SIGN UP
      </button>
    </div>
    <img
      src="https://res.cloudinary.com/deh78ntmd/image/upload/v1693563590/Group_171_nopbem.png"
      className="profile-image"
    />
  </div>
)

export default Home
