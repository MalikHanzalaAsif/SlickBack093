import Home from "./Home";
import Categories from "./Categories";
import Items from "./Items";
import items from "./utils/items";
import UserReviews from "./userReviews";
import ShopByCategories from "./shopByCategories.jsx";
import About from "./About.jsx";
import HashTags from "./HashTags.jsx"

export default function Content() {
    return(
        <main style={{flex: "1"}}>
            <Home />
            <Categories />
            <Items items={items} />
            <UserReviews />
            <ShopByCategories />
            <About />
            <HashTags />
        </main>
    );
};