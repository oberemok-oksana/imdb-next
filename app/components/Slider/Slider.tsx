"use client";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import styles from "./Slider.module.css";
import { MovieType } from "@/app/types";

type SliderPropsType = {
  data: MovieType[];
};

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
  top: "34%",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="rgb(249 226 236 / 80%)"
      >
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="rgb(249 226 236 / 80%)"
      >
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  ),
};

const Slideshow = ({ data }: SliderPropsType) => {
  return (
    <div className="w-[610px]">
      <Fade {...properties}>
        {data.map((movie, index) => (
          <div key={index}>
            <img
              style={{ width: "100%" }}
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            />
            <h2 className="text-slate-300 font-semibold text-2xl py-3">
              {movie.title}
            </h2>
            <p className="text-slate-300">{movie.overview}</p>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
