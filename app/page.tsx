import { Button } from './components/button'
import Link from "next/link"
import Article from './components/articles'
export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Bienvenido a COMEMAT
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Promoviendo las matemáticas en México.
                </p>
              </div>
              <Button className="bg-primary text-primary-foreground">Join Us</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">Articulos recientes</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Article article={{title:"Convergencia 1/n",date:"Feb 23 2025",topic:"Analisis real"}}/>
              <Article article={{title:"Conjuntos densos",date:"Ene 10 2025",topic:"Topologia"}}/>
              <Article article={{title:"Ejemplos de algebras no conmutativas",date:"Feb 23 2024",topic:"Algebra abstracta"}}/>
            </div>
            <h2 className="text-2xl font-bold mb-4">Cursos destacados</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Article article={{title:"Tecnicas de integracion",date:"Ene 10 2025",topic:"Calculo"}}/>
              <Article article={{title:"Regla de la cadena",date:"Feb 23 2024",topic:"Calculo"}}/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}