const URL = "https://crue-json-server-4vl3.vercel.app/perfil";


const listaClientes = () =>
  fetch(URL).then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
};

const detalleCliente = (id) => {
  return fetch(`${URL}/${id}`).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarCliente = (nombre, email, id) => {
  return fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
