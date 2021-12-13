import { configureStore } from "@reduxjs/toolkit";
import checkReducer from "../redux/reducer";
import main from "../redux/newreducer";
import commentbox from '../redux/commentreducer'



const Store = configureStore({
    reducer: {
        counter: checkReducer,
        clicker: main,
        commenter: commentbox,
        
    }
});

export default Store;