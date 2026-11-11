
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

import "./App.css";

// Food items
const foodItems = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef burger with fresh vegetables and sauce.",
    price: 4500,
    image: "https://i.pinimg.com/736x/b5/0d/22/b50d22aed638664f17fe53e43680d7c8.jpg"
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Delicious pizza topped with cheese and pepperoni.",
    price: 8500,
    image: "https://i.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg"
  },
  {
    id: 3,
    name: "Fried Chicken",
    description: "Crispy golden chicken served fresh and hot.",
    price: 5000,
    image: "https://i.pinimg.com/736x/11/1d/98/111d988c0ef1115d4706c3d8ed1d2351.jpg"
  },
  {
    id: 4,
    name: "Jollof Rice",
    description: "Traditional Nigerian jollof rice with delicious spices.",
    price: 3500,
    image: "https://i.pinimg.com/1200x/a7/4b/cb/a74bcb0ac99a32475e945016731d8d39.jpg"
  },
  {
    id: 5,
    name: "French Fries",
    description: "Freshly prepared crispy golden potato fries.",
    price: 2000,
    image: "https://i.pinimg.com/736x/4d/f4/d7/4df4d799ca7848613538c6c3e872f0f9.jpg"
  },
  {
    id: 6,
    name: "Pancakes",
    description: "Soft pancakes served with sweet toppings.",
    price: 3000,
    image: "https://i.pinimg.com/1200x/36/cc/47/36cc47ac94c174bf7841adbf5178aaad.jpg"
  }
];

function App() {
  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Add food to cart
  function addToCart(food) {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.id === food.id
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousItems, { ...food, quantity: 1 }];
    });

    alert(`${food.name} added to cart!`);
  }

  // Remove food from cart
  function removeFromCart(id) {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== id)
    );
  }

  // Change food quantity
  function changeQuantity(id, amount) {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Calculate number of items in cart
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <BrowserRouter>
      <div className="app">

        <Header
          title="Foodie Express"
          cartCount={cartCount}
        />

        <Routes>

          <Route
            path="/"
            element={
              <Home
                foods={foodItems}
                onAddToCart={addToCart}
              />
            }
          />

          <Route
            path="/about"
            element={
              <About
                title="Foodie Express"
                description="Foodie Express is a food ordering and delivery business dedicated to providing customers with delicious meals, quality ingredients and convenient delivery services."
              />
            }
          />

          <Route
            path="/menu"
            element={
              <Menu
                foods={foodItems}
                onAddToCart={addToCart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onRemove={removeFromCart}
                onQuantityChange={changeQuantity}
              />
            }
          />

          <Route
            path="/contact"
            element={
              <Contact
                email="foodieexpress@example.com"
                phone="+234 800 000 0000"
              />
            }
          />

        </Routes>

        <Footer
          title="Foodie Express"
          email="foodieexpress@example.com"
          phone="+234 800 000 0000"
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
