import Image from "next/image"
import Logo from "../../../assets/img/example.jpg"
export default function MainsidebarHeader() {
    return (
        <div className="main-sidebar-header">
            <a href="index.html" className="header-logo">
                {/* <Image
                    src={Logo}
                    alt="logo"
                    className="main-logo desktop-logo"
                    width={100}
                    height={100}
                />
                <Image
                    src={Logo}
                    alt="logo"
                    className="main-logo toggle-logo"
                    width={100}
                    height={100}
                />
                <Image
                    src={Logo}
                    alt="logo"
                    className="main-logo desktop-dark"
                    width={100}
                    height={100}
                />
                <Image
                    src={Logo}
                    alt="logo"
                    className="main-logo toggle-dark"
                    width={100}
                    height={100}
                /> */}
                <h1>Naomi</h1>
            </a>
        </div>
    )
}