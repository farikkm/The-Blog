import { BlogComponent } from "../../../components/BlogComponent";
import { Render } from "../../../utils/render";
import { useService } from "../../../utils/useService"

const allBlogs = document.querySelector('.allBlog')
const overlay = document.querySelector('#loader-overlay');

const closeBtn = document.querySelector('.closeBtn')
const burgerBtn = document.getElementById('burgerBtn');
const modal = document.getElementById('modal');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    modal.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    burgerBtn.classList.remove('active');
});

async function main() {
    try {
        const { data: blogs } = await useService('blogs').find();

        Render(blogs.data, allBlogs, BlogComponent);
    } catch (e) {

    } finally {
        overlay.classList.add('hidden');
    }
}

main();
