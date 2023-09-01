import PropTypes from 'prop-types';

function ProductCategoryList({ product }) {
  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        <li>{product.productType}</li>
        <li>[{product.productCount}]</li>
      </ul>
    </>
  );
}

export default ProductCategoryList;

ProductCategoryList.propTypes = {
  product: PropTypes.shape({
    productType: PropTypes.string,
    productCount: PropTypes.number,
  }).isRequired,
};
