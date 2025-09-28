import React, { useState } from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";
import useDesserts from "./hooks/useDesserts";
import useWindowWidth from "./hooks/useWindowWidth";

const App = () => {
  const [counts, setCounts] = useState({});
  const desserts = useDesserts();
  const width = useWindowWidth();

  const handleClick = (id) => {
    setCounts((prevCounts) => ({ ...prevCounts, [id]: 1 }));
  };

  const handleIncrement = id => setCounts(prevCounts => ({ ...prevCounts, [id]: (prevCounts[id] || 0) + 1}));

  const handleDecrement = id => {
    setCounts(prevCounts => {
      const current = prevCounts[id] || 0;
      const updated = Math.max(current - 1, 0)
      if (updated === 0) {
        const { [id]: _, ...rest } = prevCounts;
        return rest
      }
      return { ...prevCounts, [id]: updated }
    })
  }

    const onRemove = (id) => setCounts(prevCounts => {
       const { [id]: _, ...rest } = prevCounts;
       return rest
    });


const displayRightImage = (d, width) => {
  const desktop = d.image.desktop ?? d.image.tablet ?? d.image.mobile;
  const tablet  = d.image.tablet  ?? d.image.mobile;
  const mobile  = d.image.mobile;

  if (width > 800) return desktop;
  if (width > 450) return tablet;
  return mobile;
};


  return (
    <div className="min-h-screen bg-Rose-100 p-6 md:p-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Desserts</h1>

      {/* Layout wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Desserts list */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {desserts.map((item) => (
              <Card
                key={item.id}
                img={displayRightImage(item, width)}
                name={item.name}
                category={item.category}
                price={item.price}
                id={item.id}
                count={counts[item.id] || 0}
                onPress={handleClick}
                onAdd={handleIncrement}
                onRemove={handleDecrement}
              />
            ))}
          </div>
        </div>

        {/* Cart */}
        <div className="lg:col-span-4">
          <Cart 
            counts={counts}
            desserts={desserts}
            removeFunction={onRemove}
            onClearCart={() => setCounts({})}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
