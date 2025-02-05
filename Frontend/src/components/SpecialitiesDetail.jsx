import { Link, useParams } from "react-router-dom";
import { specialities } from "../SpecilitesData.jsx";
import BreadCumb from "./Breadcumb.jsx";
import SpecilitesComponent from "./SpecilitesComponent.jsx";
import ContactUs from "./ContactUs.jsx";
import { specialities as SpecilitesData } from "../SpecilitesData.jsx";
import pattern from "../assets/pattern1.jpg";
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

  return (
    <>
      <BreadCumb
        items={[
          { label: "Home", link: "/" },
          { label: "Specialities", link: "/specialities" },
          { label: title, link: `/specialities/${specialtyName}` },
        ]}
        title={specialty.title}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-7 items-cente">
          <div className="md:col-span-5 bg-gray-100 md:p-4 rounded-2xl">
            {/* <h1 className="text-4xl font-bold text-blue-600 mb-6 messiri">
              {specialty.title}
            </h1> */}
            <img
              src={specialty.img}
              alt={specialty.title}
              className="w-full md:h-96 h-52 rounded-xl"
            />
            <p className="text-gray-700 relative md:p-5 z-10 md:text-lg  text-base text-justify leading-relaxed mt-6">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${pattern})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.8,
                  zIndex: -1,
                }}
              ></div>
              {specialty.description} Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Recusandae incidunt molestiae temporibus, velit
              sed nesciunt deleniti officiis sit mollitia? Accusantium dicta hic
              sapiente excepturi? Natus repellat eum nemo, ducimus cum magnam ea
              doloribus quisquam, modi quia, iure sapiente accusamus id soluta
              ipsa recusandae! Tempora corporis laboriosam doloribus in facilis
              vitae!
            </p>

            <div className="mt-8 px-4 mb-4">
              <h2 className="text-2xl font-semibold text-primary mb-4  messiri">
                Services Offered
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {specialty.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3 border border-gray-300 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-2xl messiri font-semibold text-primary mb-4">
              Other Specialities
            </h3>
            <div className="space-y-2">
              {SpecilitesData.map((item) => (
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
          </div>
        </div>

      </div>
      <div className="md:mb-0 mb-4">

        <ContactUs />
      </div>

      {/* <div className="bg-gray-100 py-12 px-10">
        <h2 className="md:text-4xl text-2xl font-bold text-center mb-10 messiri">
          Other Specialities
        </h2>
        <SpecilitesComponent specialty={specialty} />
      </div> */}
    </>
  );
};

export default SpecialtyDetail;
