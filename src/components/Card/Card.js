import NavBar from "../NavBar/NavBar";
export const Card = ({ children }) =>{
    return (
      <main>
      <NavBar/>
      <div className="Card">
        {children}
      </div>
      </main>
    );
};
