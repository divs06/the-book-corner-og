import React, { useState } from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import "./bookCard.css";

export const BookCard = ({
  thumbnail,
  title,
  pageCount,
  language,
  description,
  authors,
  previewLink,
  infoLink,
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Card style={{ width: "233px", overflowX: "hidden" }} className="m-auto">
        <CardImg
          top
          style={{ width: "100%", height: "233px" }}
          src={thumbnail}
          alt={title}
        />
        <CardBody>
          <CardTitle className="card-title">{title}</CardTitle>
          <Button onClick={toggle} className="btn">
            More Info
          </Button>
        </CardBody>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader className=" d-flex justify-content-center text-center">
            <div className=" d-flex justify-content-center ">
              <h5 id="modalLabel">{title}</h5>
              <button
                aria-label="Close"
                className="btn close"
                type="button"
                onClick={toggle}
              >
                <span aria-hidden={true}>X</span>
              </button>
            </div>
          </ModalHeader>
          <ModalBody style={{ overflowX: "hidden" }}>
            <div className="d-flex justify-content-between ml-3">
              <img src={thumbnail} alt={title} style={{ height: "233px" }} />
              <div>
                <p>Page Count:{pageCount}</p> &nbsp;
                <p>Language:{language}</p>&nbsp;
                <p>Authors:{authors}</p>
              </div>
            </div>
            <div className="mt-3">{description}</div>
          </ModalBody>
          <ModalFooter>
            <div className="left-slide">
              <a
                href={previewLink}
                className="btn"
                type="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview Link
              </a>
            </div>

            <div className="right-slide">
              <a
                href={infoLink}
                className="btn"
                type="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                InfoLink
              </a>
            </div>
          </ModalFooter>
        </Modal>
      </Card>
    </div>
  );
};
