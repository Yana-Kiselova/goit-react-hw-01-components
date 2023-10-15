import css from "./Statistics.module.css";
import randomColor from "../../helper/randomColor";
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map((item) => {
          return (
            <li className={css.item} key={item.id} style={{ backgroundColor: randomColor() }}>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
