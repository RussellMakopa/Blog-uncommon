export default function Loading() {
  return (
    <>
      <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="U" className="letters-loading">
                U
              </span>

              <span data-text-preloader="N" className="letters-loading">
                N
              </span>

              <span data-text-preloader="C" className="letters-loading">
                C
              </span>

              <span data-text-preloader="O" className="letters-loading">
                O
              </span>

              <span data-text-preloader="M" className="letters-loading">
                M
              </span>
              <span data-text-preloader="M" className="letters-loading">
                M
              </span>
              <span data-text-preloader="O" className="letters-loading">
                O
              </span>
              <span data-text-preloader="N" className="letters-loading">
                N
              </span>
            </div>
          </div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      </div>
    </>
  );
}
