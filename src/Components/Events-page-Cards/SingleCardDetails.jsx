import { useLoaderData, useParams } from "react-router";
import Detailspage from "./Detailspage";

const SingleCardDetails = () => {
  const allEvents = useLoaderData();
  const { id, _id } = useParams();
      const detailsInfo = allEvents.find((event) => event.id === id || event.id == _id);
      // console.log(Details);
  return (
    <div>
      <Detailspage detailsInfo={detailsInfo} />
    </div>
  );
};

export default SingleCardDetails;
