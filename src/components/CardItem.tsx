import { motion } from "framer-motion";
import { BsThreeDots } from "react-icons/bs";

type DataItem = {
  id: number;
  title: string;
  image: string;
  subheading: string;
  date: "string";
};

type CardItemProps = {
  item: DataItem;
};

const CardItem: React.FC<CardItemProps> = ({ item }) => {
  return (
    <motion.div
      className="card dark:hover:bg-[#ffffff] dark:hover:text-black hover:bg-[#25252577] shadow-2xl duration-75 hover:text-white overflow-hidden cursor-pointer rounded-2xl"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: item.id / 10 }}
    >
      <img
        src={item.image}
        alt={item.title}
        className={
          item.date
            ? `w-full  h-50   object-cover  p-2 rounded-2xl`
            : `w-full h-40  object-cover p-2 rounded-2xl`
        }
      />
      <div className=" flex flex-col -gap-1 p-3 ">
        <div className="flex flex-row justify-between items-center">
          <h3 className=" text-start font-semibold">{item.title}</h3>
          {item.date && <BsThreeDots />}
        </div>
        <h4 className="text-xs text-start font-semibold">
          {item.subheading || item.date}
        </h4>
      </div>
    </motion.div>
  );
};

export default CardItem;
