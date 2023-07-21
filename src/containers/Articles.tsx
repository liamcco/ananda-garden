import { Article } from "@/components";

function Blog() {
  return (
    <div className="section articles">
      <div className="articles-heading">
        <h1 className="gradient__text">Nyheter och erbjudanden</h1>
      </div>
      <div className="articles-container">
        <Article text="REA: 50% på gröna stenar!" link="/" />
        <Article text="Vernissage med Maski Halonen!" link="/" />
        <Article text="Nyhet: Ny behandling på kliniken!" link="/" />
      </div>
    </div>
  );
}

export default Blog;
