import React from "react";

const MealsDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return <div>MealsDetails: {slug} </div>;
};

export default MealsDetails;
