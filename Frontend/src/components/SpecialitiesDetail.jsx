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
          <div className="md:col-span-5 bg-gray-100 p-4 rounded-2xl">
            {/* <h1 className="text-4xl font-bold text-blue-600 mb-6 messiri">
              {specialty.title}
            </h1> */}
            <img
              src={specialty.img}
              alt={specialty.title}
              className="w-full  h-96 rounded-lg shadow-lg hover:shadow-2xl  p-5 transform transition duration-300 hover:scale-105"
            />
            <p className="text-gray-700 relative p-9 z-10 text-lg leading-relaxed mt-6">
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

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4 messiri">
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
            <h3 className="text-2xl messiri font-semibold text-blue-600 mb-4">
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
                    className="h-10 w-10 rounded-full mr-3"
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
