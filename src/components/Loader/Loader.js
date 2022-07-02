import "./Loader.css";

export default function Loader(props) {
  return (
    <div>
      {props.isLoading && (
        <section className="loading-overlay">
          <div class="loader"></div>
          <p>Loading</p>
        </section>
      )}
    </div>
  );
}
