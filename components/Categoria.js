import Image from "next/image";
import useQuisco from "../hooks/useQuisco";
export default function Categoria({ categoria }) {
  const { id, nombre, icono } = categoria;
  const { handleClickCategoria, categoriaActual } = useQuisco();
  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-400 " : ""
      }flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={70}
        height={70}
        src={`assets/img/icono_${icono}.svg`}
        alt={`imagen ${nombre}`}
        className="mb-3"
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
}
