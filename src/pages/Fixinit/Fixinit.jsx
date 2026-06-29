import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// Replace these imports with your actual screenshot imports
// import img1 from "./images/fixinit-1.png";
// import img2 from "./images/fixinit-2.png";
// ... etc.



const techStack = {
  Frontend: ["React", "React Router", "Tailwind CSS", "Axios"],
  Backend: ["ASP.NET Core Web API", "C#", "Entity Framework Core"],
  Database: ["MySQL"],
  Other: ["SMTP Email Verification", "RESTful API", "Git & GitHub"],
};

const userRoles = [
  {
    role: "Business Owner",
    description:
      "Registers and verifies their account, manages their business profile, browses available technicians, submits regular or emergency IT support requests, tracks request status, approves completed work, and leaves ratings and reviews.",
  },
  {
    role: "Technician",
    description:
      "Registers and verifies their account, builds a professional profile with skills and hourly rate, manages availability, accepts or declines incoming requests, marks jobs as completed, and receives client reviews.",
  },
  {
    role: "Administrator",
    description:
      "Oversees the entire platform — views all registered users, suspends, blocks, unblocks, activates, or removes accounts, and monitors overall platform activity.",
  },
];

const features = [
  "Secure role-based authentication with email verification",
  "Business owner and technician dashboards",
  "Emergency IT support workflow",
  "Request lifecycle management from submission to approval",
  "Technician availability management",
  "Review and rating system",
  "Administrator control panel",
  "Profile management for all user roles",
  "Responsive design across desktop, tablet, and mobile",
  "REST API architecture with secure backend validation",
];

const Fixinit = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Header */}
      <header className="bg-white shadow-sm px-6 md:px-10 py-5 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-lg md:text-2xl font-semibold text-gray-900">
          Fixinit — IT Support Platform
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary btn-sm md:btn-md flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Portfolio
        </button>
      </header>

      {/* Main Content */}
      <div className="content max-xxl:px-4 py-14 flex flex-col gap-14">

        {/* Overview */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 text-[16px] leading-relaxed">
            <strong>Fixinit</strong> is my Capstone Project developed during my Postgraduate
            Certificate in Web Development at <strong>Humber Polytechnic</strong>. It is a
            full-stack web application that connects businesses with local IT technicians for
            on-site and emergency technical support.
          </p>
          <p className="text-gray-600 text-[16px] leading-relaxed mt-3">
            The platform simplifies the entire process — from finding a trusted IT professional
            to resolving issues like network failures, hardware problems, POS outages, and
            software emergencies. Unlike a traditional service listing, Fixinit manages the
            complete workflow from request creation through to job completion and client approval.
          </p>
        </section>

        {/* Live Demo */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Live Demo</h2>
          <p className="text-gray-600 text-[16px] leading-relaxed mb-4">
            Explore the full platform including the business owner experience, technician dashboard,
            and administrator control panel.
          </p>
          <a
            href="https://fixinit.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Visit Fixinit.ca
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </section>

        {/* Goals */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Goals</h2>
          <ul className="flex flex-col gap-2 text-gray-600 text-[16px] leading-relaxed">
            <li>Build a multi-role platform connecting businesses with local IT professionals.</li>
            <li>Implement a full service workflow from request submission to job approval.</li>
            <li>Deliver a secure, scalable full-stack application using modern web technologies.</li>
          </ul>
        </section>

        {/* User Roles */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">User Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {userRoles.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-[15px] font-semibold text-[#0284C7] mb-2">{item.role}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Main Features</h2>
          <ul className="flex flex-col gap-2 text-gray-600 text-[16px] leading-relaxed">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-5">Tech Stack</h2>
          <div className="flex flex-col gap-4">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category}>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">{category}</p>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#E0F5FD] text-[#0284C7] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-600 text-[16px] leading-relaxed">
            Fixinit demonstrates my ability to design, develop, and deliver a complete
            production-style web application from scratch. Every part of the project — the
            frontend, backend, database design, API development, authentication system,
            administrator panel, and deployment — was built by me as a solo capstone.
          </p>
          <p className="text-gray-600 text-[16px] leading-relaxed mt-3">
            The project reflects real-world software engineering practices and showcases my
            ability to build scalable, multi-role business solutions using modern web technologies.
          </p>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-10 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Yassine Elamri — All Rights Reserved
        </p>
      </footer>

    </div>
  );
};

export default Fixinit;
