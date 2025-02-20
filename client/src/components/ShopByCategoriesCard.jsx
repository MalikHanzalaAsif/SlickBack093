import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";

export default function ShopByCategoriesCard({ src, name }) {
  let redirectUrl = `/shop/${name}`;
  if(name === "Accessories" || name === "Watches"){
    redirectUrl = "/shop";
  }

  return (
    <Link to={redirectUrl}>
      <Card component="li" sx={{ minWidth: 200, }} className="shopByCategoriesCard">
        <CardCover>
          <img
            src={src}
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent>
          <Typography
            level="body-lg"
            textColor="#fff"
            sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
          >
            <span id="shopByCategoriesCardText">{name}</span>
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};