function Error({ statusCode }) {
  return (
    <div className="flex h-[100dvh] justify-center">
      <Image
        src={background}
        alt="background"
        className="object-cover object-center"
      />
      <h1 className="absolute top-1/2 -translate-y-1/2 self-center">
        {statusCode}
      </h1>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
