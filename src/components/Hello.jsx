import PropTypes from "prop-types";

export const Hello = ({ name, age }) => {
  return (
    <h2>
      Hello {name} ({age})
    </h2>
  );
};

Hello.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
