import { useParams } from 'react-router';

const ProductPage = () => {
  const param = useParams<{ id: string }>();

  return (
    <>
      <h1>Product Page</h1>
      <div>product {param.id}</div>
    </>
  );
};

export default ProductPage;
