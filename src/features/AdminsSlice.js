import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ADMINS } from "../components/const";
import { useAdminsQuery } from "../../src/features/api/ApiSlice";


const initialAdminsState = {
  admins: [],
};

export const AdminsSlice = createSlice({
  name: "admins",
  initialState: initialAdminsState,
  reducers: {
    deleteAdmin: (state, action) => {
      
      const token = localStorage.getItem("API_token");
     console.log(token)

     let headers = {
        authorization : `Bearer ${token}`
      }

     axios.delete(`https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test/administrators/${action.payload}`, {
       headers: headers
     }).then(res => {
       if(res.status === 200){
        state.admins = state.admins.filter(admin => admin.Id !== action.payload)
        
       }
     })
    
    },
  },
});

export const { deleteAdmin } = AdminsSlice.actions;

export default AdminsSlice.reducer;


