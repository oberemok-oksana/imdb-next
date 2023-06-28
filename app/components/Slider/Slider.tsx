"use client";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import styles from "./Slider.module.css";
import { MovieType } from "@/app/types";

type SliderPropsType = {
  data: MovieType[];
};

const Slideshow = ({ data }: SliderPropsType) => {
  return (
    <div className={styles["slide-container"]}>
      <Fade>
        {data.map((movie, index) => (
          <div key={index}>
            <img
              style={{ width: "100%" }}
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            />
            <h2>{movie.name}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
