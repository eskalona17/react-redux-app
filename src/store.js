import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Iker Casillas",
      foto: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 2,
      nombre: "Manolo Lama",
      foto: "https://www.w3schools.com/howto/img_avatar2.png",
    },
    {
      id: 3,
      nombre: "Sergio Ramos",
      foto: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
      id: 4,
      nombre: "Roberto Carlos",
      foto:
        "https://api.ed.team/files/avatars/695b4af3-3cee-4c2f-a165-b329f926b9d3.jpg",
    },
    {
      id: 5,
      nombre: "Michel Salgado",
      foto: "https://www.bootdey.com/img/Content/avatar/avatar7.png",
    },
    {
      id: 6,
      nombre: "Zinedine Zidane",
      foto: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
      id: 7,
      nombre: "Cristiano Ronaldo",
      foto: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 8,
      nombre: "Karim Benzema",
      foto: "https://www.w3schools.com/howto/img_avatar2.png",
    },
    {
      id: 9,
      nombre: "Ronaldo",
      foto: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
      id: 10,
      nombre: "Luka Modric",
      foto: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 11,
      nombre: "Fabio Cannavaro",
      foto: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
      id: 12,
      nombre: "Xabi Alonso",
      foto: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      id: 13,
      nombre: "Fernando Redondo",
      foto: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {

   if(action.type === "AGREGAR_TITULAR"){
       return{
           ...state,
           titulares: state.titulares.concat(action.jugador)
       }
   }
  return state;
};

export default createStore(reducerEntrenador);
