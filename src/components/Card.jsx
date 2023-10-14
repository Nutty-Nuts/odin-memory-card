export default function Card({ name, image, id, click }) {
    return (
        <div onClick={click} id={id}>
            <img src={image} alt={name} srcSet="" />
        </div>
    );
}
