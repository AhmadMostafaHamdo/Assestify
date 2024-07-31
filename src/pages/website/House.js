export default function House({ count, date, price, total, img }) {
  return (
    <div className="house">
      <div className="house-content">
          <h1>متاح</h1>
        <div className="img">
          <img src={img} alt=""/>
        </div>
        <div className="house-site">
          <div className="house-site-one">
            <span>اسطنبول</span>
            <i>icon</i>
          </div>
          <div className="house-site-one">
            <span>متاح</span>
            <i>icon</i>
          </div>
          <div className="house-site-one">
            <span>{count}</span>
            <i>icon</i>
          </div>
        </div>
        <h2>شقة بغرفة نوم { count}</h2>
        <div className="info">
          <div className="info-one">
            <span>تاريخ التمويل</span>
            <h5>{date}</h5>
          </div>
          <div className="info-one">
            <span>سعر الشراء</span>
            <h5> {price}</h5>
          </div>
          <div className="info-one">
            <span>إجمالي إيرادات الإيجار</span>
            <h5>{total}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
