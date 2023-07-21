import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen relative isolate overflow-hidden bg-gray-900 py-12 sm:py-32"
    >
      <Image
        src="images/about-me-bg.avif"
        alt=""
        fill={true}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center brightness-50"
      />
      <div className="absolute inset-0 h-full w-full -z-10 bg-gradient-to-t from-black to-transparent"></div>

      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        <path
          fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="10724532-9d81-43d2-bb94-866e98dd6e42"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <path
          fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About Me
          </h2>
          <p className="mt-6 leading-8 text-white text-xl">
            I am someone who is passionate about technology and eager to learn
            new things. I enjoy adapting new technologies to my work and take
            pride in the fact that my skills can help companies find innovative
            solutions and support my team. I am constantly seeking new
            challenges and experiences to further develop my skills and
            contribute to the advancement of technology in our country.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-3xl mb-6">
            Education
          </h2>

          <div className="flex flex-row mx-auto text-lg">
            <ul className="list-disc text-white pl-10 pb-5">
              <li>2013 - 2016</li>
            </ul>
            <ul className="list-none text-white pl-10 pb-5">
              <li>Ramkhamhaeng University</li>
              <li>(B.A.German)</li>
            </ul>
          </div>
          <div className="flex flex-row mx-auto">
            <ul className="list-disc text-white pl-10 pb-5">
              <li>2011 - 2012</li>
            </ul>
            <ul className="list-none text-white pl-10 pb-5">
              <li>Thammasat University</li>
              <li>(Computer Science)</li>
            </ul>
          </div>
        </div>
      </div>
      {/* End education section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-3xl mb-6">
            Skills & Abilities
          </h2>

          <h5 className="text-2xl font-bold tracking-tight text-white sm:text-xl mb-3">
            Mobile Front-end:
          </h5>
          <ul className="list-disc text-white pl-10 pb-5">
            <li>Flutter (Dart)</li>
          </ul>
          <h5 className="text-2xl font-bold tracking-tight text-white sm:text-xl mb-3">
            Web Front-end:
          </h5>
          <ul className="list-disc text-white pl-10 pb-5">
            <li>JavaScript, TypeScript, React, Next.js</li>
            <li>HTML, CSS, TailwindCSS</li>
          </ul>
          <h5 className="text-2xl font-bold tracking-tight text-white sm:text-xl mb-3">
            Back-end:
          </h5>
          <ul className="list-disc text-white pl-10 pb-5">
            <li>Node.js, Express.js</li>
            <li>Sequelize</li>
            <li>Microsoft SQL Server, MySQL</li>
            <li>Docker</li>
          </ul>

          <h5 className="text-2xl font-bold tracking-tight text-white sm:text-xl mb-3">
            Other Computer programming languages and related skills:
          </h5>
          <ul className="list-disc text-white pl-10 pb-5">
            <li>C#, Visual Basic .NET</li>
            <li>MVC, MVVM, Clean Architecture Design Patterns</li>
            <li>Source Control (Git), CI/CD (Github Actions)</li>
            <li>Rest API, JSON, JWT</li>
            <li>Basic knowledge of UX & UI Design, System Analysis & Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
