import { houses } from "../../api/Api";
import "../../styles/houses.css";
import House from "./House";

export default function Houses() {
  return (
    <div className="houses" id="houses">
      <div className="houses-header">
        <h1>العقارات</h1>
        <p>
          مع خبرة 20عام في قيادة أكبر الشركات العقارية في دبي نسعى جاهدين لتقديم
          أفضل العقارات والفرص الاستثمارية
        </p>
      </div>

      <div className="houses-content">
        {houses.map((house, i) => (
          <House
            key={i}
            count={house.count}
            date={house.date}
            price={house.price}
            total={house.total}
            img={house.img}
          />
        ))}
      </div>
    </div>
  );
}
