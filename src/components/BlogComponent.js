import { Render } from "../utils/render";

export function BlogComponent(item) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(item.createdAt);
    const dateString = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

    const description = item.description.split(' ');

    const blog = document.createElement('div');
    const viewsAndLikes = document.createElement('div');
    const views = document.createElement('p');
    const likes = document.createElement('p');
    const author = document.createElement('p');
    const h3 = document.createElement('h3');
    const desc = document.createElement('p');
    const tags = document.createElement('div');
    const img = document.createElement('img');

    blog.classList.add('gridElem');
    viewsAndLikes.classList.add('viewsAndLikes');
    views.classList.add('views');
    likes.classList.add('likes');
    author.classList.add('author');
    h3.classList.add('title');
    desc.classList.add('desc');
    tags.classList.add('tags');

    img.src = item.image;

    views.innerHTML = `Views - ${item.views}`;
    likes.innerHTML = `Likes - ${item.likes || 0}`;
    author.innerHTML = `${item.author.fullName} - ${dateString}`;
    h3.innerHTML = item.title;
    desc.innerHTML = description.length > 7 ? description.slice(0, 7).join(' ') + '...' : description.join(' ');


    Render(item.tags, tags, TagComponent);
    viewsAndLikes.append(views, likes);
    blog.append(viewsAndLikes, img, author, h3, desc, tags);

    return blog;
}

function TagComponent(item) {
    const span = document.createElement('span');
    const classes = ['frameworkSpan', 'researchSpan', 'productSpan'];
    const selectedClass = classes[Math.floor(Math.random() * classes.length)];

    span.classList.add(selectedClass);

    span.innerHTML = item;

    return span;
}