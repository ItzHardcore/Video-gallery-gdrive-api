import "../FloatingApp.css";

function FloatingApp() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      ></link>
      <div class="s-soft hidden-mobile">
        <a
          href="https://www.tiktok.com/@margaridamimo"
          target="_blank"
          rel="noreferrer"
          class="s-item tiktok"
        >
          <span class="fa fa-tiktok"></span>
        </a>
        <a
          href="https://www.linkedin.com/in/margarida-mimo-b49650233/"
          class="s-item linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <span class="fa fa-linkedin"></span>
        </a>
        <a
          href="https://www.instagram.com/margaridag.mimo/?ig_mid=2FFDE7EB-8B10-45E8-9F73-906322B089B6&utm_source=igweb&fall_back_to_web=false"
          target="_blank"
          rel="noreferrer"
          class="s-item instagram"
        >
          <span class="fa fa-instagram"></span>
        </a>
      </div>
    </div>
  );
}
export default FloatingApp;
