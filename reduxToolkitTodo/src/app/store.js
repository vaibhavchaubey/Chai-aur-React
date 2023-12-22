import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: todoReducer,
});


/* Things to learn
1) store
2) reducer
3) useSelector
4) useDispatch */
