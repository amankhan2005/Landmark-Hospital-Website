import { useParams } from "react-router-dom";
import { specialities } from "../SpecilitesData.jsx";
import BreadCumb from "./Breadcumb.jsx";
import SpecilitesComponent from "./SpecilitesComponent.jsx";
import ContactUs from "./ContactUs.jsx";

const SpecialtyDetail = () => {
  const { specialtyName } = useParams();

  const specialty = specialities.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === specialtyName
  );

  if (!specialty) {
    return (
      <div className="text-center text-xl text-red-500">
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
          { label: "Home", link: `/` },
          { label: `Specialities`, link: `/specialities` },
          { label: `${title}`, link: `/specialities/${specialtyName}` },
        ]}
        title={title}
      />
      <div className="container mx-auto px-4 py-8">
        {/* First Section: Description & Image */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6 ">
          <div className="md:col-span-5 ">
            <h1 className="text-3xl font-bold text-blue-600 mb-4 messiri">
              {specialty.title}
            </h1>
            <p className="text-gray-700 text-justify">
              {specialty.description} Neurology is the medical specialty focused
              on diagnosing and treating disorders of the nervous system,
              including the brain, spinal cord, and peripheral nerves.
              Neurologists address conditions such as strokes, epilepsy,
              migraines, multiple sclerosis, Parkinson’s disease, and
              neuropathy. They evaluate symptoms like memory loss, dizziness,
              numbness, and coordination issues through neurological exams,
              imaging, and diagnostic tests. 
            </p>
            <div className="">
            <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-2 messiri">
              Services Offered
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {specialty.services.map((service, index) => (
                <li key={index} className="mb-2">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          </div>
          <div className="md:col-span-3 flex justify-center">
            <img
              src={specialty.image}
              alt={specialty.title}
              className="w-96 h-96 rounded-lg shadow-lg hover:shadow-2xl  bg-white p-10"
            />
          </div>
        </div>
     

        <ContactUs/>
      </div>
      <div className="bg-gray-100 p-4">
        <h2 className="md:text-4xl text-2xl font-bold text-center mb-12 messiri">
        Other Specialities
        </h2>
        <SpecilitesComponent specialty = {specialty}/>
      </div>
    </>
  );
};

export default SpecialtyDetail;
