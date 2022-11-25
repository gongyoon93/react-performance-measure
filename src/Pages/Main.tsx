import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListOne from "../Components/ListOne";
import ListTwo from "../Components/ListTwo";

interface IPhoto {
  id: string;
  url: string;
  title: string;
}

function Main() {
  const [message, setMessage] = useState("");
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then(setPhotos);
  }, [setPhotos]);

  return (
    <Wrapper>
      <InputText
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <ListContainer>
        <ListOne message={message} photos={photos}></ListOne>
        <ListTwo message={message} photos={photos}></ListTwo>
      </ListContainer>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const ListContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
`;

const InputText = styled.input`
  margin: 10px 5px;
  width: 300px;
  height: 45px;
`;
