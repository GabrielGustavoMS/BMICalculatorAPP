import "./Loader.css";

export default function Loader(props) {
  return (
    <div>
      {props.isLoading && (
        <section className="loading-overlay">
          <article>
            <div class="loader"></div>

            <p>Loading</p>
          </article>
        </section>
      )}
    </div>
  );
}
