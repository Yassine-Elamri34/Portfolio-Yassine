
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Projects = ({ data }) => {
  const buttonClass =
    "btn flex items-center justify-center gap-2 w-full h-10 min-h-0 " +
    "px-2 py-2 bg-white border border-gray-200 rounded-md " +
    "text-gray-900 text-[12px] sm:text-[13px] font-semibold " +
    "hover:border-picto-primary hover:text-picto-primary " +
    "transition-all duration-300 whitespace-nowrap";

  return (
    <div className="w-full h-full max-w-106 flex flex-col rounded-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 shadow-gray-300 overflow-hidden">

      {/* PROJECT IMAGE */}
      <img
        src={data?.image}
        alt={`${data?.title} image`}
        className="w-full object-cover"
      />

      {/* CARD CONTENT */}
      <div className="p-4 xs:p-6 flex flex-col flex-grow">

        {/* CATEGORY */}
        <p className="text-gray-400 text-xs font-medium">
          {data?.category}
        </p>

        {/* TITLE */}
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>

        {/* DESCRIPTION */}
        <p
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
          style={{ lineHeight: "20px" }}
        >
          {data?.description}
        </p>

        {/* BUTTONS - ALWAYS AT BOTTOM */}
        <div className="mt-auto pt-6">

          <div className="flex flex-wrap items-center justify-start gap-2 w-full">

            {/* GO LIVE */}
            {data?.link ? (
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
              >
                Go Live
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            ) : (
              <div />
            )}

            {/* CASE STUDY */}
            {data?.slug ? (
              <Link
                to={`/${data.slug}`}
                className={buttonClass}
              >
                Case Study
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            ) : (
              <div />
            )}

            {/* GITHUB */}
            {data?.github ? (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass}
              >
                GitHub
                <FontAwesomeIcon icon={faGithub} />
              </a>
            ) : (
              <div />
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
