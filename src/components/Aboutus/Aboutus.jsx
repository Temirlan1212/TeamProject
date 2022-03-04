import React from "react";
import classes from "./Aboutus.module.css";

const Aboutus = () => {
  return (
    <div style={{ backgroundColor: "rgb(253, 214, 221)" }}>
      <div className={classes.aboutWrapper}>
        <div className={classes.partFirst}>
          <div className={classes.firstTitle}>
            <div className={classes.firstTitleSub}>
              Добро пожаловать! Мы молодой и активно развивающийся бренд.
            </div>
          </div>
          <div>
            <img
              className={classes.aboutImg}
              src="https://static.boredpanda.com/blog/wp-content/uploads/2018/06/vintage-grocery-stores-usa-old-pictures-24-5b322b9f2abed__700.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={classes.partSecond}>
          <div className={classes.aboutTwoTitle}>
            <h2 className={classes.aboutTwoTitleSub}>О Компании</h2>
          </div>
          <div>
            <div className={classes.partSecondDesc}>
              Мы разрабатываем уникальную линию одежды для новорождённых.
              Концепция нашей работы – это разработка продукции, соответствующей
              желаниям сегодняшних родителей: удобных, качественных и недорогих
              вещей, которые были бы доступны всем.
              <br /> <br /> Ассортимент собственного производства JellyMallow
            </div>
          </div>
          <div className={classes.partSecondLast}></div>
        </div>
        <div className={classes.partThird}>
          <div>
            <img
              src="https://expatliving.hk/wp-content/uploads/2017/11/Kids-clothes-Hong-Kong-seed.jpg"
              alt=""
              className={classes.partThirdImg}
            />
          </div>
          <div className={classes.partThirdDescr}>
            JellyMallow- сегодня имеет свои магазины и шоурумы в торговых
            центрах Бишкека. Вся продукция, представленная на сайте, имеются в
            наличии магазинах.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
