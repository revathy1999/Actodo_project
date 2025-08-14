import Header from "../Header";
import Card from "../card";
import ToDO from "../ToDO";
import { useLocation } from "react-router-dom";
const Landing = () => {
    const data=useLocation()
  return (
    <>
      <div className="bg-black p-16">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
          <Header name={data.state.user} />
          {/* Card */}
          <div className="flex justify-between mt-5 gap-7 flex-wrap">
            <Card bgColor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
            <Card bgColor={"#FD6663"} title={"July 06"} subtitle={"17:15"} />
            <Card
              bgColor={"#FCA201"}
              title={"Built using"}
              subtitle={"React"}
            />
          </div>
          {/* TODO */}
          <div className="mt-5">
            <ToDO />
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing;
