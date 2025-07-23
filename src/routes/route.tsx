import { Route, Routes } from 'react-router';
import HomePage from '../pages/HomePage';
import TermPage from '../pages/TermPage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/NotFoundPage';
import ListProductPage from '../pages/ListProductPage';
import FormPage from '../pages/FormPage';
import HookPage from '../pages/HookPage';
import EmployeesPage from '../pages/EmployeesPage';

const RoutePage = () => {
  return (
    <>
      <h1>Header</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/term" element={<TermPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/product/:name/:id" element={<ProductPage />} />
        <Route path="/list-product" element={<ListProductPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/hook" element={<HookPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
      </Routes>
    </>
  );
};

export default RoutePage;
