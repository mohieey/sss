const Hero = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row justify-content-center">
        <div className="col-2">
          <img
            className="img-fluid"
            src="https://cdn-icons-png.flaticon.com/512/317/317031.png"
            alt=""
          />
        </div>
      </div>
      <h1 className="display-1 text-center fw-bold text-danger">I am Ai App</h1>
      <p className="lead text-center">
        I help you with things Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quae suscipit velit iusto eaque unde reprehenderit ut
        magnam ea consequatur sequi impedit perspiciatis, iure veniam recusandae
        nihil distinctio illum quis voluptas.
      </p>
    </div>
  );
};

export default Hero;
