import React from 'react';
import { SContainer } from "./styles";
import './style.GroepOverzicht.scss';
import { useState, useEffect } from 'react';
import Modal from "react-modal";
import Swal from 'sweetalert2';
import GroupJSON from '../../json/groups.json';
import SlidesJSON from '../../json/slides.json'

Modal.setAppElement('#root');

function GroepOverzicht() {
  const [groups, setGroups] = useState([]);
  const [groupsOrder, setGroupsOrder] = useState([]);
  const [lastID, setLastID] = useState(0); // New state to store the last ID

  useEffect(() => {
    setGroups(GroupJSON);
    setGroupsOrder(GroupJSON);
    console.log('Groups after deletion:', groups);

    // Calculate the last ID whenever the groups are updated
    const ids = GroupJSON.map((group) => group.id);
    const maxID = Math.max(...ids);
    setLastID(maxID + 1);
  }, []);

  useEffect(() => {
    setGroupsOrder(groups);
  }, [groups]);

  function addSort(filter) {
    document.getElementById("sorteren").value = filter;
    sort(filter);
  }

  function sort(filter) {
    let groupsOrder = groups;

    if (filter.includes("A")) {
      groupsOrder.sort(function (a, b) {
        if (a.titel < b.titel) {
          return -1;
        }
        if (a.titel > b.titel) {
          return 1;
        }
        return 0;
      });
    }
    if (filter.includes("D")) {
      groupsOrder.sort(function (a, b) {
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
      groupsOrder = groupsOrder.reverse();
    }

    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    console.log("Searching for " + searchInput);

    let filteredArray = groupsOrder.filter((group) =>
      group.titel.toLowerCase().includes(searchInput)
    );

    setGroupsOrder(filteredArray);
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
        console.log('Groups before deletion:', groups); // Debug log before deletion
        const updatedGroups = groups.filter((group) => group.id !== id);
        setGroups(updatedGroups);
        setGroupsOrder(updatedGroups);
        Swal.fire(
          'Verwijderd!',
          'De groep is verwijderd',
          'success'
        );
      }
    });
  };

  //Popup Add Group
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGroupData, setNewGroupData] = useState({
    id: "",
    titel: "",
    datum: "",
    slides: []
  });

  let AddNewGroup = false;
  //Popup Edit Group
  const [isEditing, setIsEditing] = useState(false);
  const [editGroupData, setEditGroupData] = useState({
    id: "",
    titel: "",
    datum: "",
    slides: ""
  });

  const handleAddGroup = () => {
    AddNewGroup = true;
    setIsEditing(false);
    setIsModalOpen(true);

    // Find the maximum ID in the group JSON
    const maxID = Math.max(...GroupJSON.map((group) => Number(group.id)));

    // Generate the new ID by incrementing the maximum ID
    const newID = String(maxID + 1);

    setNewGroupData((prevData) => ({
      ...prevData,
      id: newID
    }));
  };

  const handleEdit = (group) => {
    AddNewGroup = false;
    setIsEditing(true);
    setEditGroupData(group);
    setIsModalOpen(true);
    setNewGroupData({
      id: group.id,
      titel: group.titel,
      datum: group.datum,
      slides: group.slides.split(", ")
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === "slides") {
      const slideId = value;
      const updatedSlides = newGroupData.slides.includes(slideId)
        ? newGroupData.slides.filter((id) => id !== slideId)
        : [...newGroupData.slides, slideId];

      setNewGroupData((prevData) => ({
        ...prevData,
        [name]: updatedSlides
      }));
    } else {
      setNewGroupData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }));
    }
  };

  const handleConfirmAddGroup = () => {
    let updatedGroups;
    const selectedSlides = SlidesJSON.filter((slide) =>
      newGroupData.slides.includes(slide.id)
    );

    if (isEditing) {
      const editedGroup = {
        id: editGroupData.id,
        titel: newGroupData.titel,
        datum: newGroupData.datum,
        slides: selectedSlides.map((slide) => slide.id).join(", ")
      };

      updatedGroups = groups.map((group) =>
        group.id === editedGroup.id ? editedGroup : group
      );
    } else {
      const newGroup = {
        id: newGroupData.id,
        titel: newGroupData.titel,
        datum: getCurrentDate(),
        slides: selectedSlides.map((slide) => slide.id).join(", ")
      };

      updatedGroups = [...groups, newGroup];
    }
    setGroups(updatedGroups);
    setGroupsOrder(updatedGroups);
    setIsEditing(false);
    setIsModalOpen(false);
    console.log('Groups after adding/editing a group:', updatedGroups);
  };

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  }

  const handleShowGroup = (group) => {
    const slides = group.slides.split(", ").map((slideId) => {
      const slide = SlidesJSON.find((slide) => slide.id === slideId);
      return slide ? slide.name : "";
    });

    Swal.fire({
      title: group.titel,
      html: `<p>Datum: ${group.datum}</p><p>Slides: ${slides.join(", ")}</p>`,
      confirmButtonText: "Close",
    });
  };

  return (
    <div className="groepOverzicht">
      <SContainer>
        <div className='filters'>
          <select className="input" name="sorteren" id="sorteren" onChange={(event) => addSort(event.target.value)}>
            <option value="A+">Alfabetisch (A-Z)</option>
            <option value="A-">Alfabetisch (Z-A)</option>
            <option value="D+">Datum (vroegst eerst)</option>
            <option value="D-">Datum (laatst eerst)</option>
          </select>
          <input className="input" id="searchInput" type="text" placeholder="Search" onChange={(event) => sort(event.target.value)} />
          <button className="optie" onClick={handleAddGroup}>+</button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleModalClose}
            contentLabel="Add Group Modal"
            className="modal"
            overlayClassName="modal-overlay"
          >
            <h2>{isEditing ? "Editing Group" : "New Group"}</h2>
            <form>
              <div className="input-group">
                <label htmlFor="titel">Title:</label>
                <input
                  type="text"
                  id="titel"
                  name="titel"
                  placeholder="Title"
                  value={newGroupData.titel}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
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
                              checked={newGroupData.slides.includes(slide.id)}
                              onChange={handleInputChange}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="input-group">
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
              <div className="input-group">
                <label htmlFor="id">ID:</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  placeholder="ID"
                  value={newGroupData.id}
                  onChange={handleInputChange}
                  readOnly
                />
              </div>
              <div className="modal-buttons">
                <button type="button" className="confirm-button" onClick={handleConfirmAddGroup}>Confirm</button>
                <button type="button" className="cancel-button" onClick={handleModalClose}>Cancel</button>
              </div>
            </form>
          </Modal>
        </div>
        <div id='overzicht'>
            {groupsOrder.map((group) => (
              <div key={group.id} className="overzicht-wrapper">
                <div className="scherm">
                  <button className="optie" onClick={() => handleEdit(group)}>E</button>
                  <button className="optie" onClick={() => handleShowGroup(group)}>I</button>
                  <button className="optie" onClick={() => handleDelete(group.id)}>D</button>
                </div>
                <br />{group.titel}
                <br />{group.datum}
              </div>
            ))}
        </div>
      </SContainer>
    </div>
  );
}

export default GroepOverzicht;