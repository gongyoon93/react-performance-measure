import React from "react";
import styled from "styled-components";

interface IPhoto {
  id: string;
  url: string;
  title: string;
}

const Message = React.memo(({ message }: { message: string }): JSX.Element => {
  return <p>{message}</p>;
});

const ListItem = React.memo(({ photo }: { photo: IPhoto }): JSX.Element => {
  return (
    <li key={photo.id}>
      <img src={photo.url} alt={photo.title} />
    </li>
  );
});

const List = React.memo(({ photos }: { photos: IPhoto[] }): JSX.Element => {
  return (
    <ul>
      {photos &&
        photos.map((photo) => <ListItem key={photo.id} photo={photo} />)}
    </ul>
  );
});

function ListTwo({
  message,
  photos,
}: {
  message: string;
  photos: Array<IPhoto>;
}): JSX.Element {
  return (
    <Wrapper>
      <h1>ListTwo</h1>
      <Message message={message} />
      <List photos={photos} />
    </Wrapper>
  );
}

export default React.memo(ListTwo);

const Wrapper = styled.div`
  background-color: tomato;
`;
