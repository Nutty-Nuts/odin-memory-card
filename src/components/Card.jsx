import PropTypes from "prop-types";
import "../styles/Card.css";

export default function Card({ name, image, id, click }) {
    return (
        <div id={id} className="card" onClick={click}>
            <img src={image} alt={name} srcSet="" />
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
    click: PropTypes.func,
};
