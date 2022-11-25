import React from "react";
import styled from "styled-components";

interface IListProps {
  message: string;
  photos: IPhoto[];
}

interface IPhoto {
  id: string;
  url: string;
  title: string;
}

function ListOne({ message, photos }: IListProps) {
  return (
    <Wrapper>
      <h1>ListOne</h1>
      <p>{message}</p>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.url} alt={photo.title} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

export default React.memo(ListOne);

const Wrapper = styled.div`
  background-color: tomato;
`;
