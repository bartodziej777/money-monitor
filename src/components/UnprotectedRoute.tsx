import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";

export default function UnprotectedRoute({ children }: PropsWithChildren) {
  const { uid } = useSelector((state: RootState) => state.user);

  return <>{!uid ? children : <Navigate to="/" />}</>;
}
