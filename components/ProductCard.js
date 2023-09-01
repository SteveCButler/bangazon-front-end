// import Link from 'next/link';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
// import { deleteMember } from '../api/memberData';

const MemberCard = ({ obj }) => {
  // const deleteThisMember = () => {
  //   if (window.confirm(`Delete ${obj.name}?`)) {
  //     deleteMember(obj.firebaseKey).then(() => onUpdate());
  //   }
  // };

  console.warn('OBJ: ', obj);

  const styles = {
    card: {
      backgroundColor: '#eee',
      borderRadius: 20,
      padding: '1rem',
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
        <Card.Text className="h5">Price: ${obj.productPrice}</Card.Text>
        <Card.Text className="mb-1"> Description:</Card.Text>
        <Card.Text> {obj.productDescription}</Card.Text>
      </Card.Body>
      {/* <Card.Footer>
        <Link href={`/members/edit/${obj.firebaseKey}`} passHref>
          <Button variant="info" className="btn-sm">
            EDIT
          </Button>
        </Link>
        <Button variant="danger" className="m-2 btn-sm" onClick={deleteThisMember}>
          DELETE
        </Button>
      </Card.Footer> */}
    </Card>
  );
};

export default MemberCard;

MemberCard.propTypes = {
  obj: PropTypes.shape({
    productName: PropTypes.string,
    productDescription: PropTypes.string,
    productPrice: PropTypes.number,
    sellerId: PropTypes.number,
    productTypeId: PropTypes.number,
    productTypeName: PropTypes.string,
  }).isRequired,
  // refreshProducts: PropTypes.func.isRequired,
};
