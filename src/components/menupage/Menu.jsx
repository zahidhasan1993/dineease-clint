import useTitle from "../../customhooks/useTitle";
import SectionCover from "../shared/SectionCover";
import pizza from "../../assets/menu/pizza.jpg"
import soup from "../../assets/menu/soup.jpg"
import dessert from "../../assets/menu/dessert.jpg"
import salad from "../../assets/menu/salad.jpg"

const Menu = () => {
    useTitle("DineEase | Menu")
    return (
        <div>
            <SectionCover img={pizza} name="pizza"></SectionCover>
        </div>
    );
};

export default Menu;