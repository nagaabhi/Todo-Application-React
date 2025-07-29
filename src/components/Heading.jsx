function Heading({ mode, showMode }) {
  return (
    <>
      <div
        className={`heading-container ${
          showMode === "dark" ? "darkAppplied" : "lightApplied"
        }`}
      >
        <div className="heading-ele">
          <p
            className={`heading-element ${
              showMode === "dark" ? "darkHeading" : "lightHeading"
            }`}
          >
            Todo Application
          </p>
        </div>

        <div className="dark-mode-button">
          <button onClick={mode}>dark</button>
        </div>
      </div>
    </>
  );
}
export default Heading;
