import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { upperFirstLetter } from "../utils/functions";
import urls from "../api/urls";
import actionTypes from "../redux/action/actionTypes";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import Modal from "../components/Modal";

const AddBook = () => {
  const { categoriesState } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openSuccessModal,setOpenSuccessMoadal]=useState(false)

  const [formState, setFormState] = useState({
    id: String(new Date().getTime()),
    title: "",
    author: "",
    publisher: "",
    price: "",
    isbn: "",
    categoryId: "empty",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // validation
    if (formState.categoryId === "") {
      alert("kategori zorunludur");
      return;
    }
    if (formState.title === "") {
      alert("kitap adı zorunludur");
      return;
    }
    if (formState.publisher === "") {
      alert("yayın evi zorunludur zorunludur");
      return;
    }
    if (formState.price === "") {
      alert("fiyatı zorunludur");
      return;
    }
    if (formState.author === "") {
      alert("yazar adı zorunludur");
      return;
    }
    api
      .post(urls.books, formState)
      .then((res) => {
        dispatch({
          type: actionTypes.bookActions.ADD_BOOKS,
          payload: formState,
        });
        setOpenSuccessMoadal(true)
      })
      .catch((err) => {});
  };

  return (
    <div>
      <Header />
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Kitap Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="portakal şekeri"
              value={formState.title}
              onChange={(event) =>
                setFormState({ ...formState, title: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Kitabın Yazarı
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              placeholder="José Mauro de Vasconcelos"
              value={formState.author}
              onChange={(event) =>
                setFormState({ ...formState, author: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="publisher" className="form-label">
              Yayın Evi
            </label>
            <input
              type="text"
              className="form-control"
              id="publisher"
              placeholder="Can Yayınları"
              value={formState.publisher}
              onChange={(event) =>
                setFormState({ ...formState, publisher: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Fiyat
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="70"
              value={formState.price}
              onChange={(event) =>
                setFormState({ ...formState, price: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="isbn" className="form-label">
              ISBN
            </label>
            <input
              type="text"
              className="form-control"
              id="isbn"
              placeholder="xxxxxxxxxxxxxxx"
              value={formState.isbn}
              onChange={(event) =>
                setFormState({ ...formState, isbn: event.target.value })
              }
            />
          </div>
          <select
            value={formState.categoryId}
            onChange={(event) =>
              setFormState({ ...formState, categoryId: event.target.value })
            }
            className="form-select"
          >
            <option value="empty">Kategori Seç</option>
            {categoriesState.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {upperFirstLetter(category.name)}
              </option>
            ))}
          </select>
          <div className="d-flex justify-content-center my-5">
            <button type="submit" className="btn btn-primary w-25">
              Kaydet
            </button>
          </div>
        </form>
      </div>
      <Modal
        title="Başarılı"
        content="kitabınız başarıyle eklendi"
        cancelButtonText="Anasayfaya Dön"
        cancelButtonType="success"
        visible={openSuccessModal}
        cancelButtonClick={() => navigate("/")}
      />
    </div>
  );
};

export default AddBook;
