import { useParams } from "react-router-dom";
import BreadCumb from "./Breadcumb.jsx";
import ContactUs from "./ContactUs.jsx";
import {facilities as facilitiesData} from '../FacilitiesData'
import FacilitiesComponent from "./FacilitiesComponent.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import OurTeam from "./OurTeam2.jsx";


const FacilitiesDetail = () => {
  const { facilitiesName } = useParams();

  const facilities = facilitiesData.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === facilitiesName
  );

  if (!facilities) {
    return (
      <div className="text-center text-xl text-red-500">
        facilities not found
      </div>
    );
  }

  const title = facilitiesName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <>
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `Facilites`, link: `/facilities` },
          { label: `${title}`, link: `/specialities/${facilitiesName}` },
        ]}
        title={title}
      />
      <div className="px-6  py-8 ">
        {/* First Section: Description & Image */}
        <div className="grid grid-cols-1  md:grid-cols-8 gap-6  p-4  rounded-2xl">
          <div className="md:col-span-5 ">
            {/* <h1 className="text-3xl font-bold text-blue-600 mb-4 messiri">
              {facilities.title}
            </h1> */}
            <p className="text-gray-700 text-justify mt-10">
              {facilities.description} Neurology is the medical facilities focused
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
              {facilities.services.map((service, index) => (
                <li key={index} className="mb-2">
                  {service}
                </li>
              ))}
            </ul>
            </div>
          </div>
          <div className="md:col-span-3 flex justify-center">
            <img
              src={facilities.image}
              alt={facilities.title}
              className="w-full h-72  border-2 border-gray-400  rounded mt-10 bg-gray-200  shadow-lg hover:shadow-2xl "
            />
          </div>
        </div>
        {/* <div className="px-4">
            <OurTeam/>
          </div> */}
          {/* <WhyChooseUs/> */}
      </div>
      <div className="bg-gray-100 p-4 md:px-10 px-4">
      <h2 className="md:text-4xl text-2xl font-bold text-center mb-12 messiri">
        Our Other Facilities
        </h2>
        <FacilitiesComponent props={facilities} />
        <div className="mt-10">

        <ContactUs/>
        </div>
      </div>
    </>
  );
};

export default FacilitiesDetail;
