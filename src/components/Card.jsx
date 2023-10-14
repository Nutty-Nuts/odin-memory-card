export default function Card({ name, image, id, click }) {
    return (
        <div id={id} onClick={click}>
            <img src={image} alt={name} srcSet="" />
        </div>
    );
}
