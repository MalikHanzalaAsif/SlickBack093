import Home from "./Home";
import Categories from "./Categories";
import Items from "./Items";
import items from "./utils/categories.js";
import UserReviews from "./UserReviews.jsx";
import ShopByCategories from "./ShopByCategories.jsx";
import About from "./About.jsx";
import HashTags from "./HashTags.jsx"
import BackToTopButton from './components/BackToTopButton';

export default function Content() {
    return(
        <>
            <Home />
            <Categories />
            <Items items={items} />
            <UserReviews />
            <ShopByCategories />
            <About />
            <HashTags />
            <BackToTopButton />
        </>
    );
};