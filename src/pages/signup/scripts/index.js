import { useService } from "../../../utils/useService";
import { setCookie } from "../../../utils/cookie";
import { redirect } from "../../../utils/helpers";

const form = document.forms.signup
const overlay = document.querySelector('#loader-overlay');

overlay.classList.add('hidden');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    overlay.classList.remove('hidden');

    const user = {};

    const fn = new FormData(form);

    fn.forEach((value, key) => {
        user[key] = value;
    });

    try {
        const res = await useService('users').post(user);
        
        setCookie('accessToken', res.data.accessToken, 1);
        redirect('/');
    } catch (error) {
        console.log(error);
    } finally {
        overlay.classList.add('hidden');
    }
});
