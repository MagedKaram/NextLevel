"use client";
export default function Error({ error }: { error: Error }) {
  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>Failed to share the meal. Please check your input and try again.</p>
      <p>{error.message}</p>
    </main>
  );
}
