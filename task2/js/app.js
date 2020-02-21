document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.zombies');

    for (const index in zombies) {
        const zombie = zombies[index];

        switch (zombie.type) {
            case ZOMBIE_TYPE.SMALL:
                zombie.icons = 'zombie-small';
                break;
            case ZOMBIE_TYPE.MAD:
                zombie.icons = 'zombie-mad';
                break;
            case ZOMBIE_TYPE.STRONG:
                zombie.icons = 'zombie-strong';
        }

        const zombieElement = document.createElement('div');
        zombieElement.classList.add('zombie-item', zombie.icons);

        zombieElement.onclick = function() {
            this.classList.add('zombie-dead');
        };

        wrapper.appendChild(zombieElement);
    }
});
