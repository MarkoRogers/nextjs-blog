import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import homeStyles from '../styles/home.module.css';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { useEffect } from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';

// Define the path to your markdown files
const postsDirectory = path.join(process.cwd(), 'posts');

// Function to fetch and parse markdown file content
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  
  // Read and parse markdown file content
  const filePath = path.join(postsDirectory, 'giving-personality-to-procedural-animations.md'); // Update with your markdown file name
  const fileContents = await fs.readFile(filePath, 'utf8');
  
  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();

  // Extract metadata
  const { title, date } = parseMarkdownMetadata(fileContents);

  return {
    props: {
      allPostsData,
      title,
      date,
      contentHtml
    },
  };
}

// Function to extract metadata from markdown content
function parseMarkdownMetadata(markdownContent) {
  const metaDataMatch = markdownContent.match(/^---\n([\s\S]*?)\n---/);
  if (!metaDataMatch) return {};
  
  const metaData = metaDataMatch[1];
  const metaLines = metaData.split('\n').filter(line => line.trim() !== '');
  
  const meta = {};
  metaLines.forEach(line => {
    const [key, ...value] = line.split(':').map(part => part.trim());
    if (key && value.length) meta[key] = value.join(':');
  });

  return meta;
}

export default function Home({ allPostsData, title, date, contentHtml }) {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7 && rect.bottom >= 0) {
          if (!element.classList.contains('visible')) {
            element.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={homeStyles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={`${homeStyles.backgroundGradient} fade-in`}></div>

      <div className={`${homeStyles.contentBox} fade-in`}>
        <Layout home>
          <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col items-start -ml-16">
              <section className={`${utilStyles.headingMd} fade-in`}>
                <p className="text-2xl font-bold mb-4 -ml-36">Hi, hello and welcome!</p>
              </section>

              <section className={`${utilStyles.headingMd} mt-8 -ml-36 fade-in`}>
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
              className="mb-8 mt-16 -ml-36 fade-in" 
              style={{
                position: 'relative',
                width: '70%', // Adjust the width if needed
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                marginLeft: '5%', // Adjust margin to move image slightly more to the right
                marginRight: '-45%',
              }}
            />
          </div>

          <section className="relative mt-16 mb-8">
            <div className={homeStyles.imageContainer}>
              <img 
                src="/skiing.png" 
                alt="Image 1" 
                className={`${homeStyles.image} ${homeStyles.image1} fade-in`} 
              />
              <img 
                src="/skiing.png" 
                alt="Image 2" 
                className={`${homeStyles.image} ${homeStyles.image2} fade-in delay-1`} 
              />
              <img 
                src="/skiing.png" 
                alt="Image 3" 
                className={`${homeStyles.image} ${homeStyles.image3} fade-in delay-2`} 
              />
              <img 
                src="/skiing.png" 
                alt="Image 4" 
                className={`${homeStyles.image} ${homeStyles.image4} fade-in delay-3`} 
              />
            </div>
          </section>

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} flex flex-col items-start mt-28 fade-in`}>
            <div className="grid grid-cols-1 gap-6 w-full">
              <Link href="/link-to-page-1" className={`${homeStyles.textBlock}`}>
                <h3 className="text-xl font-bold mb-2">The Favorites 🏆</h3>
                <p className="text-sm text-gray-600">
                  My favorite projects because they’re a fun mix of challenges and creative problem-solving. 
                  Each one is a chance to dive into something new and see where my curiosity takes me.
                  Custom llm (games, physics), Go with visual ai (done), ETH price prediction (next), screenshot + take pic with camera (done), league api (stat higher lower game)
                  typeracer type game, image to ascii,
                  Project title, brief description, some images/drawings/plans, any failures/difficulties, lessons learned, future
                </p>
              </Link>
              
              <Link href="/link-to-page-2" className={`${homeStyles.textBlock}`}>
                <h3 className="text-xl font-bold mb-2">Present Learnings 🤓</h3>
                <p className="text-sm text-gray-600">
                  What I'm currently learning, everything from coding techniques, training methodology to delving into philosophical ideas and general knowledge. 
                  It’s all about expanding my brainpower and finding new ways to mix new ideas with real-world skills!
                </p>
              </Link>
              
              <Link href="/link-to-page-3" className={`${homeStyles.textBlock}`}>
                <h3 className="text-xl font-bold mb-2">Book Archive 📘</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Check out my favorite reads from both the present and the past. 
                  I’ve gathered a collection of books that left a mark on me, and I’m sharing some of the best ones worth diving into. 
                  Explore and see if anything catches your eye!
                </p>
              </Link>
              
              <Link href="/link-to-page-4" className={`${homeStyles.textBlock}`}>
                <h3 className="text-xl font-bold mb-2">Just Me 🙂</h3>
                <p className="text-sm text-gray-600">
                  What the title says, it's just me! Progress from the gym, new achievements, 
                  photos with friends or a rant about tomatoes and ketchup. If you like what you see here, we might as well get a coffee sometime.
                </p>
              </Link>
            </div>
          </section>

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} flex flex-col items-start mt-12 ml-10 fade-in`}>
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
          
          {/* New Section for Markdown Content */}
          <section className={`${utilStyles.headingMd} mt-12`}>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="text-lg mb-8" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </section>
        </Layout>
      </div>
    </div>
  );
}
