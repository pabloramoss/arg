import { months } from "@/utils/months";

/* create a react component called "Month" that render every day number of the month in a div, the number of the day in every month are in month.days inside of every element in months object */
const Month = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {months.map((month) => (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold">{month.name}</h1>
          <div className="flex flex-row items-center justify-center w-full h-full">
            {month.days.map((day) => (
              <div className="flex flex-col items-center justify-center w-16 h-16">
                <h1 className="text-2xl font-bold">{day}</h1>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Month;
