import { writable } from "svelte/store";
import background from '$lib/images/blurry-gradient-haikei.svg';

export default writable({ title: "TyBlog", subtitle: "A home for Tyler's thoughts", background });