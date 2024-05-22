import Link from "next/link";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  const telephoneNumber = "+66 (0) 61-595-2292";
  const emailAddress = "charairatswaengsap@gmail.com";
  const location = "Bangkok, Thailand";
  const linkedIn = "https://www.linkedin.com/in/charairats";
  const github = "https://github.com/operatiumsc";

  return (
    <div className="bg-gray-900">
      <div className="px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          <section className="developed-by mb-8">
            <h2 className="mb-[8px] text-xl 
              text-white">Developed by</h2>
            <ul className="text-gray-400">
              <li className="mb-2 text-md">Charairat Swaengsap (JEAN)</li>
              <li className="mb-2 text-s">Full Stack Developer</li>
            </ul>
          </section>

          <section className="contact-me mb-8">
            <h2 className="mb-[8px] text-xl 
             text-white">
              Contact Me
            </h2>
            <ul className="text-gray-400">
              <li className="flex items-center mb-2">
                <FaPhone className="mr-[8px]" />
                <Link href={`tel:${telephoneNumber}`}>{telephoneNumber}</Link>
              </li>
              <li className="flex items-center mb-2">
                <FaEnvelope className="mr-[8px]" />
                <Link href={`mailto:${emailAddress}`}>{emailAddress}</Link>
              </li>
              <li className="flex items-center mb-2">
                <FaLocationDot className="mr-[8px]" />
                {location}
              </li>
            </ul>
          </section>

          <section className="follow-me mb-8">
            <h2 className="mb-[8px] text-xl text-white">Follow Me</h2>
            <ul className="text-gray-400">
              <li className="mb-2 ">
                <span className="inline-flex items-center">
                  <SiLinkedin className="mr-[8px]" />
                  <Link href={linkedIn}>
                    LinkedIn
                  </Link>
                </span>
              </li>
              <li className="mb-2">
                <span className="inline-flex items-center">
                  <SiGithub className="mr-[8px]" />
                  <Link href={github}>
                    GitHub
                  </Link>
                </span>
              </li>
            </ul>
          </section>
        </div>

        <section className="copyright">
          <div className="text-gray-400">
            <p className="text-sm">
              &copy; 2023-2024 Charairat Swaengsap. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
