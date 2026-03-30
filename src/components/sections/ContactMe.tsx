import { socialLinksReact } from '../../data/socialLinksReact.ts';
import Location from '../../assets/icons/Location.tsx';
import Briefcase from '../../assets/icons/Briefcase.tsx';

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
                className='border border-black bg-transparent rounded-md py-3 px-4 placeholder:text-zinc-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:border-primary-textDark dark:placeholder:text-zinc-400'
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
                className='border border-black bg-transparent rounded-md py-3 px-4 placeholder:text-zinc-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:border-primary-textDark dark:placeholder:text-zinc-400'
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
                className='border border-black bg-transparent rounded-md py-3 px-4 placeholder:text-zinc-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:border-primary-textDark dark:placeholder:text-zinc-400'
                placeholder='How can I help?'
              />
            </div>

            <div className='flex flex-wrap items-center gap-6 mt-2'>
              <button
                type='submit'
                className='bg-black text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 cursor-pointer dark:bg-primary-textDark dark:text-primary-bgDark'
              >
                Get in touch
              </button>

              <div className='flex gap-4'>
                {socialLinksReact.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={link.name}
                      className='group border-2 border-black rounded-md p-3 hover:bg-black hover:scale-110 transition size-11 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:border-primary-textDark dark:hover:bg-primary-textDark dark:hover:text-primary-bgDark'
                    >
                      <Icon className='size-5 group-hover:invert' />
                    </a>
                  );
                })}
              </div>
            </div>
          </form>
        </div>

        <div className='flex flex-col gap-6 justify-center'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Let's start a project together
          </h2>

          <p className='text-zinc-500 leading-relaxed dark:text-zinc-400'>
            I'm always open to new opportunities and collaborations. If you have
            a project in mind or want to discuss an idea, feel free to reach
            out.
          </p>

          <div className='flex flex-col gap-1 text-sm text-zinc-500 dark:text-zinc-400'>
            <span className='flex items-center gap-2'>
              <Location />
              Bogotá, Colombia
            </span>
            <span className='flex items-center gap-2'>
              <Briefcase />
              Available for freelance
            </span>
          </div>

          <p className='font-semibold text-lg'>felipeortega383@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
