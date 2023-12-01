import { useState, useEffect } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [inputProduct, setInputProduct] = useState('');
  const [inputGarden, setInputGarden] = useState('');
  const [cards, setCards] = useState([]);
  const [products, setProducts] = useState(['Domates', 'Biber', 'Patlıcan']);
  const [gardens, setGardens] = useState(['Tarla', 'Bahçe', 'Sera']);

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
    // Seçilen ürün ve bahçe isimlerini kartlara ekleme
    const newCard = {
      inputProduct: inputProduct,
      inputGarden: inputGarden,
    };

    setCards([...cards, newCard]);

    // inputları sıfırladık
    setInputProduct('');
    setInputGarden('');
  };

  const tabs = [
    { label: 'Home'},
    { label: 'Data'},
  ];

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
            <div>
              {cards.map((card, index) => (
                <div key={index} className='card'>
                  <p className='card-title'>Garden : {card.inputGarden}</p>
                  <p className='card-content'>Product : {card.inputProduct}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tabs[activeTab].label === 'Data' && (
          <div className='list-container'>
            <div className='list'>
              <h3>Product</h3>
              <select
                className='drop-down'
                value={inputProduct}
                onChange={handleInputChangeProduct}
              >
                <option value='' disabled>Select Product</option>
                {products.map((product, index) => (
                  <option key={index} value={product}>{product}</option>
                ))}
              </select>
              <h3>Garden</h3>
              <select
                className='drop-down'
                value={inputGarden}
                onChange={handleInputChangeGarden}
              >
                <option value="" disabled>Select Garden</option>
                {gardens.map((garden, index) => (
                  <option key={index} value={garden}>{garden}</option>
                ))}
              </select>
              <button onClick={handleAddCard} className='card-button'>
                Add Card
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
