
import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "4 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "13+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "11",
  },
];

const Introduction = () => {
  return (
    <div
      id="introduction"
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">

        <div className="pt-13 lg:me-31.5 w-full lg:w-auto transition-all duration-500">

          {/* INTRODUCTION TITLE */}
          <h1 className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full leading-tight">
            Hello, I’m
            <span className="text-nowrap inline-block w-full">
              Yassine Elamri
            </span>
          </h1>

          {/* PROFESSIONAL DESCRIPTION */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-900 mt-7 mb-7 max-w-[650px]">
            I'm a Toronto-based{" "}
            <span className="bg-highlight">
              IT Professional
            </span>{" "}
            specializing in Business Intelligence, Data Analytics,
            and Software Development. I enjoy solving technical
            challenges, working with data, and creating practical
            solutions that improve efficiency. I adapt quickly
            to new technologies and focus on making technology
            useful, reliable, and accessible.
          </p>

          {/* CONTACT BUTTON */}
          <div className="text-center lg:text-start">
            <a
              href="mailto:elamriyassin34@gmail.com"
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
            >
              Say Hello!
            </a>
          </div>

        </div>

        {/* INFORMATION SUMMARY */}
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>

      </div>

      {/* PROFILE PHOTO */}
      <div className="max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative">
        <img
          className="shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl"
          src={person}
          alt="Portrait of Yassine Elamri"
        />
      </div>

    </div>
  );
};

export default Introduction;
