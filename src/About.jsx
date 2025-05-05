import React from "react";

function About() {
  return (
    <div className="max-w-screen-2xl  mx-auto md:px-0 px-4 flex flex-col md:flex-row pt-6 md:pt-0">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 font-georgian  bg-white md:pt-32">
        <h1 className="md:text-6xl text-3xl opacity-100 font-bold pt-12 md:pt-0">
          About Me.
        </h1>

        <div div className="text-black md:pt-16 pt-4 md:text-xl  ">
          <p className="my-2">
            👨‍💻 Hi, I’m Amit Makhloga, a passionate web developer based in
            Vadodara. I specialize in crafting dynamic and user-friendly
            websites with expertise in HTML, CSS, JavaScript, and React.
          </p>

          <p className="my-2">
            💻 Skills & Interests: In addition to my front-end skills, I’ve also
            explored the full-stack realm, developing solutions that bridge the
            gap between intuitive user experiences and robust backend systems.
            I’m driven by a strong interest in solving real-world challenges
            through innovative web technologies.
          </p>

          <p className="my-2">
            🏆 Achievement: I’ve successfully developed and contributed to
            multiple projects, showcasing my ability to tackle challenges like
            authentication, routing, and responsive design while delivering
            impactful solutions.
          </p>

          <p className="my-2">
            🚀 Career Aspiration: I’m excited to grow as a Front-End Developer
            or Full-Stack Developer, bringing creativity and functionality
            together to build applications that make a difference.
          </p>
        </div>

        <div className="md:p-16 pt-6 text-black  flex flex-col md:flex-row   ">
          <div className="w-full md:w-30% mx-auto">
            <h3 className=" md:text-3xl text-xl ">
              {" "}
              <span className="text-red-500 font-bold text-xl "> |</span>{" "}
              Education
            </h3>

            <div className="md:pt-8 pt-3">
              <div className="  ">
                <div className="py-2 text-sm md:text-lg">
                  <th className="text-left">
                    B.Tech in Computer Science & Engineering{" "}
                  </th>
                  <li>Parul University</li>
                </div>
                <div className="py-2 text-sm md:text-lg">
                  <th>Class XII</th>
                  <li>Kendriya Vidyalaya ONGC Ankleshwar</li>
                </div>

                <div className="py-2 text-sm md:text-lg">
                  <th>Class X</th>
                  <li>Kendriya Vidyalaya ONGC Ankleshwar</li>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-30% pt-6 md:pt-0 mx-auto">
            <h3 className=" md:text-3xl text-xl ">
              {" "}
              <span className="text-red-500 font-bold text-xl "> |</span>{" "}
              Experience
            </h3>
            <div className="md:pt-8 pt-3">
              <div className="  ">
                <div className="py-2 text-sm md:text-lg">
                  <th>Freelance Web Developer</th>
                  <li>National Industrial Solutions</li>
                </div>
                <div className="py-2 text-sm md:text-lg">
                  <th>Frontend Web Developer Intern</th>
                  <li>Ecrox Technology Corp</li>
                </div>

                <div className="py-2 text-sm md:text-lg">
                  <th>Full Stack Web Developer Intern</th>
                  <li>Eduversity</li>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 pt-6 md:pt-0 mx-auto">
            <h3 className=" md:text-3xl text-xl ">
              {" "}
              <span className="text-red-500 font-bold text-xl "> |</span> Skills
            </h3>
            <div className="md:pt-8 pt-3">
              <div className="  ">
                <div className="py-2 text-sm md:text-lg">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>Wordpress</li>
                  <li>Tailwindcss</li>
                  <li>Javascript</li>
                  <li>React.js</li>
                  <li>Mongodb</li>
                  <li>Express.js</li>
                  <li>Node.js</li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 md:px-16  md:mt-0 container px-4 pb-6">
          {/* <div className="mx-auto">
          <button className="border-black border-2 my-1  md:p-3 w-full  text-black tracking-widest hover:bg-black hover:text-white">
              Get My Resume
            </button>

          </div> */}
          <div className="flex items-center justify-center ">
            <button className="border-black border-2 my-1 md:p-5 p-3 w-full md:w-auto text-black tracking-widest hover:bg-black hover:text-white">
            <a href="https://drive.google.com/file/d/1SExuaPXTvBlaFv7V5idmrnKxqAXhKfoS/view?usp=sharing"   download="Amit_Makhloga_Resume.pdf" >GET MY RESUME</a>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
