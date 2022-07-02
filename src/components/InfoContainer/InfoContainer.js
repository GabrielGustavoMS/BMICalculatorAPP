import "./InfoContainer.css";

export default function InfoContainer(props) {
  return (
    <section className="container">
      <h2>Result</h2>
      <article className="infoBox">
        <h5>BMI</h5>
        <input readOnly placeholder="BMI" value={props.BMI} />
      </article>
      <article className="infoBox">
        <h5>Categorie</h5>
        <input readOnly placeholder="Categorie" value={props.categorie} />
      </article>
    </section>
  );
}
