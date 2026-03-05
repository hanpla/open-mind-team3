import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const myFeedId = localStorage.getItem("myFeedId");

  if (myFeedId) {
    return <Navigate to={`/post/${myFeedId}/answer`} />;
  }

  return <Outlet />;
};
