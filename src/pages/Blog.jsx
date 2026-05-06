import { useEffect } from 'react';
import chillpic from '../assets/images/chillpic.png';
import gympic from '../assets/images/gympic.png';
import studypic from '../assets/images/studypic.png';

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="section">
      <h2>Spring Break 2026</h2>
      <p>No flights, no hotels just a week of recharging locally. Here's how it went.</p>

      <article className="blog-post">
        <h3>Day 1–2: Doing Absolutely Nothing (On Purpose)</h3>
        <p className="blog-date">March 22–23, 2026</p>
        <img src={chillpic} alt="Chilling at home" style={{width:'100%', borderRadius:'8px', margin:'1rem 0'}} />
        <p>
          The first thing I did when spring break started was sleep in until 8 am and feel zero guilt about it.
          After a semester of deadlines, GCP labs, and ML assignments, the brain needed a full reset.
          I spent the first couple of days catching up with my friends on the P5 I'd been ignoring, eating actual meals at normal
          times, and just existing without a to-do list. Honestly underrated.
        </p>
        <p>
          I also took some time to clean up my room and organize, sounds boring, but there's
          something genuinely satisfying about having a clean room again. Also caught up on a show I'd been
          putting off for weeks — no spoilers but it was worth the wait. Sometimes the best thing you can do
          is just sit on the couch and do absolutely nothing productive.
        </p>
      </article>

      <article className="blog-post">
        <h3>Mid-Break: Back in the Gym</h3>
        <p className="blog-date">March 24–27, 2026</p>
        <img src={gympic} alt="Back at the gym" style={{width:'100%', borderRadius:'8px', margin:'1rem 0'}} />
        <p>
          I got into a consistent gym routine. During the semester I'd been
          going but im always on a bit of a time crunch so usually I'm always rushing and not getting the best work outs in. Spring break gave me the chance to actually go every day
          and get into a real rhythm. Focused mostly on upper body since I don't like hitting legs because it hurts 🥀 and got some good workouts in.
        </p>
        <p>
          There's something different about going to the gym when you're not exhausted. You
          actually have energy to push yourself. Came home from the gym feeling way better than I had
          any right to after a week of doing "nothing." Already planning to keep the streak going into the
          remainder of the semester.
        </p>
        <p>
          Also started paying more attention to what I was eating during this stretch — not anything crazy,
          just actually cooking instead of grabbing whatever was fast. Made a big difference in how I felt
          after workouts. Small things add up.
        </p>
      </article>

      <article className="blog-post">
        <h3>Hanging Out & Touching Grass</h3>
        <p className="blog-date">March 26–27, 2026</p>
        <p>
          Mid-break I linked up with some friends I hadn't seen properly since the semester started.
          We grabbed food, drove around for a bit, and just caught up. Nothing planned, which made it
          better. When you're always busy it's easy to let those hangouts slip — spring break was a good
          reminder to actually make time for people.
        </p>
        <p>
          We ended up getting birria tacos at this spot someone recommended and honestly it might've been
          the highlight of the whole week. Sometimes the simplest things hit different when you've been
          locked in studying for months. Good food, good company, no homework — that's the formula.
        </p>
      </article>

      <article className="blog-post">
        <h3>Last Few Days: Slow Re-Entry</h3>
        <p className="blog-date">March 28–30, 2026</p>
        <img src={studypic} alt="Winding down" style={{width:'100%', borderRadius:'8px', margin:'1rem 0'}} />
        <p>
          The end of break is always a little bittersweet. I spent the last few days doing some light prep
          for the upcoming weeks, not full on studying but just reviewing what's coming up so I'm not surprised
          on the day coming back. Caught up with some friends, grabbed food a couple times, and tried to enjoy the
          last of the free time before the final stretch of the semester kicks in.
        </p>
        <p>
          Overall? A lowkey but genuinely good spring break. Sometimes you don't need a trip you just need
          a week where nobody's asking anything of you.
        </p>
      </article>
    </main>
  );
}

export default Blog;