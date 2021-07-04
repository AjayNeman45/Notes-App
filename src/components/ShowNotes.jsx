import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import './css/ShowNotes.css';

var edit = true;

const ShowNotes = ({ setItemArr, itemArr, setInput, setTextArea, showAddBtn, showSaveBtn }) =>
{
    
    const editNote = (e) =>
    {
        const id = e.target.parentElement.getAttribute("id");
        localStorage.setItem("id", id);

        window.scrollTo(0, 0);
        function func()
        {
            const noteCard = document.getElementById(id);
            const title = noteCard.querySelector('.title').textContent;
            const note = noteCard.querySelector('.note').textContent;
            console.log(noteCard);
            setInput(() =>
            {
                return {
                    title: title,
                    note: note
                }
            })
            setTextArea(true);
            showSaveBtn(true);
        }

        setTimeout(func, 500);
    }

    const deleteNote = (e) =>
    {
        const id = e.target.id;
        setItemArr((oldData) =>
        {
            return oldData.filter((item, index) =>
            {
                return id != index
            })
        })
    }

    return (
        <>
            {
                itemArr.map((currEle, index) =>
                {
                    return (
                        <div className="note-card" id={index} key={index}>
                            <CheckCircleIcon className="CheckCircleIcon" />
                            <p className="title"> {currEle.title}</p>
                            <p className="note" > {currEle.note}</p>
                            <Tooltip title="Delete">
                                <DeleteOutlineIcon onClick={deleteNote} id={index} className="DeleteOutlineIcon" />
                            </Tooltip>
                            <Tooltip title="Edit">
                                <EditIcon onClick={editNote} id={index} className="EditIcon " />
                            </Tooltip>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ShowNotes;