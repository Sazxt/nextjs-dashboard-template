
import Image from "next/image"
import Logo from "../../../assets/img/example.jpg"
export default function Headerleft({ isSidebarOpen, setIsSidebarOpen }) {
    return (
        <div>
            <div className="header-left">
                <div className="">
                    <button
                        type="button"
                        className="sidebar-toggle !w-100 !h-100"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle state ketika diklik
                    >
                        <span className="sr-only">Toggle Navigation</span>
                        <i className="ri-arrow-right-circle-line header-icon" />
                    </button>
                </div>
            </div>
            <div className="responsive-logo">
                <a
                    className="responsive-logo-dark"
                    href="index.html"
                    aria-label="Brand"
                >
                    <Image
                        src={Logo}
                        alt="logo"
                        className="mx-auto"
                        width={100}
                        height={100}
                    />
                </a>
                <a
                    className="responsive-logo-light"
                    href="index.html"
                    aria-label="Brand"
                >
                    <Image
                        src={Logo}
                        alt="logo"
                        className="mx-auto"
                        width={100}
                        height={100}
                    />
                </a>
            </div>
        </div>
    )
}