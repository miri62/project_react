import axios from "axios";
import { number } from "yup";
import DeleteCard from "../components/DeleteCard";
import Card from "../interfaces/Card";

const api: string = process.env.REACT_APP_API  || "";

export function createCard(newCard: Card) {

  return axios.post(`${api}/cards`,newCard,{
     headers: {
      Authorization: JSON.parse(sessionStorage.getItem("userId") as string)
        .token
    },
  });
}

export function getAllCards() {
  return axios.get(`${api}/cards`, {
    headers: {
      Authorization: JSON.parse(sessionStorage.getItem("userId") as string)
        .token,
    },
  });
}
export function getmyCards() {
   return axios.get(`${api}/cards`, {
     headers: {
       Authorization: JSON.parse(sessionStorage.getItem("userId") as string)
         .token,
     },
   });
}
export function deleteCard(id: string) {
  return axios.delete(`${api}/${id}`);
}
export function updatecard(id: string, updatecard: Card) {
  return axios.put(`${api}/${id}`, updatecard);
}

export function getCardById(id: string) {
  return axios.get(`${api}/${id}`);
}
