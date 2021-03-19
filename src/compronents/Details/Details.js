import "./Details.css";
import images from "../../images/Map.png";
import { useParams } from "react-router";
import fakeData from "../../fakeData/fakeData.json";
const Details = () => {
  const { id } = useParams();
  const data = fakeData.find((pd) => pd.id === id);
  return (
    <div>
      <div className="row">
        <div className="col-md-4 text-center">
          <div className="menuForm">
            <form action="">
              <label htmlFor="">Pick From</label>
              <br />
              <input type="text" placeholder="Dhaka" />
              <br />
              <label htmlFor="">Pick To</label>
              <br />
              <input type="text" placeholder="Tangail" />
              <br />
              <br />
              <input type="date" name="" id="" />
              <br />
              <input className="search" type="submit" value="Search" />
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <img className="bigImg" src={images} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Details;
