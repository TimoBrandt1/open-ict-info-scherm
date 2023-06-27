import React from 'react';
import { SContainer } from "./styles";
import './style.SlideOverzicht.scss';
import { useState, useEffect } from 'react';
import Modal from "react-modal";
import Swal from 'sweetalert2';
import GroupJSON from '../../json/groups.json';
import SlidesJSON from '../../json/slides.json'

Modal.setAppElement('#root');

function SlideOverzicht() {
  const [slides, setSlides] = useState([]);
  const [slidesOrder, setSlidesOrder] = useState([]);

  useEffect(() => {
    setSlides(SlidesJSON);
    setSlidesOrder(SlidesJSON);
    console.log('Slides after deletion:', slides);

    // Calculate the last ID whenever the groups are updated
    const ids = SlidesJSON.map((slide) => slide.id);
    const maxID = Math.max(...ids);
  }, []);

  useEffect(() => {
    setSlidesOrder(slides);
  }, [slides]);

  function addSort(filter) {
    document.getElementById("sorteren").value = filter;
    sort(filter);
  }

  function sort(filter) {
    let slidesOrder = slides;

    if (filter.includes("A")) {
      slidesOrder.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (filter.includes("D")) {
      slidesOrder.sort(function (a, b) {
        if (a.datum < b.datum) {
          return -1;
        }
        if (a.datum > b.datum) {
          return 1;
        }
        return 0;
      });
    }
    if (filter.includes("-")) {
      slidesOrder = slidesOrder.reverse();
    }

    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    console.log("Searching for " + searchInput);

    let filteredArray = slidesOrder.filter((slide) =>
      slide.name.toLowerCase().includes(searchInput)
    );

    setSlidesOrder(filteredArray);
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Weet je het zeker?',
      text: "Je kunt dit niet ongedaan maken!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ja, verwijder het!',
      cancelButtonText: 'Annuleren'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Slides before deletion:', slides); // Debug log before deletion
        const updatedSlides = slides.filter((slide) => slide.id !== id);
        setSlides(updatedSlides);
        setSlidesOrder(updatedSlides);
        Swal.fire(
          'Verwijderd!',
          'De slide is verwijderd',
          'success'
        );
      }
    });
  };

  //Popup Add slide
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSlideData, setNewSlideData] = useState({
    id: "",
    titel: "",
    datum: "",
    slides: []
  });

  let AddNewSlide = false;
  //Popup Edit Slide
  const [isEditing, setIsEditing] = useState(false);
  const [editSlideData, setEditSlideData] = useState({
    id: "",
    titel: "",
    datum: "",
    slides: ""
  });

  const handleAddSlide = () => {
    AddNewSlide = true;
    setIsEditing(false);
    setIsModalOpen(true);

    // Find the maximum ID in the slide JSON
    const maxID = Math.max(...slides.map((slide) => Number(slide.id)));

    // Generate the new ID by incrementing the maximum ID
    const newID = String(maxID + 1);

    setNewSlideData((prevData) => ({
      ...prevData,
      id: newID
    }));
  };

  const handleEdit = (slide) => {
    AddNewSlide = false;
    setIsEditing(true);
    setEditSlideData(slide);
    setIsModalOpen(true);
    setNewSlideData({
      id: slide.id,
      titel: slide.name,
      datum: slide.datum,
      slides: slide.slides.split(", ")
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === "slides") {
      const slideId = value;
      const updatedSlides = newSlideData.slides.includes(slideId)
        ? newSlideData.slides.filter((id) => id !== slideId)
        : [...newSlideData.slides, slideId];

      setNewSlideData((prevData) => ({
        ...prevData,
        [name]: updatedSlides
      }));
    } else {
      setNewSlideData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }));
    }
  };

  const handleConfirmAddSlide = () => {
    let updatedSlides;
    const selectedSlides = SlidesJSON.filter((slide) =>
      newSlideData.slides.includes(slide.id)
    );

    if (isEditing) {
      const editedSlide = {
        id: editSlideData.id,
        titel: newSlideData.name,
        datum: newSlideData.datum,
        slides: selectedSlides.map((slide) => slide.id).join(", ")
      };

      updatedSlides = slides.map((slide) =>
        slide.id === editedSlide.id ? editedSlide : slide
      );
    } else {
      const newSlide = {
        id: newSlideData.id,
        titel: newSlideData.name,
        datum: getCurrentDate(),
        slides: selectedSlides.map((slide) => slide.id).join(", ")
      };

      updatedSlides = [...slides, newSlide];
    }
    setSlides(updatedSlides);
    setSlidesOrder(updatedSlides);
    setIsEditing(false);
    setIsModalOpen(false);
    console.log('Slides after adding/editing a slide:', updatedSlides);
  };

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  const handleShowSlide = (slide) => {
    const slides = slide.slides.split(", ").map((slideId) => {
      const slide = SlidesJSON.find((slide) => slide.id === slideId);
      return slide ? slide.name : "";
    });

    Swal.fire({
      title: slide.name,
      html: `<p>Datum: ${slide.datum}</p><p>Slides: ${slides.join(", ")}</p>`,
      confirmButtonText: "Close",
    });
  };

  return (
    <div className="slideOverzicht">
      <SContainer>
        <div className='filters'>
          <select className="input" name="sorteren" id="sorteren" onChange={(event) => addSort(event.target.value)}>
            <option value="A+">Alfabetisch (A-Z)</option>
            <option value="A-">Alfabetisch (Z-A)</option>
            <option value="D+">Datum (vroegst eerst)</option>
            <option value="D-">Datum (laatst eerst)</option>
          </select>
          <input className="input" id="searchInput" type="text" placeholder="Search" onChange={(event) => sort(event.target.value)} />
          <button className="optie" onClick={handleAddSlide}>+</button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleModalClose}
            contentLabel="Add Slide Modal"
            className="modal"
            overlayClassName="modal-overlay"
          >
            <h2>{isEditing ? "Editing Slide" : "New Slide"}</h2>
            <form>
              <div className="input-slide">
                <label htmlFor="titel">Title:</label>
                <input
                  type="text"
                  id="titel"
                  name="titel"
                  placeholder="Title"
                  value={newSlideData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-slide">
                <label htmlFor="slides">Slides:</label>
                <div className="table-wrapper">
                  <table className="slides-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Select</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SlidesJSON.map((slide) => (
                        <tr key={slide.id}>
                          <td>{slide.name}</td>
                          <td>
                            <input
                              type="checkbox"
                              name="slides"
                              value={slide.id}
                              checked={newSlideData.slides.includes(slide.id)}
                              onChange={handleInputChange}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="input-slide">
                <label htmlFor="datum">Date:</label>
                <input
                  type="text"
                  id="datum"
                  name="datum"
                  placeholder="Date"
                  value={getCurrentDate()}
                  onChange={handleInputChange}
                  readOnly
                />
              </div>
              <div className="input-slide">
                <label htmlFor="id">ID:</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  placeholder="ID"
                  value={newSlideData.id}
                  onChange={handleInputChange}
                  readOnly
                />
              </div>
              <div className="modal-buttons">
                <button type="button" className="confirm-button" onClick={handleConfirmAddSlide}>Confirm</button>
                <button type="button" className="cancel-button" onClick={handleModalClose}>Cancel</button>
              </div>
            </form>
          </Modal>
        </div>
        <div id='overzicht'>
            {slidesOrder.map((slide) => (
              <div key={slide.id} className="overzicht-wrapper">
                <div className="scherm">
                  <button className="optie" onClick={() => handleEdit(slide)}>E</button>
                  <button className="optie" onClick={() => handleShowSlide(slide)}>I</button>
                  <button className="optie" onClick={() => handleDelete(slide.id)}>D</button>
                </div>
                <br />{slide.name}
                <br />{slide.datum}
              </div>
            ))}
        </div>
      </SContainer>
    </div>
  );
}

export default SlideOverzicht;