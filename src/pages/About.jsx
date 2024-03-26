import { stakeholder } from "../anteilScheine";
import ImageAboutUs from "../components/ImageAboutUs";
import { FOUNDERS } from "../products";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <>
      <div className="bg-gray-100 p-8 md:p-16 mt-10 md:mt-20 mx-auto w-3/4 rounded-md shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Gründer</h2>
        <ul className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 ">
          {FOUNDERS.map((person) => (
            <ImageAboutUs key={person.id} data={person} />
          ))}
        </ul>
      </div>

      <hr className="bg-gray-200 mt-3" />
      {/* <span className="absolute left-1/2 bottom-80">
        <FontAwesomeIcon
          icon={faArrowDown}
          size="2xl"
          style={{ color: "#a3d3f1" }}
        /> */}
      {/* </span> */}
      <div className="flex md:justify-between md:flex-wrap flex-col flex-wrap ">
        <span className="flex-1 ml-5  bg-slate-50 p-8 md:p-16 mt-6 md:mt-12 rounded-md shadow-lg overflow-y-auto z-10 md:mb-14 ">
          {" "}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Erfolge</h2>
          <ul className="list-disc text-base md:text-lg">
            <li>Aufgenommen ins Changemaker Programm</li>
            <li>Erster Platz in der Youth Entrepreneurship Week</li>
            <li>Innovative Produktentwicklung</li>
          </ul>
        </span>
        <span className="flex-1 ml-5 mr-5 bg-slate-50 p-8 md:p-16 mt-6 md:mt-12 rounded-md shadow-lg overflow-y-auto z-10 mb-14">
          {" "}
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Anteilscheine</h2>
          <ul className="list-disc text-base md:text-lg">
            <li>Price: {stakeholder.price}€</li>
            <li>Total: {stakeholder.total}</li>
            <li>Taken: {stakeholder.taken}</li>
            <p className="text-center">
              <strong>
                {((stakeholder.taken / stakeholder.total) * 100).toFixed(2)} %
              </strong>
            </p>
            <progress
              className="rounded-md w-1/2 flex mx-auto"
              max={80}
              value={stakeholder.taken}
            ></progress>
          </ul>
        </span>
      </div>
    </>
  );
}

export default About;
