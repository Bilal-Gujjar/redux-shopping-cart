import { configureStore } from "@reduxjs/toolkit";
import checkReducer from "../redux/reducer";
import main from "../redux/newreducer";
import commentbox from '../redux/commentreducer'
import boxer from '../redux/cmt'


const Store = configureStore({
    reducer: {
        counter: checkReducer,
        clicker: main,
        commenter: commentbox,
        box: boxer,
        
    }
});

export default Store;