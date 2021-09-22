import React, { useContext, useEffect } from "react";
import GlobalContext from "../../../context/GlobalContext";
import { useHistory } from "react-router";

const NewChannelModal = ({ toggleShowModal, isVisible }) => {
  const {
    state: {
      channel: {
        id,
        title,
        description
      }
    },
    actions: {
      updateChannelId,
      updateChannelTitle,
      updateChannelDescription
    }
  } = useContext(GlobalContext);
  const history = useHistory();
  const onChannelTitleChange = (event) => updateChannelTitle(event.target.value);
  const onChannelDescriptionChange = (event) => updateChannelDescription(event.target.value);
  const onCreateClick = () => updateChannelId(Date.now());
  const stopCloseModal = (event) => event.stopPropagation();

  useEffect(() => {
    if (id) history.push(`/new-channel/${id}`);
  }, [id]);

  return (
    <div onClick={toggleShowModal} className={isVisible ? 'newChannel show' : 'newChannel'}>
      <div onClick={stopCloseModal}>
        <h2>New Channel</h2>
        <form>
          <input onChange={onChannelTitleChange} type="text" placeholder='Channel Title..' value={title} required />
          <input onChange={onChannelDescriptionChange} type="text" placeholder='Channel Description' value={description} required />
          <input onClick={onCreateClick} disabled={!title || !description} type="submit" value='Create' />
        </form>
      </div>
    </div>
  )
};

export default NewChannelModal;