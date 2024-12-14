import React, { useRef, useState } from 'react';
import "../styles/Shop.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Shop = () => {
    const [likedItems, setLikedItems] = useState({});
    const [hoveredItems, setHoveredItems] = useState({}); // Tracks hover state for each item

    const tshirtsRef = useRef(null);
    const trousersRef = useRef(null);
    const hoodiesRef = useRef(null);
    const accessoriesRef = useRef(null);

    const scroll = (ref, direction) => {
        if (ref.current) {
            const { scrollLeft, clientWidth } = ref.current;
            const scrollAmount = clientWidth / 2;
            ref.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const toggleLike = (type, index) => {
        const key = `${type}-${index}`;
        setLikedItems((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleMouseEnter = (type, index) => {
        const key = `${type}-${index}`;
        setHoveredItems((prev) => ({
            ...prev,
            [key]: true,
        }));
    };

    const handleMouseLeave = (type, index) => {
        const key = `${type}-${index}`;
        setHoveredItems((prev) => ({
            ...prev,
            [key]: false,
        }));
    };

    const categories = [
        { id: 'shopTshirts', title: 'TShirts', ref: tshirtsRef, type: 'shirt' },
        { id: 'shopTrousers', title: 'Trousers', ref: trousersRef, type: 'trouser' },
        { id: 'shopHoodies', title: 'Hoodies', ref: hoodiesRef, type: 'hoodie' },
        { id: 'shopAccessories', title: 'Accessories', ref: accessoriesRef, type: 'accessories' },
    ];

    return (
        <section id="shop" className="pt-32">
            <h1 className="shopHeadingMain mt-8 text-5xl font-semibold text-center mb-16">Shop By Categories</h1>

            {categories.map(({ id, title, ref, type }) => (
                <div id={id} className="pb-32" key={id}>
                    <h2 className="shopHeading text-6xl p-3 text-center bg-red-700 text-white w-fit mx-auto mb-8">{title}</h2>
                    <p className="text-center"><i className="text-lg font-semibold font-mono">TOP PICKS</i></p>
                    <div className="relative">
                        <button
                            onClick={() => scroll(ref, 'left')}
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-700 text-white p-2 rounded-md z-10"
                        >
                            ◀
                        </button>
                        <button
                            onClick={() => scroll(ref, 'right')}
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-700 text-white p-2 rounded-md z-10"
                        >
                            ▶
                        </button>

                        <div
                            ref={ref}
                            className="shop-scrollable-container flex overflow-x-scroll gap-4 scroll-smooth hide-scrollbar border-y-2 py-8 border shadow-md"
                        >
                            {Array.from({ length: 15 }, (_, index) => (
                                <Link to={"/order"} key={index}>
                                    <div>
                                        <div
                                            className="shopImageDiv w-36 h-56 m-2 p-4 object-cover rounded-md shadow-lg flex-shrink-0 relative flex flex-col justify-center items-center"
                                        >
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    event.stopPropagation();
                                                    toggleLike(type, index);
                                                }}
                                                className="absolute top-2 right-2 rounded-full p-1"
                                            >
                                                {likedItems[`${type}-${index}`] ? (
                                                    <FavoriteIcon className="text-red-500" />
                                                ) : (
                                                    <FavoriteBorderIcon />
                                                )}
                                            </button>
                                            <img
                                                src={`/items/${type}${index + 1}.png`}
                                                alt={`${title} ${index + 1}`}
                                                className=""
                                                loading="lazy"
                                            />
                                            <div
                                                className="ml-[100%] mt-[3%]"
                                                onMouseEnter={() => handleMouseEnter(type, index)}
                                                onMouseLeave={() => handleMouseLeave(type, index)}
                                            >
                                                {hoveredItems[`${type}-${index}`] ? (
                                                    <ShoppingCartIcon className="text-red-500" />
                                                ) : (
                                                    <ShoppingCartOutlinedIcon className="text-black" />
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <Rating
                                                name="read-only"
                                                value={5}
                                                readOnly
                                                sx={{
                                                    "& .MuiRating-iconFilled": { color: "#b42c03", fontSize: "16px" },
                                                    "& .MuiRating-iconEmpty": { color: "lightgray", fontSize: "16px" },
                                                }}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="flex justify-center items-center mt-6">
                            <button id="saleBtn" className="bg-red-700">
                                See more in {title}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Shop;