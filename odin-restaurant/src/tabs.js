export const initTab = () => {
    const navLinks = document.querySelectorAll('.nav-item');
    const currentPage = getCurrentPageName();
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const selectedTab = link.getAttribute('data-tab');

            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');

            navLinks.forEach(content)
        });
    });
};