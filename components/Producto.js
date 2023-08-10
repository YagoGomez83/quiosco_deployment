import Image from "next/image";
import useQuisco from "../hooks/useQuisco";
import { formatearDinero } from "../helpers";
export default function Producto({ producto }) {
  const { handleSetPorducto, handleChangeModal } = useQuisco();
  const { nombre, precio, imagen } = producto;
  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={`imagen del plato ${nombre}`}
        width={400}
        height={500}
      />
      <div className="p-3">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          type="button"
          className="bg-pink-500 hover:bg-pink-900 text-white w-full mt-5 p-3 rounded-sm uppercase font-bold"
          onClick={() => {
            handleSetPorducto(producto);
            handleChangeModal();
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
