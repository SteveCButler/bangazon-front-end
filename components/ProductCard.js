// import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import PropTypes from 'prop-types';

const MemberCard = ({ obj }) => {
  // const deleteThisMember = () => {
  //   if (window.confirm(`Delete ${obj.name}?`)) {
  //     deleteMember(obj.firebaseKey).then(() => onUpdate());
  //   }
  // };

  const styles = {
    card: {
      backgroundColor: '#eee',
      borderRadius: 10,
      padding: '.75rem',
      width: '18rem',
    },
    cardImage: {
      // objectFit: 'scale-down',
      width: '150px',
      height: '180px',
      borderRadius: 20,
    },
  };
  return (
    <Card style={styles.card}>
      {/* <Card.Img className="mx-auto" variant="top" src={obj.image} style={styles.cardImage} /> */}
      <Card.Body className="fw-semibold">
        <Card.Text className="fs-4 text-center">{obj.productName}</Card.Text>
        <Card.Text className="fs-6">Product Type: {obj.productTypeName}</Card.Text>
        <Card.Text className="fs-6">Price: ${obj.productPrice}</Card.Text>
        <Card.Text className="mb-1"> Description:</Card.Text>
        <Card.Text> {obj.productDescription}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link href={`/products/${obj.id}`} passHref>
          <Button variant="info" className="btn-sm">
            Details
          </Button>
        </Link>
        {/* <Button variant="danger" className="m-2 btn-sm" onClick={}>
          DELETE
        </Button> */}
      </Card.Footer>
    </Card>
  );
};

export default MemberCard;

MemberCard.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    productName: PropTypes.string,
    productDescription: PropTypes.string,
    productPrice: PropTypes.number,
    sellerId: PropTypes.number,
    productTypeId: PropTypes.number,
    productTypeName: PropTypes.string,
  }).isRequired,
  // refreshProducts: PropTypes.func.isRequired,
};
