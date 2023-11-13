import { navLinks } from "@/constants"
import Link from "next/link"

const NavLinks = () => {
    return (
        <ul className="d-flex gap-5">
            {
                navLinks.map((link) => (
                    <li
                        key={link.id}
                    >
                        <Link
                            href={link.href}
                        >
                            {link.title}
                        </Link>
                    </li>
                ) )
            }
        </ul>
    )
}

export default NavLinks