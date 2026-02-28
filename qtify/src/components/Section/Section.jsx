import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const Section = ({ title, api }) => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [api]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button
          className={styles.collapse}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              follows={item.follows}
              title={item.title}
              isSong={false}  // NEW prop
            />
          ))}
        </div>
      ) : (
        <Carousel
          data={data}
          renderItem={(item) => (
            <Card
              image={item.image}
              follows={item.follows}
              title={item.title}
              isSong={false}  // NEW prop
            />
          )}
        />
      )}
    </div>
  );
};

export default Section;
