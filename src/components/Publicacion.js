import React, { useState, useEffect } from "react";

const Publicaciones = () => {
  // hooks State y  Effect
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  //METODO ELIMINAR VERBO DELETE
  const deleteData = async (idDelete) => {
    try {
      //* para mostrar el id dinamico y mostrarlo por Console
      console.log(idDelete);
      const urlDelete = `https://jsonplaceholder.typicode.com/posts/${idDelete}`;
      const data = await fetch(urlDelete, {
        method: "DELETE",
      });
      const res = await data.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //METODO PARA ACTUALIZAR VERBO PUT
  const updateData = async (idUpdate) => {
    try {
      //* para mostrar el id dinamico y mostrarlo por Console
      console.log(idUpdate);
      const urlUpdate = `https://jsonplaceholder.typicode.com/posts/${idUpdate}`;
      const data = await fetch(urlUpdate, {
        method: "PUT",
        body: JSON.stringify({
          id: idUpdate,
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const res = await data.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  //METODO PARA LLAMAR LA DATA (INFORMACION SOLICITADA)
  const getData = async () => {
    try {
      const data = await fetch(url);
      const res = await data.json();
      setPosts(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {posts.map((publicacion) => (
        <>
          <div key={publicacion.id} className="m-4">
            <h2>{publicacion.title}</h2>
            <p>{publicacion.body}</p>
            <button
              className="btn btn-primary"
              onClick={() => updateData(publicacion.id)}
            >
              Actualizar
            </button>
            <button
              className="btn btn-danger m-2"
              onClick={() => deleteData(publicacion.id)}
            >
              Eliminar
            </button>
            <hr />
          </div>
        </>
      ))}
    </>
  );
};

export default Publicaciones;
