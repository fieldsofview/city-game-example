const Header = () => {
  const styles = {
    marginBottom: "50px"
  };
  return (
    <div className="columns">
      <div className="column col-4 col-mx-auto login">
        <h1 className="text-center" style={styles}>
          City game
        </h1>
      </div>
    </div>
  );
};

export default Header;
