import Image from "next/image";
import useQuisco from "../hooks/useQuisco";
import Categoria from "./categoria";
export default function Sidebar() {
  const { categorias } = useQuisco();

  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="imagen logotipo"
      />

      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
}
