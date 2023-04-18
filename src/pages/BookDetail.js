import React from "react";

import "../styles/general.css";

import Header from "../components/Header";

import {  useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { upperFirstLetter } from "../utils/functions";

const BookDetail = () => {
  const { bookId } = useParams();
  const navigate =useNavigate()
  const { booksState, categoriesState } = useSelector((state) => state);
  /* let myBook=null
    for(let i=0;i<booksState.books.length;i++){
        if(booksState.books[i].id === bookId){
            myBook=booksState.books[i]
            break
        }
    } */

  const myBook = booksState.books.find((item) => item.id === bookId);
  const myCategory = categoriesState.categories.find(
    (item) => item.id === myBook.categoryId
  );
  return (
    <div>
      <Header />

      <div className="container my-5  d-flex justify-content-center">
        <div style={{ padding: "30px", width: "80%", boxShadow: "0px 0px 10px 0px gray" }}>
        <h5
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <span
              onClick={() => navigate("/")}
              style={{ position: "absolute", left: 0, cursor: "pointer" }}
              className="badge bg-secondary">
              Geri
            </span>{" "}
            <h1>Kitap Bilgileri</h1>
          </h5>
          <div>
            <p>
              <b>Kitap Adı</b>
            </p>
            <p>{upperFirstLetter(myBook.title)}</p>
          </div>
          <div>
            <p>
              <b>Kitabın Yazarı</b>
            </p>
            <p>{upperFirstLetter(myBook.author)}</p>
          </div>
          <div>
            <p>
              <b>Kitap Yayın evi</b>
            </p>
            <p>
              {myBook.publisher === ""
                ? "belirtilmemiş"
                : upperFirstLetter(myBook.publisher)}
            </p>
          </div>
          <div>
            <p>
              <b> Fiyat</b>
            </p>
            <p>{myBook.price === "" ? "belirtilmemiş" : myBook.price}</p>
          </div>
          <div>
            <p>
              <b>ISBN </b>
            </p>
            <p>{myBook.isbn === "" ? "belirtilmemiş" : myBook.isbn}</p>
          </div>
          <div>
            <p>
              <b>Kategori</b>
            </p>
            <p>{upperFirstLetter(myBook.author)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
