import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import homeStyles from '../styles/home.module.css';
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
    <div className={homeStyles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={homeStyles.backgroundGradient}></div>

      <div className={homeStyles.contentBox}>
        <Layout home>
        <div className="flex flex-row justify-between items-start">
  <div className="flex flex-col items-start -ml-16">
    <section className={`${utilStyles.headingMd}`}>
      <p className="text-2xl font-bold mb-4 -ml-36">Hi, hello and welcome!</p>
    </section>

    <section className={`${utilStyles.headingMd} mt-8 -ml-36`}>
      <p className="text-lg font-normal mb-4">
        I’m Marko!, a 24-year-old nerd with a tendency to dive headfirst into every intriguing rabbit hole I come across. My days go by coding, working, working out, and reading. If there's a new tech trend, training study, or book recommendation, I’m already elbow-deep in it 🕵️‍♂️.
      </p>
      <p className="text-md font-normal mb-4">
        Each day, I strive to embrace opportunities for self-improvement, whether through learning new skills, experimenting with fresh ideas, or navigating the occasional misstep 🚀.
      </p>
      <p className="text-md font-normal">
        Here, you can explore my projects and gain insight into what drives me. Whether you're evaluating my portfolio or just curious about my approach to technology and life, I hope this provides a peek into who I am. Welcome to my corner of the internet, where curiosity and enthusiasm meet! 😁
      </p>
    </section>
  </div>
  <img 
    src="/skiing.png" 
    alt="Image" 
    className="mb-4 mt-16 -ml-32" 
    style={{
      position: 'relative',
      width: '70%', // Adjust the width if needed
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      marginLeft: '5%', // Adjust margin to move image slightly more to the right
      marginRight: '-40%',
    }}
  />
</div>


          <section className="relative mt-16 mb-8">
            <div className={homeStyles.imageContainer}>
              <img 
                src="/skiing.png" 
                alt="Image 1" 
                className={`${homeStyles.image} ${homeStyles.image1}`} 
              />
              <img 
                src="/skiing.png" 
                alt="Image 2" 
                className={`${homeStyles.image} ${homeStyles.image2}`} 
              />
              <img 
                src="/skiing.png" 
                alt="Image 3" 
                className={`${homeStyles.image} ${homeStyles.image3}`} 
              />
              <img 
                src="/skiing.png" 
                alt="Image 4" 
                className={`${homeStyles.image} ${homeStyles.image4}`} 
              />
            </div>
          </section>

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} flex flex-col items-start mt-28`}>
            <div className="grid grid-cols-1 gap-6 w-full">
              <Link href="/link-to-page-1" className={homeStyles.textBlock}>
                <h3 className="text-xl font-bold mb-2">The Favorites 🏆</h3>
                <p className="text-sm text-gray-600">
                  My favorite projects because they’re a fun mix of challenges and creative problem-solving. 
                  Each one is a chance to dive into something new and see where my curiosity takes me.
                </p>
              </Link>
              
              <Link href="/link-to-page-2" className={homeStyles.textBlock}>
                <h3 className="text-xl font-bold mb-2">Present Learnings 🤓</h3>
                <p className="text-sm text-gray-600">
                  What I'm currently learning, everything from coding techniques, training methodology to delving into philosophical ideas and general knowledge. 
                  It’s all about expanding my brainpower and finding new ways to mix new ideas with real-world skills!
                </p>
              </Link>
              
              <Link href="/link-to-page-3" className={homeStyles.textBlock}>
                <h3 className="text-xl font-bold mb-2">Book Archive 📘</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Check out my favorite reads from both the present and the past. 
                  I’ve gathered a collection of books that left a mark on me, and I’m sharing some of the best ones worth diving into. 
                  Explore and see if anything catches your eye!
                </p>
              </Link>
              
              <Link href="/link-to-page-4" className={homeStyles.textBlock}>
                <h3 className="text-xl font-bold mb-2">Just Me 🙂</h3>
                <p className="text-sm text-gray-600">
                  What the title says, it's just me! Progress from the gym, new achievements, 
                  photos with friends or a rant about tomatoes and ketchup. If you like what you see here, we might as well get a coffee sometime.
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
