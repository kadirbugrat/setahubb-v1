import { useState, useEffect } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [product, setNewProduct] = useState('');
  const [productType, setNewProductType] = useState('');
  const [garden, setNewGarden] = useState('');

  const [cards, setCards] = useState([]);
  const [products, setProducts] = useState(['Domates', 'Biber', 'Patlıcan']);
  const [gardens, setGardens] = useState(['Tarla', 'Bahçe', 'Sera']);
  const [productTypes, setProductTypes] = useState(['sari', 'yesil', 'mavi', 'kirmizi']);

  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedProductType, setSelectedProductType] = useState('');
  const [selectedGarden, setSelectedGarden] = useState('');

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    setNewProduct('');
    setNewProductType('');
    setNewGarden('');
  }, [cards]);

  const handleAddCard = () => {
    const newCard = {
      product: selectedProduct,
      garden: selectedGarden,
      productType: selectedProductType,
    };

    setCards([...cards, newCard]);
    setNewProduct('');
    setNewProductType('');
    setNewGarden('');
  };

  const handleAddOption = () => {
    if (product.trim() !== '') {
      setProducts([...products, product]);
      setNewProduct('');
    }

    if (productType.trim() !== '') {
      setProductTypes([...productTypes, productType]);
      setNewProductType('');
    }

    if (garden.trim() !== '') {
      setGardens([...gardens, garden]);
      setNewGarden('');
    }
  };

  return (
    <div className='tabs-container'>
      <div className='tabs'>
        <button
          onClick={() => handleTabChange(0)}
          className={activeTab === 0 ? 'active' : 'pasive'}
        >
          Admin Panel
        </button>
        <button
          onClick={() => handleTabChange(1)}
          className={activeTab === 1 ? 'active' : 'pasive'}
        >
          User Panel
        </button>
      </div>

      <div>
      <h1 className='header'>SETAHUBB</h1>
        {activeTab === 0 && (
        <nav className='admin-panel'>
          <div>
            <form>
              <input
                className='inputData'
                type='text'
                placeholder='Add Product'
                value={product}
                onChange={(e) => setNewProduct(e.target.value)}
              />
              <input
                className='inputData'
                type='text'
                placeholder='Add Product Type'
                value={productType}
                onChange={(e) => setNewProductType(e.target.value)}
              />
              <input
                className='inputData'
                type='text'
                placeholder='Garden'
                value={garden}
                onChange={(e) => setNewGarden(e.target.value)}
              />
              <button type='button' onClick={handleAddOption} className='card-button'>
                Add
              </button>
            </form>
          </div>
        </nav>
        )}
        {activeTab === 1 && (
        <nav className='user-panel'>
          <div>
          <form>
            <div>
              <div>
                <select
                  className='drop-down'
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  value={selectedProduct}
                >
                  <option value='' disabled>Select Product</option>
                  {products.map((product, index) => (
                    <option key={index} value={product}>
                      {product}
                    </option>
                  ))}
                </select>

                <select
                  className='drop-down'
                  onChange={(e) => setSelectedProductType(e.target.value)}
                  value={selectedProductType}
                >
                  <option value='' disabled>Select Product Type</option>
                  {productTypes.map((productType, index) => (
                    <option key={index} value={productType}>
                      {productType}
                    </option>
                  ))}
                </select>

                <select
                  className='drop-down'
                  onChange={(e) => setSelectedGarden(e.target.value)}
                  value={selectedGarden}
                >
                  <option value='' disabled>Select Garden</option>
                  {gardens.map((garden, index) => (
                    <option key={index} value={garden}>
                      {garden}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type='button' onClick={handleAddCard} className='card-button'>
              Add Card
            </button>
            </form>
          </div>
          
          <div>
              {cards.map((card, index) => (
                <div key={index} className='card'>
                  <p className='card-title'>Garden: {card.garden}</p>
                  <p className='card-content'>Product: {card.product}</p>
                  <p className='card-content'>Type: {card.productType}</p>
                </div>
              ))}
            </div>
        </nav>
        )}
      </div>
    </div>
  );
};

export default Tabs;
