import React, { useState } from "react";
import "./mainHeader.css";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { InputGroup, Input, Button, Spinner } from "reactstrap";
import { BookCard } from "./BookCard";

export const MainHeader = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  //Search
  const handleSubmit = async () => {
    setLoading(true);
    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}
        `
      )
      .then((res) => {
        // console.log(res.data);
        setCards(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(true);
        toast.info("Type something in the search box ",{theme: "dark", transition: Slide,hideProgressBar: true});
      });
  };

  const handleCards = () => {
    const items = cards.map((item, i) => {
      let thumbnail = "";
      if (item.volumeInfo.imageLinks.thumbnail) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }
      return (
        <div className="col-lg-4 mb-3" key={item.id}>
          <BookCard
            thumbnail={thumbnail}
            title={item.volumeInfo.title}
            pageCount={item.volumeInfo.pageCount}
            language={item.volumeInfo.language}
            authors={item.volumeInfo.authors}
            description={item.volumeInfo.description}
            previewLink={item.volumeInfo.previewLink}
            infoLink={item.volumeInfo.infoLink}
          />
        </div>
      );
    });
    if (loading) {
      return (
        <div className="d-flex justify-content-center mt-3">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      );
    } else {
      return (
        <div className="container my-5">
          <div className="row">{items}</div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="main-image d-flex justify-content-center align-items-center flex-column">
        <div className="filter">
          <h1
            className="display-1 text-center text-white mb-3"
            style={{ zIndex: 2 }}
          >
            The Book Corner
          </h1>
          <div className=" mb-3">
            <InputGroup size="lg" className=" mb-3">
              <Input
                placeholder="Search books here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button color="secondary" onClick={handleSubmit}>
                <i className="fas fa-search"></i>
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
      <div className="w-100 h-100">{handleCards()}</div>
    </>
  );
};
