import { Container, Grid, Input, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

const Userform = ({ addUser, updateUser, submitted, data, isEdit }) => {
  const [id, setId] = useState();
  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState(""); 
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [orderNumberError, setOrderNumberError] = useState("");
  const [materialError, setMaterialError] = useState("");
  const [isOrderNumberValid, setIsOrderNumberValid] = useState(false);
  const [isMaterialValid, setIsMaterialValid] = useState(false);

  useEffect(() => {
    if (!submitted) {
      setId();
      setMaterial("");
      setQuantity("");
      setPrice("");
      setDate("");
      setIsOrderNumberValid(false);
      setIsMaterialValid(false);
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id);
      setMaterial(data.material);
      setQuantity(data.quantity);
      setPrice(data.price);
      setDate(data.date);
      setIsOrderNumberValid(true);
      setIsMaterialValid(true);
    }
  }, [data]);

  const handleOrderNumberChange = (value) => {
    if (/^O\d{4}$/.test(value)) {
      setId(value);
      setIsOrderNumberValid(true);
      setOrderNumberError("");
    } else {
      setOrderNumberError(
        "Order number must start with O and contain 4 numbers."
      );
      setIsOrderNumberValid(false);
    }
  };

  const handleMaterialChange = (value) => {
    if (/\d/.test(value)) {
      setMaterial(value);
      setIsMaterialValid(false);
      setMaterialError("Material cannot contain numbers.");
    } else {
      setMaterial(value);
      setIsMaterialValid(true);
      setMaterialError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isEdit
      ? updateUser({
          id,
          material,
          quantity,
          price,
          date,
        })
      : addUser({ id, material, quantity, price, date });

    setId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        Container
        spacing={2}
        sx={{
          backgroundColor: "rgba(192,192,192,0.6)",
          border: "3px solid #000000",
          marginBottom: "50px",
          marginLeft: "280px",
          display: "block",
          width: "900px",
          height: "500px",
          marginTop: "10px",
        }}
      >
        <Grid item xs={12}>
          <Typography
            component={"h1"}
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "200px",
              marginTop: "20px",
              fontSize: "50px",
              width: "500px",
              display: "block",
              fontWeight: "bold",
            }}
          >
            Order Notice Form
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "100px",
              marginTop: "50px",
              fontSize: "20px",
              width: "200px",
              display: "block",
              fontWeight: "900",
            }}
          >
            Order Number
          </Typography>
          <Input
            required
            type="text"
            id="id"
            name="id"
            sx={{
              width: "400px",
              marginTop: "50px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={id}
            error={orderNumberError !== ""}
            onChange={(e) => handleOrderNumberChange(e.target.value)}
            disabled={isOrderNumberValid}
          />
          {orderNumberError && (
            <Typography sx={{ color: "red", marginTop: "5px" }}>
              {orderNumberError}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="material"
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "100px",
              marginTop: "20px",
              fontSize: "20px",
              width: "200px",
              display: "block",
              fontWeight: "900",
            }}
          >
            Order Material
          </Typography>
          <Input
            required
            type="text"
            id="material"
            name="material"
            sx={{
              width: "400px",
              marginTop: "20px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={material}
            error={materialError !== ""}
            onChange={(e) => handleMaterialChange(e.target.value)}
          />
          {materialError && (
            <Typography sx={{ color: "red", marginTop: "5px" }}>
              {materialError}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "100px",
              marginTop: "10px",
              fontSize: "20px",
              width: "200px",
              display: "block",
              fontWeight: "900",
            }}
          >
            Order Quantity
          </Typography>
          <Input
            required
            type="text"
            id="quantity"
            name="quantity"
            sx={{
              width: "400px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "100px",
              marginTop: "10px",
              fontSize: "20px",
              width: "200px",
              display: "block",
              fontWeight: "900",
            }}
          >
            Price(Negotiable)
          </Typography>
          <Input
            required
            type="text"
            id="price"
            name="price"
            sx={{
              width: "400px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
          <Typography
            component={"label"}
            htmlFor="date"
            sx={{
              color: "#000000",
              marginRight: "20px",
              marginLeft: "100px",
              marginTop: "10px",
              fontSize: "20px",
              width: "200px",
              display: "block",
              fontWeight: "900",
            }}
          >
            Publish Date
          </Typography>
          <Input
            required
            type="date"
            id="date"
            name="date"
            sx={{
              width: "400px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            value={date.split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>

        <button type="submit" className="user">
          {isEdit ? "Update" : "Submit"}
        </button>
      </Grid>
    </form>
  );
};
export default Userform;
