import React from "react";

const ListItems = ({ items }) => {
  return items.map((item, index) => {
    return <Item key={index} item={item} />;
  });
};

const Item = ({ item }) => {
  return (
    <ul>
      <li>{item}</li>
    </ul>
  );
};

export default ListItems;
