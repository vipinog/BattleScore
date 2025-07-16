import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/items/')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <div>
        <div><h2>Item List</h2></div>
      <ul>
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
        ) : (
          <li>No items found.</li>
        )}
      </ul>
    </div>
  );
};

export default ItemList;

