import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";
import "../App.css";

const PageHeader = ({ title }) => {
    return (
        <>
            <div>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <h1>{title}</h1>
        </>
    );
};

export default PageHeader;
