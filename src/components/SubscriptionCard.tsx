import { SubscriptionComparision } from "../lib/Dataset";
import { LucideCircleAlert, LucideCircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const PLAN_DETAILS = [
  { key: "free", title: "Free", color: "#f50" },
  { key: "pro", title: "Pro - $25/Month", color: "#0f0" },
] as const;

function SubscriptionCard() {
  return (
    <div className="flex justify-center flex-row">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PLAN_DETAILS.map((plan) => (
          <div
            key={plan.key}
            className=" p-4 rounded-2xl shadow-2xl transition hover:scale-[1.02]"
          >
            <h1 className="text-2xl text-center font-extrabold mb-3">
              {plan.title}
            </h1>
            <div className="flex flex-col gap-2 p-2">
              {SubscriptionComparision.map((d, index) => (
                <>
                  <motion.div
                    key={index}
                    className="flex flex-row items-center gap-2"
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index / 10,
                    }}
                  >
                    {plan.key === "free" ? (
                      <LucideCircleAlert color={plan.color} />
                    ) : (
                      <LucideCircleCheck color={plan.color} />
                    )}
                    {d[plan.key as keyof typeof d]}
                  </motion.div>
                </>
              ))}
            </div>
            {plan.key == "pro" && (
              <motion.button
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay:1.9,
                }}
                className="bg-gradient-to-b  from-blue-700 text-white to-violet-500 p-3 rounded-3xl w-[100%] font-semibold cursor-pointer hover:bg-blue-800 duration-150 justify-center flex"
              >
                Get Pro
              </motion.button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscriptionCard;
