import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Projects = ({ data }) => {
const buttonClass =
  "btn hover:border-picto-primary hover:text-picto-primary bg-white text-[13px] xs:text-[14px] font-semibold transition-all duration-300 px-3 py-2 min-h-0 h-10 whitespace-nowrap";
  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
      <img src={data?.image} alt={`${data?.title} image`} />

      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium">
          {data?.category}
        </p>

        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>

        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>

      {data?.slug ? (
  <div className="flex flex-row justify-center items-center gap-3 mt-5 flex-nowrap">

    {/* GO LIVE */}
    {data?.link && (
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        Go Live

        <span className="ms-1 xs:ms-3">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </a>
    )}

    {/* CASE STUDY */}
    <Link
      to={`/${data.slug}`}
      className={buttonClass}
    >
      Case Study

      <span className="ms-1 xs:ms-3">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </Link>

    {/* GITHUB */}
    {data?.github && (
      <a
        href={data.github}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        GitHub

        <span className="ms-1 xs:ms-3">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
    )}
  </div>
) : (
  <a
    href={data?.link}
    target="_blank"
    rel="noopener noreferrer"
    className={`${buttonClass} mt-5`}
  >
    Go Live

    <span className="ms-1 xs:ms-3">
      <FontAwesomeIcon icon={faArrowRight} />
    </span>
  </a>
)}
      </div>
    </div>
  );
};

export default Projects;