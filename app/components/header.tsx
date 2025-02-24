import Link from "next/link"

export default function NavBar(){
    return(
        <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Student Association</span>
          <span className="font-bold text-lg">COMEMAT</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Inicio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Quienes somos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Articulos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Cursos
          </Link>
        </nav>
      </header>
    )
}