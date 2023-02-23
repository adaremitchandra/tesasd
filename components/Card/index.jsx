import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

const Card = ({ label, title, href }) => {
  return (
    <Link href={href || "/"}>
      <Box
        sx={{
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0px 5px 19px -5px rgba(0,0,0,0.25)",
          WebkitBoxShadow: "0px 5px 19px -5px rgba(0,0,0,0.25)",
          MozBoxShadow: "0px 5px 19px -5px rgba(0,0,0,0.25)",
        }}
      >
        <Typography component="p" fontSize={16} color="teal" fontWeight="700">
          {label}
        </Typography>
        <Typography component="h2" fontWeight="bold" fontSize={18}>
          {title}
        </Typography>
        <Box sx={{ marginY: "10px" }}>
          <ShoppingCartIcon color="primary" fontSize="large" />
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
