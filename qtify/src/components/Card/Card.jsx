import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

const Card = ({ image, follows, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageSection}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.bottomSection}>
        <Chip
          label={`${follows} Follows`}
          size="small"
          className={styles.chip}
        />
        
      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Card;