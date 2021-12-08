import { PropTypes } from 'prop-types';

const Types = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ }),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Types;
