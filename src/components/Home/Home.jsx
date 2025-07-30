import { Link } from "react-router"
import styles from "./Home.module.scss"
import { useState } from "react"

const Home = () => {
  const [image, setImage] = useState("project1");

  const onHover = (e) => {
    e.preventDefault();
    setRevealImg(e.target.id);
  }

  return (
    <div className="home-container">
      <section className={`${styles.header} container-fluid`}>
        <img className={styles.headshot} src="https://e7.pngegg.com/pngimages/188/424/png-clipart-software-developer-computer-servers-programmer-web-developer-computer-software-others-miscellaneous-face.png" alt="headshot" />
        <h1 className="title">Kevin Thanh Pham. Full Stack Developer based in Georgia.</h1>
      </section>
      <hr />
      <section className="about">
        <h2>About</h2>
        <p>
          Hello, I'm a full stack web developer with a passion for programming and an eye for design.
          When I'm not programming, you can find me with a guitar in hand, trekking through the city, or building sand castles with moats.
        </p>
      </section>
      <hr />
      <section className="projects">
        <h2>Selected Projects</h2>
        <p>Below is a few of my most recent projects. To view all of my works, head over to the <Link>projects page</Link>.</p>
        <div className={styles.projectContainer}>
          <div>
            <img
              src="https://naxotop.com/wp-content/uploads/2022/12/New-Project-10.webp"
              alt="project snapshot"
              className={image === "project1" ? styles.imgShow : styles.imgHidden}
            />
             <img
              src="https://naxotop.com/wp-content/uploads/2022/12/New-Project-9.webp"
              alt="project snapshot"
              className={image === "project2" ? styles.imgShow : styles.imgHidden}
            />
             <img
              src="https://naxotop.com/wp-content/uploads/2022/12/New-Project-8.webp"
              alt="project snapshot"
              className={image === "project3" ? styles.imgShow : styles.imgHidden}
            />
             <img
              src="https://naxotop.com/wp-content/uploads/2022/12/New-Project-7.webp"
              alt="project snapshot"
              className={image === "project4" ? styles.imgShow : styles.imgHidden}
            />
          </div>
          <div className="project-list">
            <div onMouseOver={() => setImage("project1")}>Atlanta-Kravings</div>
            <div onMouseOver={() => setImage("project2")}>Jane's Voice Actor Site</div>
            <div onMouseOver={() => setImage("project3")}>Bicycle Racerz</div>
            <div onMouseOver={() => setImage("project4")}>Octopath Traveler Encyclopedia</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home