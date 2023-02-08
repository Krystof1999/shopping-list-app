import TopSection from "./components/topSection";
import Content from "./components/content";
import { useState } from "react";
import Footer from "./components/footer";
import RadioButton from "./components/radio-buttons";
import { useEffect } from "react";

function App() {
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     body: "Milk",
  //     checked: false,
  //   },
  //   {
  //     id: 2,
  //     body: "Cucumber",
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     body: "Chocolate",
  //     checked: false,
  //   },
  // ]);

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppingItem")) || []
  );

  useEffect(() => {
    localStorage.setItem("shoppingItem", JSON.stringify(items));
  }, [items]);

  const [newItem, setNewItem] = useState("");

  const addItem = (body) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const structureOfNewItem = { id, body, checked: false };
    const itemsArr = [...items, structureOfNewItem];
    setItems(itemsArr);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (!newItem) return;

    addItem(newItem);
    setNewItem("");
  };

  const handleCHeck = (e) => {
    const checkArr = items.map((item) => {
      if (item.id === e) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setItems(checkArr);
  };

  const handleDeleteAll = () => {
    let itemsArr = [...items];
    itemsArr = [];
    setItems(itemsArr);
  };

  const handleDeleteSelected = (e) => {
    console.log(e);
  };

  return (
    <div className="App">
      <div className="app-body">
        <TopSection
          handleClick={handleClick}
          setNewItem={setNewItem}
          newItem={newItem}
        />
        <Content items={items} handleCHeck={handleCHeck} />
        <Footer
          handleDeleteAll={handleDeleteAll}
          handleDeleteSelected={handleDeleteSelected}
        />
        <RadioButton />
      </div>
    </div>
  );
}

export default App;
