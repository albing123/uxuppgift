import React from "react";
import { useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [image, setImage] = useState(
    "https://source.unsplash.com/SD9Jyl1xNQ4/300x375"
  );

  const [altText, setAltText] = useState(
    "A proffesional black and white image of a pair of White Nike Air Force 1's"
  );

  function Puma() {
    setImage("https://source.unsplash.com/NUoPWImmjCU/300x375");
    setAltText(
      "A proffesional black and white image of a pair of white Puma's sneakers"
    );
  }

  function AirForce() {
    setImage("https://source.unsplash.com/SD9Jyl1xNQ4/300x375");
    setAltText(
      "A proffesional black and white image of a pair of White Nike Air Force 1's"
    );
  }

  function Jordan() {
    setImage("https://source.unsplash.com/76w_eDO1u1E/300x375");
    setAltText("A proffesional image of a pair of white and red Jordan 1's");
  }

  return (
    <section className={styles.homeWrapper}>
      <h1 id={styles.homeHeader}>Sneaker news</h1>

      <article id={styles.firstArticle}>
        <h2 id={styles.secHeader}>The idea</h2>
        <section className={styles.imageTextWrapper}>
          <p>
            We would like to make it easy for you as a sneakers lover to get
            information about the latest news regarding sneakers and the sneaker
            industry. in general. <br />
            <br />
            The way we want to do this is by providing information here at the
            website and also give you the opportunity to subscribe to our
            newsletter.
          </p>
          <img src={image} alt={altText}></img>
        </section>
        <div className={styles.buttonWrapper}>
          <button onClick={Puma}>Change image to Puma White Sneakers</button>
          <button onClick={Jordan}>
            Change image to Nike air jordan 1 mid
          </button>
          <button onClick={AirForce}>Change image to Nike Air Force</button>
        </div>
      </article>
    </section>
  );
}
