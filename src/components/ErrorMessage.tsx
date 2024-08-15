const ErrorMessage = () => {
  return (
    <div className="flex items-center flex-1 justify-center">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          You have no contacts
        </h3>
        <p className="text-sm text-slate-500">
          You can add contacts by clicking Add Contact button.
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;
