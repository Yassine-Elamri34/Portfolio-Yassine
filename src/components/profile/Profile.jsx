import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className="relative mx-4 xxl:mx-0.5 mt-20 lg:mt-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt="Profile"
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        {/* Bio section */}
        <div className="max-sm:w-full w-[33rem]">
          <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] max-md:text-center font-semibold mb-8">
            I am a professional Web Developer
          </h2>

          <div className="text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600 space-y-4">
            <p>
              I build websites that do more than look good — they're backed by
              data and built to perform. My background in Business Intelligence
              gives me a different perspective on web development: I think about
              how a site <em>behaves</em> and what it <em>tells you</em>, not
              just how it looks.
            </p>
            <p>
              Based in Toronto, I focus on responsive, modern web experiences
              where clean code and smart design work together. If you have an
              idea, I'll figure out the best way to build it.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
  href="#portfolio"
  onClick={(e) => {
    e.preventDefault();
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
>
  My Projects
</a>

<a
 className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
  href="/Portfolio/CV/Resume.pdf"
  download="Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <FontAwesomeIcon icon={faDownload} /> Download CV
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
