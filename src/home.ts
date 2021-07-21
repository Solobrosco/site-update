export const fetchHome = async () => {
    // const page1 = `https://solobrosco.github.io/data/page1.json`;
    const home = `https://solobrosco.github.io/data/home.json`;
    const data = await (await fetch(home)).json();
    console.log(data)
    return data
    // FCC
}
// export class Home {
//     // about: {};
//     // downloads: {};
//     // education: {};
//     // experience: {};
//     // footer: boolean;
//     // gallery: boolean;
//     // myRoom: boolean;
//     // navbar: {};
//     // simpleSplash: {};
//     // splash: boolean;
//     // stats: {};

//     constructor(){
//         const home = `https://solobrosco.github.io/data/home.json`;
//         const data = fetch(home).then((res) => res.json());
//         console.log(data)
//         // this.about = data.about
//         // this.downloads = data.downloads
//         // this.education = data.education
//         // this.experience = data.experience
//         // this.footer = data.footer
//         // this.gallery = data.gallery
//         // this.myRoom = data.myRoom
//         // this.navbar = data.navbar
//         // this.simpleSplash = data.simpleSplash
//         // this.splash = data.splash
//         // this.stats = data.stats
//     }
// }
