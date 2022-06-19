function Layout({ children }) {
  return (
    <>
      <div className="absolute bottom-0 right-0 animate-pulse">
        <picture>
          <source
            media="(min-width:640px)"
            srcSet={"./assets/img/sm-simple.svg"}
          />
          <img src={"./assets/img/sm-simple.svg"} alt="Rombos" />
        </picture>
      </div>
      <div className="absolute top-0 left-0 animate-pulse">
        <picture>
          <source
            media="(min-width:640px)"
            srcSet={"./assets/img/sm-doble.svg"}
          />
          <img src={"./assets/img/sm-doble.svg"} alt="Rombos" />
        </picture>
      </div>
    </>
  );
}

export default Layout;
