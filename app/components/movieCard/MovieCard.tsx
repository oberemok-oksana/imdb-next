import Image from "next/image";
import styles from "./MovieCard.module.css";

const MovieCard = () => {
  return (
    <div className={styles.card}>
      <Image
        src="/images/tIgSd8DhLqHlUaeEjVXc3189zAQ.jpg"
        alt="John Wheek"
        width="40"
        height="55"
      />
      <div>
        John Wheek 4 <span>(2023)</span>
      </div>
      <div>
        OMDb Rating <span>9.2</span>
      </div>
      <button>+</button>
    </div>
  );
};

export default MovieCard;
