import { useSearchParams } from "react-router-dom";
import BelgeTshirt from "../../assets/lionsdale_belge.webp";
import RedTshirt from "../../assets/lionsdale_red.jpg";
import WhiteTshirt from "../../assets/lionsdale_white.webp";
import styles from "./ProductPage.module.scss";
export const ProductPage = () => {
  enum Colors {
    belge = "belge",
    red = "red",
    white = "white",
  }
  enum Sizes {
    XS = "XS",
    S = "S",
    M = "M",
    L = "L",
    XL = "XL",
    XXL = "XXL",
  }
  const imgUrls = {
    belge: BelgeTshirt,
    red: RedTshirt,
    white: WhiteTshirt,
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedColor = (searchParams.get("color") as Colors) || Colors.white;
  const selectedSize = (searchParams.get("size") as Sizes) || Sizes.M;
  return (
    <div className={styles.container}>
      <img src={imgUrls[selectedColor]} height="200px" alt={selectedColor} />
      <div className={styles["description-container"]}>
        <span>COLOR</span>
        <span className={styles.buttons}>
          {Object.values(Colors).map((color) => (
            <button
              key={color}
              onClick={() =>
                setSearchParams((params) => {
                  params.set("color", color);
                  return params;
                })
              }
              className={`${styles.button} ${
                color === selectedColor ? styles["button-active"] : ""
              }`}
            >
              {color}
            </button>
          ))}
        </span>
        <span>SIZE</span>
        <span className={styles.buttons}>
          {Object.values(Sizes).map((size) => (
            <button
              key={size}
              onClick={() =>
                setSearchParams((params) => {
                  params.set("size", size);
                  return params;
                })
              }
              className={`${styles.button} ${
                size === selectedSize ? styles["button-active"] : ""
              }`}
            >
              {size}
            </button>
          ))}
        </span>
      </div>
    </div>
  );
};
