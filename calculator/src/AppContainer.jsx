const AppContainer = ({ children }) => {
  return (
    <div className="col-md-4 offset-md-4">
      <div className="card card-body">
        <div className="row">{children}</div>
      </div>
    </div>
  );
};

export default AppContainer;
