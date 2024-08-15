interface LoadingMessageProps {
  heading: string;
  subheading: string;
}
const LoadingMessage = ({ heading, subheading }: LoadingMessageProps) => {
  return (
    <main className="flex flex-1 max-h-screen overflow-scroll flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-lg font-semibold p-4 md:text-2xl">{heading}</h1>
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">{subheading}</h3>
        </div>
      </div>
    </main>
  );
};

export default LoadingMessage;
