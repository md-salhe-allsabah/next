import data from "@/data/home_page_data";
import Card from "./components/Card";
import Holder from "./components/Holder";
import Popup from './components/Popup'

const Home = () => {
  return (
    <>
      <Holder>

        {/* <Popup //> */}

        {data.map(obj => 
          <Card key ={obj.id} image = {obj.image} title = {obj.title} block = {obj.block}/>
        )}
      </Holder>

    </>
  );
};

export default Home;
