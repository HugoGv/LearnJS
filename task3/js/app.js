document.addEventListener('DOMContentLoaded', () => {

    let index = 0;
    const zombieAll = [];

    function zombieCreate(zombie, img) {
        const takingDamage = (zombie, damage) => {
            zombie.health = zombie.health - damage;
        };

        const icon = {img};

        return {
            takingDamage,
            ...icon,
            ...zombie
        }
    }

    const setZombie = (zombies) => {
        for (const index in zombies) {
            const zombieItem = zombies[index];
            let zombie;

            switch (zombieItem.type) {
                case ZOMBIE_TYPE.SMALL:
                    zombie = zombieCreate(zombieItem, 'zombie-small');
                    break;
                case ZOMBIE_TYPE.MAD:
                    zombie = zombieCreate(zombieItem, 'zombie-mad');
                    break;
                case ZOMBIE_TYPE.STRONG:
                    zombie = zombieCreate(zombieItem, 'zombie-strong');
            }

            zombieAll.push(zombie);
        }
    };

    const healthBarRender = () => {
        const healthWrapper = document.createElement('div');
        const health = document.createElement('div');

        healthWrapper.classList.add('health-wrapper');
        health.classList.add('health');
        healthWrapper.appendChild(health);

        return healthWrapper;
    };

    const zombieRender = (index) => {
        const wrapper = document.getElementById('zombies');

        wrapper.innerHTML = "";

        const zombieElement = document.createElement('div');

        zombieElement.classList.add('zombie-item', zombieAll[index].img);

        wrapper.appendChild(healthBarRender());
        wrapper.appendChild(zombieElement);

        const dd = damagePercentCalc(HIT_DAMAGE, zombieAll[index].health);

        zombieElement.addEventListener('click', () => {
            hitDamage(zombieAll[index], zombieElement, dd, HIT_DAMAGE)
        });

        counterRender(index + 1);
    };

    const counterRender = (count) => {
        const element = document.getElementById('zombies-status').firstElementChild;
        element.innerText = count;
    };

    const totalCountRender = () => {
        const element = document.getElementById('zombies-status').lastElementChild;
        element.innerText = `${zombieAll.length}`;
    };

    const doneRender = () => {
        document.body.classList.add('done');
        document.body.innerHTML = 'Done';
    };

    const damagePercentCalc = (damage, health) => {
        return (damage/health)*100;
    };

    const hitDamage = (zombie, zombieElement, dd, damage) => {
        const health = document.querySelector('.health');

        if (zombie.health - damage >= 0) {
            zombie.takingDamage(zombie, damage);

            health.style.width = `${health.offsetWidth - dd}px`;
        } else {
            zombieElement.classList.add('zombie-dead');
            health.style.width = '0px';

            setTimeout(()=> {
                if ((index + 1) < zombieAll.length) {
                    index++;

                    zombieRender(index);
                } else {
                    doneRender();
                }
            }, 2000)
        }
    };

    setZombie(zombies);
    zombieRender(index);
    totalCountRender();
});
