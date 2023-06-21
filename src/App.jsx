import React, { useState } from "react";
import Product from "./components/Product";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

//tambah depan
//tambah belakang
//ubahnama id
//tambah harga dari id
//kurang harga dari id
//hapus depan
//hapus belakang
//hapus dari id
//hapus semua

const App = () => {
  const [id, setId] = useState("");
  const [idd, setIdd] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tshirt Smith",
      price: 100000,
    },
    {
      id: 2,
      name: "Jacket Eiger",
      price: 450000,
    },
    {
      id: 3,
      name: "Sarung BHS",
      price: 870000,
    },
  ]);

  //tambah depan
  const handleFront = () => {
    setProducts([...products, { id: id, name: name, price: price }]);
  };

  //tambah belakang
  const handleBack = () => {
    setProducts([{ id: id, name: name, price: price }, ...products]);
  };

  //edit
  const handleEdit = () => {
    setProducts(
      products.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            name: name,
          };
        } else {
          return value;
        }
      })
    );
  };

  //tambah harga
  const handleEditPlus = () => {
    setProducts(
      products.map((value) => {
        if (value.id == idd) {
          return {
            ...value,
            price: value.price + 50000,
          };
        } else {
          return value;
        }
      })
    );
  };

  //kurang harga
  const handleEditMin = () => {
    setProducts(
      products.map((value) => {
        if (value.id == idd) {
          return {
            ...value,
            price: value.price - 50000,
          };
        } else {
          return value;
        }
      })
    );
  };

  //hapus id
  const deleteId = () => {
    setProducts(products.filter((value) => value.id != parseInt(idd)));
  };

  // hapus depan
  const deleteFront = () => {
    setProducts(products.slice(1));
  };

  // hapus belakang
  const deleteBack = () => {
    setProducts(products.slice(0, -1));
  };

  //hapus semua
  const deleteAll = () => {
    setProducts([]);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <div>
          {products.map((value, index) => {
            return (
              <Product
                key={index}
                name={value.name}
                id={value.id}
                price={value.price}
              />
            );
          })}
        </div>

        <div
          style={{
            color: "black",
            backgroundColor: "pink",
            width: "200px",
            height: "300px",
            gap: "20px",
            padding: "15px",
            textAlign: "center",
            border: "10px solid white",
            borderRadius: "20px",
          }}
        >
          <h3>Tambah</h3>
          <label htmlFor="">ID</label>
          <input
            type="text"
            value={id}
            onChange={(x) => setId(x.target.value)}
          />
          <label htmlFor="">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(x) => setName(x.target.value)}
          />
          <label htmlFor="">Harga</label>
          <input
            type="text"
            value={price}
            onChange={(x) => setPrice(parseInt(x.target.value))}
          />

          <div>
            <button onClick={handleFront}>
              <BiPlus />
              Depan
            </button>
            <button onClick={handleBack}>
              <BiPlus />
              Belakang
            </button>
          </div>
        </div>

        <div
          style={{
            color: "black",
            backgroundColor: "pink",
            width: "200px",
            height: "300px",
            gap: "20px",
            padding: "15px",
            textAlign: "center",
            border: "10px solid white",
            borderRadius: "20px",
          }}
        >
          <h3>Edit/Hapus Berdasarkan ID</h3>
          <label htmlFor="">ID</label>
          <input
            type="text"
            value={idd}
            onChange={(e) => setIdd(e.target.value)}
          />
          <label htmlFor="">Nama</label>
          <input
            type="text"
            value={products.find((x) => x.id == idd)?.name ?? "Tidak Ditemukan"}
            onChange={(e) =>
              setProducts(
                products.map((p) =>
                  p.id == idd ? { ...p, name: e.target.value } : p
                )
              )
            }
          />

          <div>
            <h2>Harga :</h2>
            <button onClick={handleEditMin}>
              <BiMinus />
              Kurang Harga
            </button>
            <button onClick={handleEditPlus}>
              <BiPlus />
              Tambah Harga
            </button>
            <button onClick={deleteId}>
              <AiOutlineDelete />
              Hapus
            </button>
          </div>
        </div>

        <div
          style={{
            color: "black",
            backgroundColor: "pink",
            width: "200px",
            height: "300px",
            gap: "20px",
            padding: "15px",
            textAlign: "center",
            border: "10px solid white",
            borderRadius: "20px",
          }}
        >
          <h3>Hapus</h3>
          <button onClick={deleteFront}>
            <AiOutlineDelete />
            Depan
          </button>
          <button onClick={deleteBack}>
            <AiOutlineDelete />
            Belakang
          </button>
          <button onClick={deleteAll}>
            <AiOutlineDelete />
            Semua
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
