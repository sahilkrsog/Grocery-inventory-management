import React, { lazy, useState, useEffect, Suspense } from "react";
import { Table, Card, Button, Divider } from "antd";
import "./App.css";

function App() {
  const ItemDrawer = lazy(() => import("./component/drawer"));
  const [openModel, setOpenModel] = useState(false);
  const [items, setItems] = useState(null);
  useEffect(() => {
    console.log("hello");
    fetchItems();
  }, []);

  const showDrawer = () => {
    setOpenModel(true);
  };

  const onClose = () => {
    setOpenModel(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Supplier Name",
      dataIndex: ["supplier", "name"],
      key: "quantity",
    },
  ];

  const fetchItems = async () => {
    try {
      fetch("http://localhost:3000/item")
        .then((res) => res.json())
        .then(setItems);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  const addItem = async (item) => {
    try {
      await fetch("http://localhost:3000/item", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setOpenModel(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="App">
        <h1>Grocery Inventory Management</h1>
        <Divider />
        <Card
          title="Grocery Items"
          extra={
            <Button type="primary" onClick={showDrawer}>
              Add Item
            </Button>
          }
        >
          <Table dataSource={items} columns={columns}></Table>
        </Card>
        <Suspense fallback={<div>loading...</div>}>
          <ItemDrawer
            isClose={onClose}
            isOpen={openModel}
            submitForm={addItem}
          />
        </Suspense>
      </div>
    </>
  );
}

export default App;
