import styled from "styled-components";

export const LI = styled.li`
  list-style-type: none;
  margin-right: 10px;
  &:hover {
    transform: scale(1.2);
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transition: 0.4s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const UL = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
`;

export const CollectionTile = styled.div``;

export const CollectionTileTitle = styled.div``;

export const Text = styled.h2`
  padding: 10px;
  padding-bottom: 0;
`;
