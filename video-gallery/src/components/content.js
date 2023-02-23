import FileList from "./FileList";

function Content() {
  return (
    <div style={{ marginTop: "5%" }} className="container">
      <div className="row pt-4 pb-4">
        <div className="col-md text-center">
          <img
            style={{ width: "70%" }}
            className="img-fluid"
            src="/Foto_2_Margarida_Mimo.png"
            alt="Margarida Mimo"
          ></img>
        </div>

        <div
          className="col-md align-self-center"
          style={{ textAlignLast: "center" }}
        >
          <h2 style={{ marginTop: "50px" }}>Olá, sou a Margarida Mimo!</h2>
        </div>
      </div>
      <div className="row  pt-4 pb-5">
        <div className="col-md align-self-center">
          <h6
            style={{
              marginBottom: "30px",
              textAlign: "justify",
              lineHeight: "40px",
            }}
          >
            Tenho 24 anos e desde que me lembro sou apaixonada por comunicar.
            <br />
            Creio que os meus pontos forte são a espontaneidade e a simpatia. Os
            dois em simultâneo fazem com que não tenha grande dificuldade na
            abordagem com as pessoas e com que a interação seja natural.
            <br /> Há quem lhe chame “muita lata”, eu prefiro chamar carisma.
            <br /> Tirei o curso de Apresentadores de Televisão e Rádio na Etic,
            e estou em busca do sonho, tenho muita vontade de aprender e
            explorar ambas as áreas.
            <br /> A confiança que sinto com um microfone na mão, o entusiasmo
            na minha voz e a alegria que me preenche fazem-me acreditar que este
            é o meu lugar.
          </h6>
        </div>

        <div className="col-md text-center">
          <img
            style={{ width: "60%" }}
            className="img-fluid"
            src="/Foto_1_Margarida_Mimo.png"
            alt="Margarida Mimo"
          ></img>
        </div>
      </div>
      <hr className="hr hr-blurry" />
      <h2
        id="gallery"
        className="h1-responsive font-weight-bold text-center my-4"
      >
        Galeria de Vídeos
      </h2>
      <FileList></FileList>

      <hr className="hr hr-blurry" />
      <h2 id="cv" className="h1-responsive font-weight-bold text-center my-4">
        Curriculum Vitae
      </h2>
      <div className="section text-center pb-5">
        <iframe
          title="Curriculum Vitae"
          style={{ height: "80vh" }}
          className="my-2"
          src="/Curriculo_Margarida_Mimo.pdf"
          width="100%"
        ></iframe>
      </div>
      <div className="pb-5 text-center">
        <a
          className="btn-primary btn-lg "
          href="/Curriculo_Margarida_Mimo.pdf"
          download="CV_MargaridaMimo.pdf"
        >
          <i class="fa fa-download"></i> DESCARREGAR
        </a>
      </div>

      <hr className="hr hr-blurry" />
      <section class="mb-4">
        <h2
          id="contacts"
          class="h1-responsive font-weight-bold text-center my-4"
        >
          Contactos
        </h2>

        <div class="row">
          <div class="col-md-4 text-center">
            <i class="fas fa-map-marker-alt mt-4 fa-2x"></i>
            <p>Lisboa, Portugal</p>
          </div>
          <div class="col-md-4 text-center">
            <i class="fas fa-phone mt-4 fa-2x"></i>
            <p>+351 934 531 900</p>
          </div>
          <div class="col-md-4 text-center">
            <i class="fas fa-envelope mt-4 fa-2x"></i>
            <p>margaridagmimo@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Content;
