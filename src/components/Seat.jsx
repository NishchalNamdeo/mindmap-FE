import React from "react";
import { Link } from "react-router-dom";

const Seat = () => {
  return (
    <div className="w-full">
      {/* Header Image */}
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: "url(/pc2.webp)" }}
      >
        {/* Overlay */}
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Lok Sabha / Vidhan Sabha / 2023
            <br />
            Madhya Pradesh
          </h1>
        </div>
      </div>

      {/* AC Seat Section */}
      <div className="p-4 md:p-8">
        <h2 className="text-2xl font-bold mb-4 text-[#0A62A0]">
          AC Seat - <span className="text-orange-400">Berasia</span>
        </h2>
        <div className="flex flex-wrap gap-4">
          {/* Card 1 */}
          <div className="w-full border-2 md:w-1/2 lg:w-1/3 bg-white shadow-md p-4 lg:h-44 ">
            <h3 className="text-xl font-semibold">Important Region Details</h3>
            <ul className="mt-2">
              <li>State: Madhya Pradesh</li>
              <li>District: Bhopal</li>
              <li>Ac type: SC</li>
            </ul>
          </div>
          {/* Graph */}
          <div className="w-full border-2 md:w-1/2 lg:w-1/3 bg-white shadow-md p-4">
            <h3 className="text-xl font-semibold">
              Madhya Pradesh :{" "}
              <span className="text-orange-400">Assembly Seat</span>
            </h3>

            <div className="flex border-2 items-end justify-around h-40 mt-4">
              <h1 className="absolute left-[62%] top-[58%] text-[#0A62A0]">
                votes%
              </h1>
              <div
                className="w-16 bg-[#199919]"
                style={{ height: "80%" }}
              ></div>
              <div
                className="w-16  bg-[#ed520f] "
                style={{ height: "50%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* { ac table} */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-blue-700">
          Export To Csv Assembly
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Ac Name</th>
                <th className="border border-gray-300 px-4 py-2">Ac No</th>
                <th className="border border-gray-300 px-4 py-2">Type</th>
                <th className="border border-gray-300 px-4 py-2">District</th>
                <th className="border border-gray-300 px-4 py-2">Candidate</th>
                <th className="border border-gray-300 px-4 py-2">Votes</th>
                <th className="border border-gray-300 px-4 py-2">Party</th>
                <th className="border border-gray-300 px-4 py-2">
                  Total Electors
                </th>
                <th className="border border-gray-300 px-4 py-2">Total Vote</th>
                <th className="border border-gray-300 px-4 py-2">Poll %</th>
                <th className="border border-gray-300 px-4 py-2">Margin</th>
                <th className="border border-gray-300 px-4 py-2">Margin %</th>
                <th className="border border-gray-300 px-4 py-2">
                  Male Electors
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Female Electors
                </th>
                <th className="border border-gray-300 px-4 py-2">Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                  Berasia
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                  149
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                  SC
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                  Bhopal
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Vishnu Khatri
                </td>
                <td className="border border-gray-300 px-4 py-2">107,844</td>
                <td className="border border-gray-300 px-4 py-2">
                  Bharatiya Janta Party
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                  496408
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                  195524
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                  0.394
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                  25397
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                  0.13
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                  257530
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                  238878
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                  1,829 (0.4%)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Jayshree Harikaran
                </td>
                <td className="border border-gray-300 px-4 py-2">82,447</td>
                <td className="border border-gray-300 px-4 py-2">
                  Indian National Congress
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Mastar Vishram Singh Ahirwar (BOUDDH)
                </td>
                <td className="border border-gray-300 px-4 py-2">2,595</td>
                <td className="border border-gray-300 px-4 py-2">
                  Bahujan Samaj Party
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* {important candidate} */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-blue-700">
          Important People Bhopal
        </h2>
        <div className="bg-white shadow-md rounded-lg p-6 border-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold">A</h3>
              <ul className="list-disc ml-5">
                <li>Nisha Ali</li>
              </ul>
              <h3 className="font-semibold mt-4">B</h3>
              <ul className="list-disc ml-5">
                <li>Rashida Bee</li>
                <li>Ankur Bhatia</li>
                <li>Meghdeep Bose</li>
                <li>Balthazar Napoleon IV de Bourbon</li>
                <li>Bourbons of India</li>
              </ul>
              <h3 className="font-semibold mt-4">C</h3>
              <ul className="list-disc ml-5">
                <li>Divya Chouksey</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">G</h3>
              <ul className="list-disc ml-5">
                <li>Guptinandi</li>
              </ul>
              <h3 className="font-semibold mt-4">H</h3>
              <ul className="list-disc ml-5">
                <li>Najma Heptulla</li>
                <li>Hafiz Mazhar Husain</li>
              </ul>
              <h3 className="font-semibold mt-4">K</h3>
              <ul className="list-disc ml-5">
                <li>Idris Kandhlawi</li>
              </ul>
              <h3 className="font-semibold mt-4">M</h3>
              <ul className="list-disc ml-5">
                <li>Dantu Muralikrishna</li>
              </ul>
              <h3 className="font-semibold mt-4">R</h3>
              <ul className="list-disc ml-5">
                <li>Raghuram Rajan</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">S</h3>
              <ul className="list-disc ml-5">
                <li>Kailash Sarang</li>
                <li>Vishvas Sarang</li>
                <li>Vimala Sharma</li>
                <li>Snehlata Shrivastava</li>
                <li>Champa Devi Shukla</li>
                <li>Amit Sood</li>
              </ul>
              <h3 className="font-semibold mt-4">T</h3>
              <ul className="list-disc ml-5">
                <li>Tejomayananda</li>
              </ul>
              <h3 className="font-semibold mt-4">V</h3>
              <ul className="list-disc ml-5">
                <li>Sunil Verma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* PC Seat Section */}
      <div className="p-4 md:p-8">
        <h2 className="text-2xl font-bold mb-4 text-[#0A62A0]">
          PC Seat - <span className="text-orange-400">Indore</span>
        </h2>
        <div className="flex flex-wrap gap-4">
          {/* Card 2 */}
          <div className="w-ful border-2 md:w-1/2 lg:w-1/3 bg-white shadow-md p-4">
            <h3 className="text-xl font-semibold">Important Region Details</h3>
            <ul className="mt-2">
              <li>State: Madhay Pradesh</li>
              <li>Pc type: Gen</li>
              <li>Branch: Bhopal</li>
              <li>SubBranch: Govindpura, Huzur</li>
            </ul>
          </div>
          {/* Graph */}
          <div className="w-ful border-2 md:w-1/2 lg:w-1/3 bg-white shadow-md p-4">
            <h3 className="text-xl font-semibold">
              Madhya Pradesh:{" "}
              <span className="text-orange-400">Parliament Seat</span>
            </h3>
          
            <div className="flex border-2 items-end justify-around h-40 mt-4">
              

              <div
                className="w-16 bg-[#199919]"
                style={{ height: "70%" }}
              ></div>
              <div
                className="w-16 bg-[#ed520f]"
                style={{ height: "50%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* { pc table} */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-blue-700">
          Export To Csv parliament
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Pc Name</th>
                <th className="border border-gray-300 px-4 py-2">Pc No</th>
                <th className="border border-gray-300 px-4 py-2"> Pc Type</th>
                <th className="border border-gray-300 px-4 py-2">Candidate</th>
                <th className="border border-gray-300 px-4 py-2">Votes</th>
                <th className="border border-gray-300 px-4 py-2">Party</th>
                <th className="border border-gray-300 px-4 py-2">
                  Total Electors
                </th>
                <th className="border border-gray-300 px-4 py-2">Total Vote</th>
                <th className="border border-gray-300 px-4 py-2">Turnout %</th>
                <th className="border border-gray-300 px-4 py-2">Margin</th>
                <th className="border border-gray-300 px-4 py-2">Margin %</th>

                <th className="border border-gray-300 px-4 py-2">
                  Male Electors
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Female Electors
                </th>
                <th className="border border-gray-300 px-4 py-2">poll% %</th>
                <th className="border border-gray-300 px-4 py-2">Valid Vote</th>
                <th className="border border-gray-300 px-4 py-2">Nota</th>
              </tr>
              

            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                Bhopal
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                 19
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                GEN
                </td>
                <td className="border border-gray-300 px-4 py-2">
                Alok Sharma
                </td>
                <td className="border border-gray-300 px-4 py-2">981,109</td>
                <td className="border border-gray-300 px-4 py-2">
                Bharatiya Janta Party
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                2339411
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                1498285
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                0.641
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                501499
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                0.335
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                1169706
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                1169705
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                14,98,285 (64.1%)
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                14,91,664 (63.8%)
                </td>
                <td className="border border-gray-300 px-4 py-2" rowSpan="3">
                6,621 (0.3%)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                Jayshree Harikaran
                </td>
                <td className="border border-gray-300 px-4 py-2">479,610</td>
                <td className="border border-gray-300 px-4 py-2">
                  Indian National Congress
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                Bhanu Pratap Singh
                </td>
                <td className="border border-gray-300 px-4 py-2">13,305</td>
                <td className="border border-gray-300 px-4 py-2">
                  Bahujan Samaj Party
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="p-4 md:p-8">
        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
        <div className="flex flex-wrap gap-4">
          {/* Cards */}
          <div className="w-full md:w-1/3 bg-white shadow-md p-4">
            <h3 className="text-xl font-semibold">Card 1</h3>
            <p>Details about card 1.</p>
          </div>
          <div className="w-full md:w-1/3 bg-white shadow-md p-4">
            <h3 className="text-xl font-semibold">Card 2</h3>
            <p>Details about card 2.</p>
          </div>
          <div className="w-full md:w-1/3 bg-white shadow-md p-4">
            <h3 className="text-xl font-semibold">Card 3</h3>
            <p>Details about card 3.</p>
          </div>
        </div>
      </div>

      {/* Tourism Section */}
      <div class=" page4 flex flex-col items-center py-10 px-4">
        <div class=" page4-div1 flex flex-col items-center text-center mb-8">
          <h2 class="text-xl md:text-2xl font-light text-gray-500">
            Welcome to Madhya Pradesh
          </h2>
          <h1 class="text-2xl md:text-4xl font-bold text-[#0A62A0] mt-2">
            Tourism Place
          </h1>
        </div>

        <div class=" page4-div2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-5xl">
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="relative">
              <img
                src="/sachi bhopal.jpg"
                alt="Bhopal"
                class="w-full h-48 object-cover"
              />
              <span class="absolute top-2 left-2 bg-[#0A62A0] text-white text-sm px-2 py-1 rounded">
                Bhopal
              </span>
            </div>
            <div class="p-4">
              <p class="text-center font-semibold text-gray-700">
                The Great Stupa of Sanchi
              </p>
              <div class="flex justify-center mt-4">
                <a
                  href="/Tourism"
                  class="bg-blue-500 text-white py-1 px-4 rounded-full text-sm font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="relative">
              <img
                src="indore.jpg"
                alt="Khajuraho"
                class="w-full h-48 object-cover"
              />
              <span class="absolute top-2 left-2 bg-[#0A62A0] text-white text-sm px-2 py-1 rounded">
                Khajuraho
              </span>
            </div>
            <div class="p-4">
              <p class="text-center font-semibold text-gray-700">
                The Khajuraho Group of Temples
              </p>
              <div class="flex justify-center mt-4">
                <a
                  href="/Tourism"
                  class="bg-blue-500 text-white py-1 px-4 rounded-full text-sm font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="relative">
              <img
                src="/gwalior.jpg"
                alt="Gwalior"
                class="w-full h-48 object-cover"
              />
              <span class="absolute top-2 left-2 bg-[#0A62A0] text-white text-sm px-2 py-1 rounded">
                Gwalior
              </span>
            </div>
            <div class="p-4">
              <p class="text-center font-semibold text-gray-700">
                Gwalior Fort
              </p>
              <div class="flex justify-center mt-4">
                <a
                  href="/Tourism"
                  class="bg-blue-500 text-white py-1 px-4 rounded-full text-sm font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="relative">
              <img
                src="/omkaleshwar.jpg"
                alt="Omkareshwar"
                class="w-full h-48 object-cover"
              />
              <span class="absolute top-2 left-2 bg-[#0A62A0] text-white text-sm px-2 py-1 rounded">
                Omkareshwar
              </span>
            </div>
            <div class="p-4">
              <p class="text-center font-semibold text-gray-700">
                Omkareshwar Temple
              </p>
              <div class="flex justify-center mt-4">
                <a
                  href="/Tourism"
                  class="bg-blue-500 text-white py-1 px-4 rounded-full text-sm font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="relative">
              <img
                src="/orcha.jpg"
                alt="Datia"
                class="w-full h-48 object-cover"
              />
              <span class="absolute top-2 left-2 bg-[#0A62A0] text-white text-sm px-2 py-1 rounded">
                Datia
              </span>
            </div>
            <div class="p-4">
              <p class="text-center font-semibold text-gray-700">
                Bir Singh Palace, Datia
              </p>
              <div class="flex justify-center mt-4">
                <a
                  href="/Tourism"
                  class="bg-blue-500 text-white py-1 px-4 rounded-full text-sm font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="relative">
              <img
                src="/ujjain.jpg"
                alt="Ujjain"
                class="w-full h-48 object-cover"
              />
              <span class="absolute top-2 left-2 bg-[#0A62A0] text-white text-sm px-2 py-1 rounded">
                Ujjain
              </span>
            </div>
            <div class="p-4">
              <p class="text-center font-semibold text-gray-700">
                Mahakaleshwar Temple, Ujjain
              </p>
              <div class="flex justify-center mt-4">
                <a
                  href="/Tourism"
                  class="bg-blue-500 text-white py-1 px-4 rounded-full text-sm font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick New's Section */}
      <div className="page3 lg:h-[60vw] w-full  flex flex-col items-center py-10 relative">
        <div className="   lg:h-[8vw] lg:bg-[#0A62A0] lg:w-[1vw]  lg:absolute lg:left-[15%] lg:top-[9%]">
          <h1 className=" text-3xl abo  lg:text-3xl font-bold text-[#0A62A0] lg:ml-10 lg:mt-10">
            Quick<span className="lg:text-gray-800"> New's </span>
          </h1>
        </div>

        <div className="lg:h-[36vw] bg-[#0A62A0] lg:w-[7vw] lg:top-[30%]  lg:left-[5%] lg:absolute"></div>
        <div className="grid   lg:w-[66vw] lg:mt-64 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white  px-10 mt-8 py-6 lg:p-5 shadow-lg border-2  flex flex-col "
            >
              <div className="  bg-gray-200 mr-32 h-20 w-20  lg:w-32 lg:h-28 mb-4">
                <p className="ml-28 w-32 md:ml-36 md:w-40 text-sm md:text-base tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto officiis odio magnam.
                </p>
              </div>

              <Link to="/News" className="text-blue-500  font-medium">
                Read more
              </Link>
            </div>
          ))}
        </div>
        <div className="lg:h-28 bg-[#0A62A0] lg:w-[85vw] lg:mt-12 "></div>
        <div className="lg:h-[36vw] bg-[#0A62A0] lg:w-[7vw] lg:top-[30%]  lg:right-[5%] absolute"></div>
      </div>
    </div>
  );
};

export default Seat;
