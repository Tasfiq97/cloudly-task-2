import { Provider } from 'react-redux';
import './App.css';
import Home from './page/Home';
import { store } from './feature/store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductDetailsPage from './page/ProductDetailsPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/product-details/:id',
      element: <ProductDetailsPage />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </Provider>
  );
}

export default App;
