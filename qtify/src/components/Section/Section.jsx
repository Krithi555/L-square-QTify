import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = ({ title, api }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(api);
      setData(response.data);
    };

    fetchData();
  }, [api]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.collapse}>Collapse</button>
      </div>

      <div className={styles.grid}>
        {data.map((album) => (
          <Card
          key={album.id}
          image={album.image}
          follows={album.follows}
          title={album.title}
        />
        ))}
      </div>
    </div>
  );
};

export default Section;