document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.zombies');

    for (const index in zombies) {
        const zombie = zombies[index];

        switch (true) {
            case zombie.type === ZOMBIE_TYPE.SMALL:
                zombie.icons = 'zombie-small';
                break;
            case zombie.type === ZOMBIE_TYPE.MAD:
                zombie.icons = 'zombie-mad';
                break;
            case zombie.type === ZOMBIE_TYPE.STRONG:
                zombie.icons = 'zombie-strong';
        }

        const div = document.createElement('div');
        div.classList.add('zombie-item');

        const img = document.createElement('img');
        img.setAttribute('src', `icons/${zombie.icons}.gif`);
        img.setAttribute('alt', zombie.icons);

        wrapper.appendChild(div).appendChild(img);
    }

    wrapper.addEventListener('click', (event) => {
        event.target.src = 'icons/zombie-dead.gif';
    });
});
