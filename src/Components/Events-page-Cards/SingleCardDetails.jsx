import { useLoaderData, useParams } from "react-router";
import Detailspage from "./Detailspage";

const SingleCardDetails = () => {
  const allEvents = useLoaderData();
  const { id } = useParams();

  const detailsInfo = (allEvents || []).find((event) => {
    const eventId = event?.id?.toString();
    const event__id = event?._id?.toString();
    const param = id?.toString();
    return eventId === param || event__id === param;
  });

  return (
    <div>
      <Detailspage detailsInfo={detailsInfo} />
    </div>
  );
};

export default SingleCardDetails;
