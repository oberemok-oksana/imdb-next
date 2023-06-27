import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <div className={styles.social}>
          <a target="_blank" href="https://www.facebook.com/">
            <Image src="/images/facebook.svg" alt="" width="20" height="20" />
          </a>
        </div>
        <div className={styles.social}>
          <a target="_blank" href="https://www.instagram.com/">
            <Image src="/images/instagram.svg" alt="" width="20" height="20" />
          </a>
        </div>
        <div className={styles.social}>
          <a target="_blank" href="https://twitter.com/">
            <Image src="/images/twitter.svg" alt="" width="20" height="20" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
