import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Detailspage from "./Detailspage";

const SingleCardDetails = () => {
  const allEvents = useLoaderData();
  const { id } = useParams();
  const [detailsInfo, setDetailsInfo] = useState({});
  useEffect(() => {
    if (allEvents?.length) {
      const Details = allEvents.find((event) => event.id === id);
      // console.log(Details);
      setDetailsInfo(Details);
    }
  }, [id, allEvents]);
  return (
    <div>
      <Detailspage detailsInfo={detailsInfo} />
    </div>
  );
};

export default SingleCardDetails;
