import { advantages } from "../../api/Api";
import Advantage from "./Advantage";
import "../../styles/advantages.css";
import { motion } from "framer-motion";

export default function Advantages() {
  return (
    <motion.div
      className="advantages"
      transition={{ staggerChildren: 0.4 }}
      id="advantages"
    >
      <h1>ميزات الموقع</h1>
      <div className="advantages-content">
        {advantages.map((ad) => (
          <Advantage text={ad.text} />
        ))}
      </div>
    </motion.div>
  );
}
