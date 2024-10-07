import Reveal from './Reveal';

export default function ContactForm() {
  function handleContact(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.textarea.value);
  }

  return (
    <div className="px-6 max-w-[1200px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid lg:grid-cols-1 place-items-center">
          <form
            onSubmit={handleContact}
            className="w-full p-5 md:p-12"
            id="form"
          >
            <h2 className="text-5xl font-bold mb-4 text-center text-white">
              Lets contact
            </h2>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 h-60"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
}
