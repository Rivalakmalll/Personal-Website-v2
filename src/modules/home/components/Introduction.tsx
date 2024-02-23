const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat '>
      <div className='space-y-3'>
        <div className='flex gap-2 text-2xl lg:text-3xl font-medium font-sora'>
          <h1>Hi, I&apos;m Rival</h1>{' '}
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-700 dark:text-neutral-400'>
            <li>
              Based in Jakarta, Indonesia <span className='ml-1'>🇮🇩</span>
            </li>
          </ul>
        </div>
      </div>

      <p className='leading-[1.8] md:leading-loose mt-6 text-neutral-800 dark:text-neutral-300'>
      Hello, I'm a Full Stack Software Engineer currently pursuing a degree in Computer Science. With 2+ years of solo development experience, I have a strong background in web development and a passion for creating efficient, scalable, and visually appealing web applications. As a full stack developer, I am proficient in both frontend and backend technologies, and I have a deep understanding of JavaScript and its ecosystem. I am comfortable working with a variety of web technologies, frameworks, and tools, and I am always eager to learn and stay up-to-date with the latest trends and best practices. I have a proven track record of delivering high-quality software solutions, and I have a strong commitment to testing, documentation, and code quality. My experience in solo development, combined with my active participation in the programming community, demonstrates my dedication to continuous learning and improvement. I am excited to bring my skills and experience to a dynamic and innovative team, where I can contribute to the development of cutting-edge web applications and make a real impact on users' experiences.
      </p>
    </section>
  );
};

export default Introduction;
