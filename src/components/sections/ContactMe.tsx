import { socialLinks } from '../../data/socialLinks';

export default function ContactMe() {
  return (
    <section className='py-20 px-6' id='contact'>
      <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12'>
        <div>
          <form
            name='contact'
            method='POST'
            data-netlify='true'
            action='/thank-you'
          >
            <div className='flex flex-col gap-2'>
              <label htmlFor='name' className='text-sm font-medium'>
                Your Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                required
                className='border border-black bg-transparent rounded-md py-3 px-4 placeholder:text-zinc-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'
                placeholder='John Doe'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='email' className='text-sm font-medium mt-2'>
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                required
                className='border border-black bg-transparent rounded-md py-3 px-4 placeholder:text-zinc-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'
                placeholder='john@email.com'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='message' className='text-sm font-medium mt-2'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                required
                rows={4}
                className='border border-black bg-transparent rounded-md py-3 px-4 placeholder:text-zinc-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'
                placeholder='How can I help?'
              />
            </div>

            <div className='flex flex-wrap items-center gap-6 mt-2'>
              <button
                type='submit'
                className='bg-black text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 cursor-pointer'
              >
                Get in touch
              </button>

              <div className='flex gap-4'>
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={link.name}
                    className='group border-2 border-black rounded-md p-3 hover:bg-black hover:scale-110 transition size-11 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2'
                  >
                    <img
                      src={link.icon}
                      alt={link.name}
                      className='size-5 group-hover:invert'
                    />
                  </a>
                ))}
              </div>
            </div>
          </form>
        </div>

        <div className='flex flex-col gap-6 justify-center'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Let's start a project together
          </h2>

          <p className='text-zinc-500 leading-relaxed'>
            I'm always open to new opportunities and collaborations. If you have
            a project in mind or want to discuss an idea, feel free to reach
            out.
          </p>

          <div className='flex flex-col gap-1 text-sm text-zinc-500'>
            <span className='flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='icon icon-tabler icons-tabler-filled icon-tabler-map-pin'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                <path d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6'></path>
              </svg>
              Bogotá, Colombia
            </span>
            <span className='flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                class='icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1' />
              </svg>
              Available for freelance
            </span>
          </div>

          <p className='font-semibold text-lg'>felipeortega383@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
