// import React, { useEffect, useState } from "react";

// const Resumedata = () => {
//   const [formdatas, setFormdatas] = useState({
//     personal: {},
//     experience: {},
//     education: {},
//     skills: {},
//     projects: {},
//   });

//   useEffect(() => {
//     const resume = JSON.parse(localStorage.getItem("resumeData")) || {};

//     setFormdatas({
//       personal: resume.personal || {},
//       experience: resume.experience || {},
//       education: resume.education || {},
//       skills: resume.skills || {},
//       projects: resume.projects || {},
//     });
//   }, []);

//   console.log(formdatas);

//   return (
//     <div>
//       <h2>Resume Data</h2>
//       <pre>{JSON.stringify(formdatas, null, 2)}</pre>
//     </div>
//   );
// };

// export default Resumedata;

import React, { useEffect, useState } from "react";

const Resumedata = () => {
  //   const [formdatas, setFormdatas] = useState(null);

  useEffect(() => {
    const resume = JSON.parse(localStorage.getItem("resumeData"));

    console.log("RAW DATA:", resume);

    // if (resume) {
    //   setFormdatas(resume);
    // }
    // console.log(formdatas);
    // console.log(resume);
  }, []);

  //   if (!resume) {
  //     return <h2>No resume data found</h2>;
  //   }

  return (
    <div>
      {/* <h2>Resume Data</h2>
      <pre>{JSON.stringify(formdatas, null, 2)}</pre> */}
    </div>
  );
};

export default Resumedata;
