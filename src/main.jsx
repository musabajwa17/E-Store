import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "../src/store/store.jsx"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './services/queryClient.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <App />
    </Provider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
