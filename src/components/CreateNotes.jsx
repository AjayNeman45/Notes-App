import React, { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ShowNotes from './ShowNotes';
import SaveIcon from '@material-ui/icons/Save';
import Tooltip from '@material-ui/core/Tooltip';
import './css/CreatNotes.css';
import './css/ShowNotes.css';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const CreatNotes = ({ setItemArr, itemArr }) =>
{
    const [textArea, setTextArea] = useState(false);
    const [addBtn, showAddBtn] = useState(false);
    const [saveBtn, showSaveBtn] = useState(false);
    const [input_placeholder, setInputPlaceholder] = useState("Take a note...");

    const [input, setInput] = useState({
        title: "",
        note: "",
    });

    const inputandTextAreaEvent = (e) =>
    {
        const { value, name } = e.target;
        setInput(prevData => ({
            ...prevData,
            [name]: value,
        }))
        setTextArea(true);
        showAddBtn(true);
        if (saveBtn) showAddBtn(false);
    }

    const showList = () =>
    {
        setItemArr((oldData) =>
        {
            return [...oldData, input]
        });
        setInput(() =>
        {
            return { title: "", note: "" }
        })
        setTextArea(false);
        showAddBtn(false);
        setInputPlaceholder("Take a note")
    }


    const saveEditedNote = () =>
    {
        setItemArr((oldData) =>
        {
            return oldData.filter((item, index) =>
            {
                var id = parseInt(localStorage.getItem("id"))
                console.log(id);
                if (index === id) {
                    // console.log("matched...");
                    return [item.title = input.title, item.note = input.note];
                }
                else {
                    return { item };
                }
            })
        })

        const mainDiv = document.getElementsByClassName('mainDiv');
        mainDiv[0].style.transform = "scale(1)";
        setInput({ title: "", note: "" });
        setTextArea(false);
        showSaveBtn(false);
        setInputPlaceholder("Take a note...");
    }

    const inputDoubleClicked = () =>
    {
        setInputPlaceholder("Take a note...");
        if (saveBtn) return;
        setTextArea(false);
        showAddBtn(false);
        showSaveBtn(false);
    }

    const inputClicked = () =>
    {
        setInputPlaceholder("Title");
        if (saveBtn) return;
        setTextArea(true);
        showAddBtn(true);
        showSaveBtn(false);
    }

    return (
        <>
            <div className="mainDiv" style={textArea ? { height: "145px" } : { height: "auto" }}>
                <div className="user-input-div">
                    <input
                        autoComplete="off"
                        onClick={inputClicked}
                        onDoubleClick={inputDoubleClicked}
                        onChange={inputandTextAreaEvent}
                        type="text"
                        name="title"
                        placeholder={input_placeholder}
                        value={input.title}
                    />
                    <div className="hidden-textArea">
                        {textArea ? <textarea
                            value={input.note}
                            name="note"
                            onChange={inputandTextAreaEvent}
                            placeholder="Take a note..."
                            type="text"
                        /> : null}
                    </div>
                </div>
                <div className="add-icon-div">
                    {
                        addBtn ? <Tooltip title="Add">
                            <AddCircleIcon
                                className="add-icon"
                                onClick={showList} />
                        </Tooltip> : null

                    }
                    {
                        saveBtn ? <Tooltip title="save">
                            <SaveIcon
                                style={{ fontSize: "40px" }}
                                onClick={saveEditedNote}
                            />
                        </Tooltip> : null
                    }
                </div>
            </div>
            <div className="show-list-div">
                <ShowNotes
                    setItemArr={setItemArr}
                    itemArr={itemArr}
                    setInput={setInput}
                    setTextArea={setTextArea}
                    showAddBtn={showAddBtn}
                    showSaveBtn={showSaveBtn}
                />
            </div>
            {
                !itemArr.length ?
                <div className="bulb-icon-div">
                    <EmojiObjectsIcon className="bulb__icon" size="50px"/>
                    <p>Notes You add appear here</p>
                </div>
                : null
            }
        </>
    );
}

export default CreatNotes;