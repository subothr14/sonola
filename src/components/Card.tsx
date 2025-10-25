import CardItem from "./CardItem";
import { Data, Recent } from "../lib/Dataset";
import { FaArrowRight, FaClock, FaStar } from "react-icons/fa";

function Card() {
  return (
    <div className="">
      <div className="pt-5 ">
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center justify-between gap-2">
            <FaStar className="text-2xl" />
            <h1 className="text-2xl font-semibold">For you</h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 cursor-pointer">
            <h1 className="font-semibold">View all templates</h1>
            <FaArrowRight className=" " />
          </div>
        </div>
        <div className="pt-5 ">
          <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 gap-4">
            {Data.map((item) => (
              <div key={item.id}>
                <CardItem
                  key={item.id}
                  //@ts-ignore
                  item={item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center justify-between gap-2">
            <FaClock className="text-2xl" />
            <h1 className="text-2xl font-semibold">Recents</h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 cursor-pointer">
            <h1 className="font-semibold">See in projects</h1>
            <FaArrowRight />
          </div>
        </div>
        <div className="pt-5">
          <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Recent.map((item) => (
              <div key={item.id}>
                <CardItem
                  key={item.id}
                  //@ts-ignore
                  item={item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
