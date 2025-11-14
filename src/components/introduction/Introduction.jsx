import person from "../../assets/images/person.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "6 mo",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "20+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
              <span className="text-nowrap shrink-0 inline-block w-full">
                Hassan Ameer
              </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            <strong className="inline-block text-blue-600 text-[20px] sm:text-2xl font-semibold tracking-wide uppercase">Front-End Developer</strong>
            <span className="block mt-3">I’m a dedicated and creative Front-End Developer with over seven months of internship experience in designing and developing responsive, interactive, and user-focused web applications. My journey in web development began with a curiosity for how design and functionality come together to create digital experiences that engage users. Over time, I’ve developed a strong technical foundation and a deep passion for building clean, efficient, and visually appealing interfaces.</span>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
