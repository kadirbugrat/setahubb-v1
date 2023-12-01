import { useState,useEffect } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [inputProduct, setInputProduct] = useState('');
  const [inputGarden, setInputGarden] = useState('');
  const [cards, setCards] = useState([]);

  const [selectedItem, setSelectedItem] = useState('');
  const [products, setProducts] = useState([]);
  const [gardens, setGardens] = useState([]);

  useEffect(() => {
    setInputProduct('');
    setInputGarden('');
  }, [cards]); 

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleInputChangeProduct = (e) => {
    setInputProduct(e.target.value);
  };

  const handleInputChangeGarden = (e) => {
    setInputGarden(e.target.value);
  };
  const handleAddCard = () => {
    // Yeni bir kart ekleyerek, input değerlerini kartın içine yazma işlemi
    const newCard = {
      inputProduct: inputProduct,
      inputGarden: inputGarden,
    };

    setCards([...cards, newCard]);

    // inputları sıfırladık
    setInputProduct('');
    setInputGarden('');
    };

    const handleProductSelect = () => {
        if (inputProduct) {
          setProducts([...products, inputProduct]);
          setInputProduct('');
        }
      };
    
      const handleGardenSelect = () => {
        if (inputGarden) {
          setGardens([...gardens, inputGarden]);
          setInputGarden('');
        }
      };
  

  const tabs = [
    { label: 'Home'},
    { label: 'Data'},
  ];

  return (
        <div className="tabs-container">
        <div className="tabs">
            {tabs.map((tab, index) => (
            <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={activeTab === index ? 'active' : ''}
            >
                {tab.label}
            </button>
            ))}
        </div>
        <div className="tab-content">
            <h2>{tabs[activeTab].label}</h2>
            {tabs[activeTab].label === 'Home' && (
                <div>
                    <input className='place-holder'
                        type='text'
                        placeholder='Product Type'
                        value={inputProduct}
                        onChange={handleInputChangeProduct}
                    />
                    <input className='place-holder'
                        type='text'
                        placeholder='Garden Type'
                        value={inputGarden}
                        onChange={handleInputChangeGarden}
                    />
                    <button onClick={handleAddCard} className='card-button'>Add Card</button>

                    {/* Eklenen Kartları Listeleme İşlemi*/}
                    <div>
                        {cards.map((card, index)=>(
                            <div key={index} className='card'>
                                <p className='card-title'>Garden : {card.inputGarden}</p>
                                <p className='card-content'>Product : {card.inputProduct}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {tabs[activeTab].label === 'Data' && (
                <div>
                <select
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                    >
                    <option value=''>Select Item</option>
                    {products.map((product, index) => (
                    <option key={index} value={product}>
                        Product: {product}
                        </option>
                        ))}
                        {gardens.map((garden, index) => (
                        <option key={index} value={garden}>
                            Garden: {garden}
                        </option>
                        ))}
                    </select>
                    <br />
                    <input
                        type='text'
                        placeholder='Add Product'
                        value={inputProduct}
                        onChange={handleInputChangeProduct}
                    />
                    <button onClick={handleProductSelect}>Add Product</button>
                    <br />
                    <input
                        type='text'
                        placeholder='Add Garden'
                        value={inputGarden}
                        onChange={handleInputChangeGarden}
                    />
                    <button onClick={handleGardenSelect}>Add Garden</button>
                    </div>
            )}
        </div>
    </div>
  );
};

export default Tabs;
