import React,{useState} from 'react'
import { Card , CardTitle, CardBody, CardImg, Button, Modal} from 'reactstrap'
import './bookCard.css';;

export const BookCard = ({
    thumbnail,
title,
pageCount,
language,
description,
authors,
previewLink,
infoLink}) => {
const [modal, setModal] = useState(false);
const toggle=()=>setModal(!modal)

    return (
        <div>
            <Card style={{width:'233px'}} className='m-auto'>
                <CardImg top style={{width:'100%', height:'233px'}} src={thumbnail} alt={title}/>
                <CardBody>
                    <CardTitle className='card-title'>{title}</CardTitle>
                    <Button onClick={toggle}>More Info</Button>
                </CardBody>
                <Modal isOpen={modal} toggle={toggle}>
                    <div className="modal-header d-flex justify-content-center">
                        <h5 className='modal-title text-center' id="modalLabel">{title}</h5>
                        <button aria-label='Close' className='close' type='button' onClick={toggle}>
                        <span aria-hidden={true}>X</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex justify-content-between ml-3">
                            <img src={thumbnail} alt={title} style={{height:"233px"}}/>
                            <div>
                                <p>Page Count:{pageCount}</p>
                                <p>Language:{language}</p>
                                <p>Authors:{authors}</p>
                            </div>
                            <div className='mt-3'>
                                {description}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="left-slide">
                            <a href={previewLink} className='btn-link' color='default' type='button' target='_blank' rel='noopener noreferrer'>Preview Link</a>
                        </div>
                        <div className="divider">
                        <div className="right-slide">
                            <a href={infoLink} className='btn-link' color='default' type='button' target='_blank' rel='noopener noreferrer'>InfoLink</a>
                        </div>
                        </div>
                    </div>
                </Modal>
            </Card>
        </div>
    )
}