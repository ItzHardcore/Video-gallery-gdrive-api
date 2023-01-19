import * as videos from "./videos";

function Content() {
  return (
    <div style={{ marginTop: "5%" }} className="container">
      <div className="row">
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg"
          ></img>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            elementum metus orci, a consectetur purus auctor id. Cras laoreet
            velit vel etium, rutrum libero eu, malesuada dolor. Maecenas dictum
            velit libero, a egestas odio dictum id. Praesent euismod massa ut
            aliquam placerat. Maecenas convallis nibh vitae venenatis iaculis.
            Suspendisse ullamcorper, urna non ornare commodo, tortor elit
            pharetra leo, eu aliquam ligula urna id ex. Sed malesuada dolor mi,
            quis rhoncus dolor porta ac. Quisque tristique vehicula tincidunt.
            Donec placerat quis erat nec vehicula. In ornare egestas ligula vel
            aliquam. Donec sed accumsan est. Etiam et est vitae lorem auctor
            aliquet. Vivamus tristique egestas ultrices. Maecenas libero magna,
            scelerisque consequat erat ut, faucibus faucibus sem. Vestibulum
            imperdiet mollis tincidunt. Donec bibendum nisi vitae purus feugiat
            fermentum. Praesent a turpis vel purus facilisis pulvinar. Proin
            posuere facilisis magna, eget feugiat quam hendrerit nec. Sed mollis
            nisl semper ligula tincidunt sollicitudin. In aliquam ex ut interdum
            sagittis. Cras interdum lorem mauris, feugiat facilisis tellus
            pulvinar et. Donec dignissim tincidunt erat.>
          </p>
        </div>
      </div>

      <div style={{ marginTop: "5%" }} className="row">
        <div className="col-md">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            elementum metus orci, a consectetur purus auctor id. Cras laoreet
            velit vel etium, rutrum libero eu, malesuada dolor. Maecenas dictum
            velit libero, a egestas odio dictum id. Praesent euismod massa ut
            aliquam placerat. Maecenas convallis nibh vitae venenatis iaculis.
            Suspendisse ullamcorper, urna non ornare commodo, tortor elit
            pharetra leo, eu aliquam ligula urna id ex. Sed malesuada dolor mi,
            quis rhoncus dolor porta ac. Quisque tristique vehicula tincidunt.
            Donec placerat quis erat nec vehicula. In ornare egestas ligula vel
            aliquam. Donec sed accumsan est. Etiam et est vitae lorem auctor
            aliquet. Vivamus tristique egestas ultrices. Maecenas libero magna,
            scelerisque consequat erat ut, faucibus faucibus sem. Vestibulum
            imperdiet mollis tincidunt. Donec bibendum nisi vitae purus feugiat
            fermentum. Praesent a turpis vel purus facilisis pulvinar. Proin
            posuere facilisis magna, eget feugiat quam hendrerit nec. Sed mollis
            nisl semper ligula tincidunt sollicitudin. In aliquam ex ut interdum
            sagittis. Cras interdum lorem mauris, feugiat facilisis tellus
            pulvinar et. Donec dignissim tincidunt erat.>
          </p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md">
          <img
            className="img-fluid"
            src="https://blog.emania.com.br/wp-content/uploads/2016/02/direitos-autorais-e-de-imagem.jpg"
          ></img>
        </div>
      </div>

      <hr className="hr hr-blurry" />
      <h2
        id="gallery"
        className="h1-responsive font-weight-bold text-center my-4"
      >
        Video Gallery
      </h2>

      <div className="row ">
        <div
          className="col-md-4"
          style={{ marginBottom: "5%", textAlign: "-webkit-center" }}
        >
          <div className="card" style={{ width: "95%" }}>
            <div className="bg-image " data-mdb-ripple-color="light">
              <iframe
                className="iframe-container"
                src={videos.video1.gdrive_url}
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
            <div className="card-body">
              <h5 className="card-title">{videos.video1.title}</h5>
              <p className="card-text">{videos.video1.date}</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="hr hr-blurry" />
      <h2 id="cv" className="h1-responsive font-weight-bold text-center my-4">
        Curriculum Vitae
      </h2>
      <div className="text-center" style={{ height: "90vh" }}>
        <iframe
          className="my-2"
          src="/CV-BrunoSilva.pdf"
          height="90%"
          width="100%"
        ></iframe>

        <button type="button" className="btn btn-primary btn-lg">
          <a
            className="unstyled"
            href="/CV-BrunoSilva.pdf"
            download="CV_Bruno.pdf"
          >
            <i class="fa fa-download"></i> Download
          </a>
        </button>
      </div>

      <hr className="hr hr-blurry" />

      <section class="mb-4">
        <h2
          id="contacts"
          class="h1-responsive font-weight-bold text-center my-4"
        >
          Contactos
        </h2>

        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div class="row">
          <div class="col-md-4 text-center">
            <i class="fas fa-map-marker-alt mt-4 fa-2x"></i>
            <p>Lisbon, Portugal</p>
          </div>
          <div class="col-md-4 text-center">
            <i class="fas fa-phone mt-4 fa-2x"></i>
            <p>+351 912 123 124</p>
          </div>
          <div class="col-md-4 text-center">
            <i class="fas fa-envelope mt-4 fa-2x"></i>
            <p>Margarida@mimo.pt</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Content;
