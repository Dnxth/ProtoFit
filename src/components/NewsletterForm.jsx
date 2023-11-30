export const NewsletterForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className="flex w-3/4 flex-wrap justify-between gap-1 pt-4 [&>input]:z-40 [&>input]:rounded-md [&>input]:border-2 [&>input]:border-text [&>input]:bg-transparent [&>input]:p-1 [&>input]:placeholder:text-sm [&>input]:placeholder:text-text ">
      <input type="text" placeholder="First Name" className="w-[49%]" />
      <input type="text" placeholder="Last Name" className="w-[49%]" />

      <div className="flex w-full justify-between rounded-md border-2 border-text p-1">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-transparent placeholder:text-sm placeholder:text-text"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-md bg-details px-2 py-1 text-primary"
        >
          Send
        </button>
      </div>
    </form>
  );
};