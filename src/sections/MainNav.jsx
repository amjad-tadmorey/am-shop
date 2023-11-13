import { Logo, NavLinks } from "@/components"

const MainNav = () => {
    return (
        <div className="d-flex gap-3 py-4">
                <Logo />
                <NavLinks />
        </div>
    )
}

export default MainNav