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
    <div className="relative min-h-screen bg-offwhite-100 flex items-center justify-center">
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Blurred Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-400 opacity-50 blur-3xl rounded-full"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-500 opacity-50 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-500 opacity-50 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 opacity-50 blur-3xl rounded-full"></div>
      </div>

      {/* Content Box */}
      <div className="relative z-10 bg-white rounded-lg shadow-2xl p-8 w-11/12 max-w-5xl mt-8 mx-auto">
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
