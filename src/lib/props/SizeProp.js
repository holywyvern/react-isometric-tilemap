import PropTypes from "prop-types";

const SizeProp = PropTypes.shape({
  tile: PropTypes.number.isRequired,
  slab: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
});

export default SizeProp;
