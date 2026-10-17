
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import img8 from "./images/8.png";
import img9 from "./images/9.png";
import img10 from "./images/10.png";
import img11 from "./images/11.png";

import projectReport from "./Project-Report.PDF";
import internshipPresentation from "./presentation-Yassine.pdf";

const galleryImages = [
  { src: img1, alt: "Dashboard Interface" },
  { src: img2, alt: "Client Form Empty" },
  { src: img3, alt: "Client Form Filled" },
  { src: img4, alt: "Global Parcel Status" },
  { src: img5, alt: "Main KPI Charts" },
  { src: img6, alt: "Volume of Parcels per Year" },
  { src: img7, alt: "Failed Deliveries Stats" },
  { src: img8, alt: "Client Dashboard Summary" },
  { src: img9, alt: "Zone Configuration View" },
  { src: img10, alt: "Delivery Analytics Visualization" },
  { src: img11, alt: "Final KPI Overview" },
];

const techStack = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "Chart.js",
  "Bootstrap",
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER */}
      <header className="bg-white shadow-sm px-6 md:px-10 py-5 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-lg md:text-2xl font-semibold text-gray-900">
          Box2home Delivery Dashboard
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary btn-sm md:btn-md flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Portfolio
        </button>
      </header>

      <div className="content max-xxl:px-4 py-14 flex flex-col gap-14">

        {/* OVERVIEW */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Overview
          </h2>

          <p className="text-gray-600 text-[16px] leading-relaxed">
            During my 6-month internship at{" "}
            <strong>Box2home</strong>, France's leading delivery
            company, I developed a complete delivery tracking web
            application. The platform provides real-time analytics
            and key performance indicators (KPIs) to help logistics
            teams monitor parcel success rates and improve
            delivery efficiency.
          </p>

          <p className="text-gray-600 text-[16px] leading-relaxed mt-3">
            This project allowed me to merge my background in{" "}
            <strong>Business Intelligence</strong> with{" "}
            <strong>Web Development</strong>, building a
            data-driven solution that simplifies operational
            decision-making.
          </p>
        </section>

        {/* DEMO */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Demo
          </h2>

          <p className="text-gray-600 text-[16px] leading-relaxed">
            The data displayed in this project is simulated for
            demonstration purposes only. Due to{" "}
            <strong>confidentiality agreements</strong> with
            Box2home, all real operational data has been replaced
            with placeholder values. Please find full details
            in the gallery.
          </p>
        </section>

        {/* GOALS */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Goals
          </h2>

          <ul className="flex flex-col gap-2 text-gray-600 text-[16px] leading-relaxed list-disc pl-5">
            <li>
              Build a dashboard that displays live delivery
              metrics and performance trends.
            </li>
            <li>
              Enable administrators to create and manage
              clients dynamically.
            </li>
            <li>
              Visualize delivery statuses, success rates,
              and yearly parcel volume using charts.
            </li>
          </ul>
        </section>

        {/* TECH STACK */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-[#E0F5FD] text-[#0284C7] px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="w-full rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300 object-cover"
              />
            ))}
          </div>
        </section>

        {/* CONCLUSION */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Conclusion
          </h2>

          <p className="text-gray-600 text-[16px] leading-relaxed">
            The Box2home Dashboard showcases my ability to design
            and develop full-stack applications that combine
            functionality with data visualization. It strengthened
            my technical expertise and demonstrated how web
            technologies can be used to deliver meaningful
            business insights.
          </p>
        </section>

        {/* PROJECT DOCUMENTATION & PRESENTATION */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Project Documentation & Presentation
          </h2>

          <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
            Explore my complete internship project report and
            presentation to learn more about the development
            process, technical implementation, challenges,
            and key achievements.
          </p>

          <div className="flex flex-wrap gap-4">

{/* LANGUAGE NOTICE */}
<div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg px-5 py-4 mb-6">
  <p className="text-sm text-gray-700 leading-relaxed">
    <strong>Note:</strong> The project report and internship
    presentation are available in <strong>French only</strong>,
    as they were originally prepared and presented during
    my internship in France.
  </p>
</div>

            {/* PDF PROJECT REPORT */}
            <a
              href={projectReport}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faFilePdf} />
              View PDF Report
            </a>

            {/* PDF INTERNSHIP PRESENTATION */}
            <a
              href={internshipPresentation}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faFilePdf} />
              View Internship Presentation
            </a>

          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-10 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Yassine Elamri
          {" "}— All Rights Reserved
        </p>
      </footer>

    </div>
  );
};

export default Dashboard;
