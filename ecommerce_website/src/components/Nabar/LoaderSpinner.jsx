const LoaderSpinner = () => {
  return (
    <center>
      <div
        class="spinner-grow"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </center>
  );
};

export default LoaderSpinner;
