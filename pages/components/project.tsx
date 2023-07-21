import Image from "next/image";
import { projects } from "../../utils/constant";

export default function Project() {
  return (
    <div id="project" className="bg-black py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Some projects I have worked on.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li>
            <div className="flex items-center gap-x-6">
              <Image
                className="h-20 w-20 rounded-lg"
                src="/images/mariond-logo.webp"
                alt=""
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                  Marion D: Online Learning Platform
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Flutter
                </p>
                <div className="flex my-2">
                  <button>
                    <img
                      src="/images/download-ios.png"
                      alt=""
                      className="object-contain h-6 mr-2"
                    />
                  </button>
                  <button>
                    <img
                      src="/images/download-android.png"
                      alt=""
                      className="object-contain h-6"
                    />
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="flex items-center gap-x-6">
              <Image
                className="h-20 w-20 rounded-lg"
                src="/images/stam-logo.webp"
                alt=""
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                  Smart Time Attendance Mobile
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  Flutter
                </p>
                <div className="flex my-2">
                  <button>
                    <img
                      src="/images/download-ios.png"
                      alt=""
                      className="object-contain h-6 mr-2"
                    />
                  </button>
                  <button>
                    <img
                      src="/images/download-android.png"
                      alt=""
                      className="object-contain h-6"
                    />
                  </button>
                </div>
              </div>
            </div>
          </li>

          {projects.map((project) => (
            <li key={project.name}>
              <div className="flex items-center gap-x-6">
                <i className="fa-regular fa-paper-plane bg-white p-3 rounded"></i>
                {/* <Image
                  className="h-16 w-16 rounded-lg"
                  src={project.imageUrl}
                  alt=""
                  width={100}
                  height={100}
                /> */}
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {project.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="flex justify-end max-w-4xl mx-auto my-24">
        <iframe
          className="md:aspect-square border-none"
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9CbYbrOsWu3g4x4zLYbX66%2FUntitled%3Fnode-id%3D1-2%26scaling%3Dscale-down%26page-id%3D0%253A1"
          allowFullScreen={true}
        ></iframe>
      </div> */}
    </div>
  );
}
