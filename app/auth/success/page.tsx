export default function SuccessPage({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  return (
    <div>
      <h1>Login Success ✅</h1>
      <p>Token: {searchParams.token}</p>
    </div>
  );
}
