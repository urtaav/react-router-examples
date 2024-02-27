import React, { useState } from 'react'
import './Ecommerce.css'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import products from "./db/data";
import Products from './Products/Products';
import Card from "./Components/Card";
import Recommended from './Recommended/Recommended';


const ECommerce = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    // input filter 
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = products.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    // ----------- Radio Filtering -----------
    const handleChange = (event) => {
        console.log(event.target.value)
        setSelectedCategory(event.target.value);
    };
    // ------------ Button Filtering -----------
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;
        //Filtered Input items
        if (query) {
            filteredProducts = filteredItems;
        }
        // Applying selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                    category === selected ||
                    color === selected ||
                    company === selected ||
                    newPrice === selected ||
                    title === selected
            );
        }

        return filteredProducts.map(
            ({ img, title, star, reviews, prevPrice, newPrice }) => (
                <Card
                    key={Math.random()}
                    img={img}
                    title={title}
                    star={star}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                />
            )
        );
    }
    const result = filteredData(products, selectedCategory, query);
    return (
        <>

            <div className="container mt-5">
                <div className="row">
                <Navbar  query={query} handleInputChange={handleInputChange} ></Navbar>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <Sidebar handleChange={handleChange}></Sidebar>
                    </div>
                    <div className="col-12 col-md-9">
                        <Recommended handleClick={handleClick} />
                        <Products result={result} />
                    </div>
                </div>
            </div>




        </>
    )
}

export default ECommerce
