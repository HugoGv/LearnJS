document.addEventListener('DOMContentLoaded', () => {
    const setZombie = (zombies) => {
        let zombie;

        for (const index in zombies) {
            const zombieItem = zombies[index];

            switch (zombieItem.type) {
                case ZOMBIE_TYPE.SMALL:
                    zombie = new ZombieSmall(zombieItem);
                    break;
                case ZOMBIE_TYPE.MAD:
                    zombie = new ZombieMad(zombieItem);
                    break;
                case ZOMBIE_TYPE.STRONG:
                    zombie = new ZombieStrong(zombieItem);
            }

            zombieAll.push(zombie);
        }
    };

    setZombie(zombies);
    countZombie(count);
});
