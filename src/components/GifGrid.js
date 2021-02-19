import React from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
//cada vez que cambia un valor se vuelve a renderizar todo el componente
//Usando useEffect se evita este comportamiento renderizando solo la primera vez,
//pasandole lista de dependencias vacia []
export const GifGrid = ({ category }) => {
  //   const [images, setImages] = useState([]);
  //   useEffect(() => {
  //     getGifs(category)
  //     .then(setImages)
  //   }, [category]);

  const { data:images, loading } = useFetchGifs( category );

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      {loading && <p className='animate__animated animate__flash'>Loading</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
