import React, { useState } from "react";
import axios from "axios"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button
} from "@mui/material";

const BuySellModal = ({ open, handleClose, action, stock,fetchHoldings }) => {
    let [quantity,setQuantity]=useState(1);
    let handleQuantity=(e)=>{
        setQuantity(Number(e.target.value));
    }
    let handleSubmit=(stock)=>{
          stock.action=action;
          axios.post("http://localhost:3000/api/manipulateStock",{stock,quantity},{withCredentials:true})
          .then((res)=>fetchHoldings());
        
        handleClose();
    }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{action} {stock?.name}</DialogTitle>
      <DialogTitle>{action} {stock?.price}</DialogTitle>

      <DialogContent>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <TextField onChange={handleQuantity} value={quantity} label="Quantity" type="number" fullWidth />
          <Button
            variant="contained"
            color={action === "Buy" ? "primary" : "error"}
            onClick={()=>handleSubmit(stock,action)}
          >
            {action}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BuySellModal;
