"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {

  return (

    <p>
      Could not fetch notes.
      {error.message}
    </p>

  );

}