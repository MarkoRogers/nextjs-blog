import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {

  return (
    <div className="relative min-h-screen bg-offwhite-100 flex flex-col items-center justify-between">
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="absolute inset-0 overflow-hidden">
        {/* Bubble 1 - Purple */}
        <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-purple-400 opacity-40 blur-3xl rounded-full"></div>
        
        {/* Bubble 2 - Pink */}
        <div className="absolute top-[-10%] right-[-20%] w-[50rem] h-[50rem] bg-pink-500 opacity-40 blur-3xl rounded-full"></div>
        
        {/* Bubble 3 - Blue */}
        <div className="absolute bottom-[-10%] left-[-20%] w-[50rem] h-[50rem] bg-blue-400 opacity-40 blur-3xl rounded-full"></div>
      </div>

      {/* Content Box */}
      <div className="relative z-10 bg-white rounded-lg shadow-2xl p-8 w-11/12 max-w-5xl mx-auto my-8">
        <Layout home>
          <section className={`${utilStyles.headingMd} flex flex-col items-start ml-10`}>
            <p className="text-2xl font-bold mb-4">Hi, hello and welcome!</p>
          </section>
          <section className={`${utilStyles.headingMd} flex flex-col items-start mt-8 ml-10`}>
            <p className="text-lg font-normal mb-4">
              I’m Marko!, a 24-year-old nerd with a tendency to dive headfirst into every intriguing rabbit hole I come across. My days go by coding, working, working out, and reading. If there's a new tech trend, training study, or book recommendation, I’m already elbow-deep in it 🕵️‍♂️.
            </p>
            <p className="text-md font-normal mb-4">
              Each day, I strive to embrace opportunities for self-improvement, whether through learning new skills, experimenting with fresh ideas, or navigating the occasional misstep 🚀.
            </p>
            <p className="text-md font-normal">
              Here, you can explore my projects and gain insight into what drives me. Whether you're evaluating my portfolio or just curious about my approach to technology and business, I hope this provides a peek into who I am. Welcome to my corner of the internet, where curiosity and enthusiasm meet! 😁
            </p>
          </section>

          {/* Overlapping Images Section */}
          <section className="relative mt-12 mb-8">
            <div className="relative w-full max-w-5xl h-96">
              {/* Image 1 */}
              <img 
                src="/skiing.png" 
                alt="Image 1" 
                className="absolute top-0 -left-32 w-1/2 h-1/2 object-cover rounded-lg transform -rotate-6 shadow-lg" 
                style={{ zIndex: 1 }} 
              />
              
              {/* Image 2 */}
              <img 
                src="/skiing.png" 
                alt="Image 2" 
                className="absolute top-0 -right-32 w-2/3 h-2/3 object-cover rounded-lg transform rotate-6 shadow-lg" 
                style={{ zIndex: 2 }} 
              />
              
              {/* Image 3 */}
              <img 
                src="/skiing.png" 
                alt="Image 3" 
                className="absolute bottom-0 left-0 w-1/2 h-1/2 object-cover rounded-lg transform rotate-6 shadow-lg" 
                style={{ zIndex: 3 }} 
              />
              
              {/* Image 4 */}
              <img 
                src="/skiing.png" 
                alt="Image 4" 
                className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover rounded-lg transform -rotate-6 shadow-lg" 
                style={{ zIndex: 4 }} 
              />
            </div>
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} flex flex-col items-start mt-16`}>
          {/* Grid of Text Blocks */}
          <div className="grid grid-cols-1 gap-6 w-full">
            {/* Text Block 1 */}
            <Link href="/link-to-page-1" className="block p-4 border rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:bg-offwhite-100 hover:scale-105" style={{ minWidth: '40%' }}>
              <h3 className="text-xl font-bold mb-2">The Favorites</h3>
              <p className="text-sm text-gray-600">
              My favorite projects because they’re a fun mix of challenges and creative problem-solving. 
              Each one is a chance to dive into something new and see where my curiosity takes me.
              </p>
            </Link>
            
            {/* Text Block 2 */}
            <Link href="/link-to-page-2" className="block p-4 border rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:bg-offwhite-100 hover:scale-105" style={{ minWidth: '40%' }}>
              <h3 className="text-xl font-bold mb-2">Present Learnings</h3>
              <p className="text-sm text-gray-600">What I'm currently learning, everything from coding techniques, training methodology to delving into philosophical ideas and general knowledge. 
                It’s all about expanding my brainpower and finding new ways to mix new ideas with real-world skills!</p>
            </Link>
            
            {/* Text Block 3 */}
            <Link href="/link-to-page-3" className="block p-4 border rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:bg-offwhite-100 hover:scale-105" style={{ minWidth: '40%' }}>
              <h3 className="text-xl font-bold mb-2">Book Archive</h3>
              <p className="text-sm text-gray-600 mb-2">Check out my favorite reads from both the present and the past. 
                I’ve gathered a collection of books that left a mark on me, and I’m sharing some of the best ones worth diving into. 
                Explore and see if anything catches your eye!
              </p>
            </Link>
            
            {/* Text Block 4 */}
            <Link href="/link-to-page-4" className="block p-4 border rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:bg-offwhite-100 hover:scale-105" style={{ minWidth: '40%' }}>
              <h3 className="text-xl font-bold mb-2">Just Me</h3>
              <p className="text-sm text-gray-600">What the title says, it's just me! Progress from the gym, new achievements, 
                photos with friends or a rant about tomatoes and ketchup. If you like what you see here, we might aswell get a coffee sometime.
              </p>
            </Link>
          </div>
        </section>

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} flex flex-col items-start mt-12 ml-10`}>
            <p className="text-2xl font-bold mb-4">The "Hall of Fame"</p>
            <p className="text-lg font-normal mb-4">
              These are some of my favorite projects, either in progress or completed.
            </p>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </Layout>
      </div>
    </div>
  );
}
