import { configureStore } from '@reduxjs/toolkit';
import counterreducer from './slices/counterSlice'

export  const store = configureStore({
    reducer: {
        counter : counterreducer
    },
  });

