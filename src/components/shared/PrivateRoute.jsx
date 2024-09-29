
import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom"; // Correct hook for navigation
import Loading from "./Loading";
import { toast } from "react-toastify";
import toastValue from "./toastValue";

const PrivateRoute = ({ element }) => {
  const { loading, user } = useAuth();
  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    if (!loading && !user) {
      toast.warning("Please Login First!!", toastValue);
      navigate(-1); // Navigate back to the previous route
    }
  }, [loading, user, navigate]);

  // If loading, show loading spinner
  if (loading) return <Loading />;

  // If user is not authenticated, don't render the component (since navigate has already occurred)
  if (!user) return null;

  // If authenticated, render the protected element
  return element;
};

export default PrivateRoute;
