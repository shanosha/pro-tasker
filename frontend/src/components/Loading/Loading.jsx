import React from "react";
import { useLoading } from "../../context/LoadingContext";
import "./Loading.css";

function Loading() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="loading-overlay" aria-live="polite" aria-label="Loading">
      <div className="loading-spinner" />
      <p>Loading, please wait...</p>
    </div>
  );
}

export default Loading;
