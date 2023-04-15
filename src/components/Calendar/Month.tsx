import { months } from "@/utils/months";

/* if i have a number for example 31, create an array from 1 to that number (31), map every number in that array and create a div with the number inside */

const Month = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {months.map((month) => (
        <div key={month.name} className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold">{month.name}</h1>
          <div className="flex flex-row items-center justify-center w-full h-full">
            {Array.from(Array(month.days).keys()).map((day, index) => (
              <div key={index} className="flex flex-col items-center justify-center w-16 h-16">
                <h1 className="text-2xl font-bold">{day + 1}</h1>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Month;
