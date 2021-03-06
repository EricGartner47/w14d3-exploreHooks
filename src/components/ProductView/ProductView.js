import {useEffect, useState} from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

    // TODO: Replace with state variable
    const [sideOpen, setSideOpen] = useState(false);
    const [product, setProduct] = useState()
    const [selected, setSelection] = useState(false)

    useEffect(() => {
        console.log(`selected CHANGED TO`, selected)
        if(selected)
        setSideOpen(true)
    }, [selected])

    useEffect(() => {
        // setSelection(false);
        console.log(`sideOpen CHANGE TO`, sideOpen)
        if(!sideOpen)
        setProduct();
    }, [sideOpen])
    // console.log('hello')
    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item =>
                        <ProductListItem
                            key={item.id}
                            product={item}
                            // onClick={()=> setSelection(!selected)}
                            onClick={() => {
                                setProduct(item);
                                setSelection(!selected);
                                // if(item.id ===)
                            }}
                            isSelected={product && product.id === item.id}
                        />
                    )}
                </div>
            </div>
            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                        onClick={() => {
                            setSideOpen((prevSideOpen) => !prevSideOpen)
                            setSelection(!selected)
                        }}>
                        {sideOpen ? '>' : '<'}
                    </div>
                </div>
                <ProductDetails visible={sideOpen} product={product} />
            </div>
        </div>
    );
}

export default ProductView;
