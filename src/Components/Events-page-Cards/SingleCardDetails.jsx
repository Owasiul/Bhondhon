import { useLoaderData, useParams } from "react-router";
import Detailspage from "./Detailspage";

const SingleCardDetails = () => {
  const allEvents = useLoaderData();
  const { id } = useParams();
      const detailsInfo = allEvents.find((event) => event.id === id);
      // console.log(Details);
  return (
    <div>
      <Detailspage detailsInfo={detailsInfo} />
    </div>
  );
};

export default SingleCardDetails;
