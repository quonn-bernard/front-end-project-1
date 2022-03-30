// Comment Factory
const createComment = ({ id, content, createdAt, score, user: { image, png, webp }, username, replies: [] }) => ({
    id,
    content,
    createdAt,
    score,
    user,
    username,
    replies,
    template = `<article>
        <section>
            <img src="" alt="">
        </section>
        <section></section>
        <section></section>
    </article>`,
    render(template, node) {
        if (!node) return
        node.innerHTML = template
    }
  });
  