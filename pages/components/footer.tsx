import Link from "next/link"

export default function Footer() {
    return (
        <div className="bg-gray-900">
            <footer className="mx-auto max-w-7xl">
                <div className="grid gap-x-8 px-6 lg:px-8 xl:grid-cols-4">
                    <div className="my-8 sm:mb-0">
                        <h2 className="text-xl font-bold mb-4 text-white">
                            About Me
                        </h2>
                        <ul className="text-gray-400">
                            <li className="mb-2"> Charairat Swaengsap (JEAN)</li>
                            <li className="mb-2 text-xs">Full Stack Mobile App Developer</li>
                            <li className="mb-2 text-xs"></li>
                        </ul>
                    </div>
                    <div className="my-8 sm:mb-0">
                        {/* <h2 className="text-xl font-bold mb-4 text-white">Quick Links</h2>
                        <ul className="text-gray-400">
                            <li className="mb-2"><Link href="/">Home</Link></li>
                            <li className="mb-2"><Link href="#">Terms</Link></li>
                            <li className="mb-2"><Link href="#">Privacy</Link></li>
                            <li className="mb-2"><Link href="#">Contact</Link></li>
                        </ul> */}
                    </div>
                    <div className="my-8 sm:mb-0">
                        <h2 className="text-xl font-bold mb-4 text-white">Contact Me</h2>
                        <ul className="text-gray-400">
                            <li className="mb-2"><Link href="tel:+66615952292">+66 (0) 61-595-2292</Link></li>
                            <li className="mb-2"><Link href="mailto:contact@jean.dev">charairatswaengsap@gmail.com</Link></li>
                            <li className="mb-2">11/1 Moo 1, Wang Khanai Sub-district, Tha Muang District, Kanchanaburi 71110</li>
                        </ul>
                    </div>
                    <div className="my-8 sm:mb-0">
                        <h2 className="text-xl font-bold mb-4 text-white">Follow Me</h2>
                        <ul className="text-gray-400">
                            <li className="mb-2"><Link href="#"><i className="fa-brands fa-twitter mr-2"></i> Twitter</Link></li>
                            <li className="mb-2"><Link href="#"><i className="fab fa-linkedin mr-2"></i> LinkedIn</Link></li>
                            <li className="mb-2"><Link href="https://github.com/operatiumsc"><i className="fab fa-github mr-2"></i> GitHub</Link></li>
                        </ul>
                    </div>


                </div>

                <div className="mx-auto px-6 py-6 text-gray-400 text-center sm:text-left">
                    <p>&copy; 2023 Charairat Swaengsap. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}