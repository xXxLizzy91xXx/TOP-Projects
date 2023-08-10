import _ from 'lodash';
import './main.css';
import Logo from './img/muffin.png';
import Cookie from './img/cookiecake.png';
import Ginger from './img/gingerbread.png';
import '@fortawesome/fontawesome-free/css/all.css';

export const pageLoad = () => {

    // Content Div
    const body = document.querySelector('body')
    const content = document.createElement('content');
    body.appendChild(content);

    //Header
    const header = document.createElement('header');

    const headLogoOne = new Image();
    headLogoOne.classList.add('logo');
    headLogoOne.src = Logo;
    const headLogoTwo = new Image();
    headLogoTwo.classList.add('logo');
    headLogoTwo.src = Logo;

    const h1 = document.createElement('h1');
    h1.classList.add('title');
    h1.innerHTML = '<a href="#">Muffin Man Eats</a>';
    
    header.append(headLogoOne, h1, headLogoTwo);
    
    //Main
    const container = document.createElement('div');
    container.classList.add('container');

    // Nav
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    nav.innerHTML = `
        <ul>
            <li class="nav-item" id="home-link"><a href="./dist/index.html" data-page="home">Home</a></li>
            <li class="nav-item" id="about-link"><a href="./dist/about.html" data-page="about">About</a></li>
            <li class="nav-item" id="contact-link"><a href="./dist/contact.html" data-page="contact">Contact</a></li>
        </ul>
    `;

    //First column
    const colOne = document.createElement('div');
    colOne.classList.add('colOne');
    const subHeadOne = document.createElement('h2');
    subHeadOne.classList.add('subheadOne');
    subHeadOne.innerText = ('Do you know the muffin man?');
    const paraOne = document.createElement('p');
    paraOne.classList.add('paraOne');
    paraOne.innerText = ('Sweet biscuit I love pudding topping cupcake candy. Cake sesame snaps chocolate liquorice jujubes marshmallow chocolate lollipop. Gummies bear claw caramels halvah shortbread. Cotton candy apple pie chocolate cake wafer candy canes muffin I love. Icing donut ice cream I love bonbon liquorice.');

    const paraImgOne = new Image();
    paraImgOne.classList.add('paraimgOne');
    paraImgOne.src = Cookie;

    //Append to the first column
    colOne.append(subHeadOne, paraOne, paraImgOne);

    //Second column
    const colTwo = document.createElement('div');
    colTwo.classList.add('colTwo');
    const subHeadTwo = document.createElement('h2');
    subHeadTwo.classList.add('subheadTwo');
    subHeadTwo.innerText = ('Oh do you know the muffin man?');
    const paraTwo = document.createElement('p');
    paraTwo.classList.add('paraTwo');
    paraTwo.innerText = ('Chocolate candy pastry caramels cookie cake pie. Gingerbread powder dragée gingerbread I love dragée pie biscuit. I love gummi bears powder tootsie roll I love I love jelly beans I love cheesecake. Pie I love cheesecake biscuit candy canes icing shortbread I love icing. I love shortbread tootsie roll dragée caramels. Carrot cake chocolate pie biscuit I love I love topping.');
    const paraImgTwo = new Image();
    paraImgTwo.classList.add('paraimgOne');
    paraImgTwo.src = Ginger;
    //Append to the second column
    colTwo.append(subHeadTwo, paraTwo, paraImgTwo);

    container.append(colOne, colTwo);

    //Footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    //Copyright DIV
    const copy = document.createElement('div');
    copy.classList.add('copy');
    copy.innerHTML = 'Made with <i class="fa-sharp fa-solid fa-heart fa-beat" style="color: #ff0000;"></i> by Elizabeth Muir';

    //Brand DIV
    const brand = document.createElement('div');
    brand.classList.add('brand');

    //Links
    const github = document.createElement('a');
    github.href = 'https://github.com/xXxLizzy91xXx';
    github.target = '_blank';
    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fa-brands', 'fa-github');
    github.appendChild(githubIcon);

    const linkedin = document.createElement('a');
    linkedin.href = 'https://www.linkedin.com/in/elizabethmuir91/';
    linkedin.target = '_blank';
    const linkedinIcon = document.createElement('i');
    linkedinIcon.classList.add('fa-brands', 'fa-linkedin');
    linkedin.appendChild(linkedinIcon);

    const stackover = document.createElement('a');
    stackover.href = 'https://stackoverflow.com/users/22046608/xxxlizzym91xxx';
    stackover.target = '_blank';
    const stackoverIcon = document.createElement('i');
    stackoverIcon.classList.add('fa-brands', 'fa-stack-overflow');
    stackover.appendChild(stackoverIcon);

    //Append to brand div
    brand.append(github, linkedin, stackover);

    //Append copy and brand to footer
    footer.append(copy, brand);

    //Appends everything on the page
    content.append(header, nav, container, footer);
}