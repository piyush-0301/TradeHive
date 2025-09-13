import React, { useState } from 'react'
import axios from "axios";
import {toast} from "react-toastify";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Button
} from "@mui/material";

const BuyModal = ({ stock,modalOpen,handleClose }) => {
    let [quantity,setQuantity]=useState(1);
    let handleSubmit=async(e)=>{
        e.preventDefault();
        stock.quantity=quantity;
        
        axios.post("http://localhost:3000/api/addStock",stock,{withCredentials:true})
        .then((res)=>{
            toast.success("Stock Added Successfully");
            handleClose();
        })
        .catch(err=>{
            toast.error("Error Buying Stock")
        });
    }
    return (
        <Dialog open={modalOpen} onClose={handleClose} >
            <DialogTitle>{stock.name}({stock.symbol})</DialogTitle>
            <DialogTitle>₹{stock.ltp}</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                    <TextField onChange={(e)=>setQuantity(Number(e.target.value))} value={quantity} label="Quantity" type="number" fullWidth />
                    <Button type='submit' variant="contained">
                        Buy
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default BuyModal