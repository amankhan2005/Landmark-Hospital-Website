import { Link, useParams } from "react-router-dom";
import { specialities } from "../SpecilitesData.jsx";
import ContactUs from "./ContactUs.jsx";
import pattern from "../assets/pattern1.jpg";
import BreadCumb2 from "./Breadcumb2.jsx";
import { FaCheck } from "react-icons/fa";
import AppointmentForm from "./AppointmentForm.jsx";
import FAQSection from "./Faq.jsx";

const SpecialtyDetail = () => {
  const { specialtyName } = useParams();
  const specialty = specialities.find((item) => item.link === specialtyName);

  if (!specialty) {
    return (
      <div className="text-center text-xl text-red-500 font-semibold mt-10">
        Specialty not found
      </div>
    );
  }

  const title = specialtyName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  console.log(specialty);
  return (
    <>
      <BreadCumb2
        items={[
          { label: "Home", link: "/" },
          { label: "Our Departments", link: "/specialities" },
          { label: title, link: `/specialities/${specialtyName}` },
        ]}
        title={specialty.title}
      />

      <div className="max-w-7xl mx-auto px-4 pt-8 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 ">
          <div className="md:col-span-8 bg-gray-10 md:p-4 rounded-2xl py-5">
            <p className="text-gray-700 relative  z-10 md:text-lg mb-4 text-base text-justify leading-relaxed ">
              <div className="">
                <span className="text-2xl font-semibold messiri text-primary">
                  Overview -{" "}
                </span>
                <span className="text-2xl font-semibold messiri text-primary">
                  Best {specialty.title} Hospital in Bahraich{" "}
                </span>
              </div>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${pattern})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.2,
                  zIndex: -1,
                }}
              ></div>
              {specialty.description}
            </p>
            <img
              src={specialty.img}
              alt={specialty.title}
              className="w-full md:h-80 h-52 rounded-xl"
            />
            

            <div className=" pt-6">
              <h2 className="text-2xl font-semibold messiri text-primary mb-4">
                {" "}
                Our Specialise Services{" "}
              </h2>
              <ul className="list-none grid grid-cols-2  text-gray-700 space-y-2">
                {specialty.services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="bg-primary w-5 h-5 p-1 rounded-full flex justify-center items-center">
                      <FaCheck className="text-white" />
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>


{/* detail section */}

<div className="max-w-7xl   flex mx-auto">
        <div className="flex-2 ">
          {specialty.details.map((item) => (
            <div className="">
              <div className="text-2xl mt-6 mb-2 font-semibold text-primary  messiri">
                {item.title}
              </div>
              <ul className="list-disc px-4 text-justify list-inside text-gray-700 space-y-1 ">
                {item.description.map((li) => (
                  <li className=" font-semibold">
                    {li.split(":")[0]} :{" "}
                    <span className="font-normal text-base ">
                      {li.split(":")[1]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


          </div>

          <div className="md:col-span-4">
            <h3 className="text-2xl font-semibold text-primary mb-4 messiri">
              Other Specialities
            </h3>
            <div className="space-y-2 border p-4 rounded-lg border-gray-300 bg-primary">
              {specialities.map((item) => (
                <Link
                  to={`/specialities/${item.link}`}
                  key={item.link}
                  className={`flex items-center border border-gray-300 bg-white p-2 rounded-lg shadow-sm hover:bg-gray-100 transition ${
                    item.title === specialty.title ? "hidden" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    className="h-10 w-10 p-0.5 bg-blue-200 rounded-full mr-3"
                    alt={item.title}
                  />
                  <span className="text-gray-700 font-medium">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
       <div className="p-4 mt-6 rounded-lg shadow-2xl bg-primary">
<AppointmentForm/>
</div>
          </div>

        </div>

        
      </div>
      {/* details  section*/}
     
      <div className="container mx-auto px-8 py-4 mb-8 bg-primary rounded mt-8">
        <h2 className="text-2xl messiri font-semibold text-white mb-4 px-4">
          Frequently Asked Questions
        </h2>
        <FAQSection faqs={specialty.faqs} />

      </div>

      {/* <div className="md:mb-0 mb-4">
        <ContactUs />
      </div> */}
    </>
  );
};

export default SpecialtyDetail;
