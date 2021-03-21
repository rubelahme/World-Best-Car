import "./Details.css";
import { useParams } from "react-router";
import fakeData from "../../fakeData/fakeData";
import { useState } from "react";
import SmailDetails from "../smailDetails/SmailDetails";
import Maps from "../Map/Map";

const Details = () => {
  const { menu } = useParams();
  const [like] = useState(fakeData);
  const deploy = like.filter((pd) => pd.id === parseInt(menu));
  const [out, setOut] = useState(true);
  const handleSubmit = () => {
    setOut(false);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="spaces">
            {out ? (
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
                  <input
                    onClick={handleSubmit}
                    className="search"
                    type="submit"
                    value="Search"
                  />
                </form>
              </div>
            ) : (
              <SmailDetails data={deploy}></SmailDetails>
            )}
          </div>
        </div>
        <div className="col-md-8">
          <Maps></Maps>
        </div>
      </div>
    </div>
  );
};

export default Details;
