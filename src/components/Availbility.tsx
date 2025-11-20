import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { CardContent } from "./ui/card";

const getStatus = (slots: number) => {
  if (slots === 0) return "busy";
  if (slots === 1) return "limited";
  return "available";
};

export default function RealTimeAvailability() {
  const defaultAvailability = [
    { day: "Monday", slots: 3, status: getStatus(3) },
    { day: "Tuesday", slots: 1, status: getStatus(1) },
    { day: "Wednesday", slots: 4, status: getStatus(4) },
    { day: "Thursday", slots: 0, status: getStatus(0) },
    { day: "Friday", slots: 2, status: getStatus(2) },
  ];

  const [availability, setAvailability] = useState(() => {
    const stored = localStorage.getItem("slot_data");
    return stored ? JSON.parse(stored) : defaultAvailability;
  });
  const scrollToContact = () => {
    const element = document.getElementById("connectInfoCards");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔥 Auto-update every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAvailability((prev: any[]) => {
        const updated = prev.map((item) => {
          const change = Math.random() < 0.5 ? -1 : 1;
          const newSlots = Math.max(0, Math.min(5, item.slots + change));

          return {
            ...item,
            slots: newSlots,
            status: getStatus(newSlots),
          };
        });

        localStorage.setItem("slot_data", JSON.stringify(updated));
        return updated;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CardContent className="p-0">
      <div className="space-y-3">
        {availability.map(
          (
            day: {
              day:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<unknown, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactPortal
                    | ReactElement<unknown, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined;
              status: string;
              slots: any;
            },
            index: Key | null | undefined
          ) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-accent/30 dark:bg-accent/20"
            >
              <span className="font-medium">{day.day}</span>

              <div className="flex items-center space-x-2">
                {/* Status Dot */}
                <div
                  className={`w-3 h-3 rounded-full ${
                    day.status === "available"
                      ? "bg-green-500"
                      : day.status === "limited"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                />

                {/* Status Text */}
                <span className="text-sm text-muted-foreground">
                  {day.status === "available" && `${day.slots} slots`}
                  {day.status === "limited" && `${day.slots} slot`}
                  {day.status === "busy" && "Fully booked"}
                </span>
              </div>
            </div>
          )
        )}
      </div>

      {/* CTA Button */}
      <div className="mt-6 pt-6 border-t border-border">
        <Button className="w-full" onClick={scrollToContact}>
          Book a Consultation Call
          <Calendar className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </CardContent>
  );
}
