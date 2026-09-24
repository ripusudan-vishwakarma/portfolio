import React from "react";

const posts = [
  {
    title: "What Platform Engineering Actually Solves",
    category: "Platform Engineering",
    description: "A practical introduction to platform engineering and why internal developer platforms are becoming important."
  },
  {
    title: "Securing AWS Access for GitHub Actions with HashiCorp Vault",
    category: "DevSecOps",
    description: "How GitHub Actions OIDC and HashiCorp Vault can be used to provide short-lived AWS credentials for secure CI/CD."
  }
];

function ArticlesPage() {
  return (
    <div className="container page-shell">
      <div className="single-page-section">
        <h1>Articles</h1>
        <p>Practical notes on platform engineering, AWS, DevSecOps, cloud security, automation, and AI.</p>

        <div className="article-grid">
          {posts.map((post) => (
            <article className="card-block article-card" key={post.title}>
              <span className="article-tag">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticlesPage;
