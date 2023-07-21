import Link from "next/link";

export default function Footer() {
  const tel = "+66 (0) 61-595-2292";
  const email = "charairatswaengsap@gmail.com";
  const address = "Lak Si, Bangkok";
  const github = "https://github.com/operatiumsc";

  return (
    <div className="bg-gray-900 ">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid xl:grid-cols-4 gap-6">
          <div className="xl:col-span-2">
            <h2 className="text-xl font-bold mb-4 text-white">Developed by</h2>
            <ul className="text-gray-400">
              <li className="mb-2 text-md">Charairat Swaengsap (JEAN)</li>
              <li className="mb-2 text-s">Full Stack Developer</li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-xl font-bold mb-4 text-white">Contact Me</h2>
            <ul className="text-gray-400">
              <li className="mb-2">
                <i className="fa-solid fa-phone mr-2"></i>
                <Link href={`tel:${tel}`}>{tel}</Link>
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-envelope mr-2"></i>
                <Link href={`mailto:${email}`}>{email}</Link>
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-location-dot mr-2"></i>
                {address}
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-xl font-bold mb-4 text-white">Follow Me</h2>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="#">
                  <i className="fa-brands fa-twitter mr-2"></i> Twitter
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#">
                  <i className="fab fa-linkedin mr-2"></i> LinkedIn
                </Link>
              </li>
              <li className="mb-2">
                <Link href={github}>
                  <i className="fab fa-github mr-2"></i> GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-gray-400 mt-12">
          <p className="text-sm">
            &copy; 2023 Charairat Swaengsap. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
