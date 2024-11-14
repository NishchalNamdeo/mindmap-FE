import React from "react";

const Tourism = () => {
  return (
    <>
      <div className="main">
        <div className=" lg:h-screen w-full h-auto  relative overflow-hidden">
          <div className="overflowimg text-2xl absolute h-[60vw]  w-full   lg:h-[70vh] lg:w-[55vw]bg-[#00000066] flex items-center justify-center lg:text-6xl text-white">
            Orcha Temple
          </div>
          <img
            className="lg:h-[70vh] lg:w-[55vw] lg:ml-80"
            src="/orcha.jpg"
            alt=""
          />
          <div className="page2  ml-2 mt-3  w-[95vw] lg:h-screen lg:mt-10 lg:w-[9`0vw] lg:ml-10 ">
            <p>
              Omkareshwar Temple (IAST: Ōṃkārēśvar) is a Hindu temple dedicated
              to Shiva, located in Mandhata, nearby Khandwa city in Khandwa
              district of the Indian state of Madhya Pradesh. It is one of the
              12 revered Jyotirlinga shrines of Shiva. It is on an island called
              Mandhata, near Khandwa city in the Narmada River at Khandwa
              district in Madhya Pradesh, India; the shape of the island is said
              to be like the Devanagari ॐ symbol. There are two main temples of
              Shiva here, one to Omkareshwar (whose name means "Lord
              of Omkara or the Lord of the Om sound") located in the island and
              one to Mamleshwar (Amaleshwar) (whose name means "Immortal Lord"
              or "lord of the Immortals or Devas") located on the southern bank
              of the Narmada River on the mainland. Madhya Pradesh has
              two Jyotirlingas, the second one, Mahakaleshwar Jyotirlinga, is
              situated about 140 km north of Omkareshwar Jyotirlinga.
            </p>
          </div>
        </div>
        <div className="h-10 w-24 mt-4 ml-3   bg-[#0A62A0] text-white font-bold  p-2 lg:ml-10 lg:mt-10 ">
          {" "}
          History
        </div>
        <p className="ml-2 mt-3 ">
          The temple is said to have been built by the Paramara Kings of Malwa
          in the 11th century CE. After the Paramara kings, the administration
          of the temple was taken over by the Chauhan rulers. In the 13th
          century CE, the temple suffered destruction and loot by Muslim
          invaders starting with Mahmud Ghazni. Nevertheless, the temple
          remained intact without complete destruction. The temple was under the
          Chauhan Kings during the entire Mughal rule, without much renovation.
          In the 19th century, the temple was rebuilt by the Holkar rulers,
          chiefly Rani Ahalya Bai Holkar. The temple came under the British rule
          during the colonial era. After Independence in 1947,
          the Archaeological Survey of India (ASI) took over the responsibility
          of the temple with the help of the Khandwa administration.
        </p>
      </div>
    </>
  );
};

export default Tourism;
