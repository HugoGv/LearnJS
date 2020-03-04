document.addEventListener('DOMContentLoaded', () => {

    let count = 1;

    let zombieSmall;
    let zombieMad;
    let zombieStrong;

    function Zombie() {
        this.wrapper = document.getElementById('zombies');
        this.healthWrapper = document.createElement('div');
        this.healthBar = document.createElement('div');
        this.zombieElement = document.createElement('div');
        this.hitDamage = HIT_DAMAGE;

        this.zombieRender = () => {
            this.wrapper.innerHTML = "";

            this.healthWrapper.classList.add('health-wrapper');
            this.healthBar.classList.add('health');
            this.healthWrapper.appendChild(this.healthBar);

            this.zombieElement.classList.add('zombie-item', this.icon);

            this.wrapper.appendChild(this.healthWrapper);
            this.wrapper.appendChild(this.zombieElement);

            this.zombieElement.addEventListener('click', () => {
                this.takingDamage();
            });
        };

        this.takingDamage = () => {
            if ((this.health - this.hitDamage) >= 0) {
                this.health = this.health - this.hitDamage;

                this.healthBar.style.width = `${this.healthBar.offsetWidth - this.damagePercentCalc}px`;
            } else {
                this.zombieElement.classList.add('zombie-dead');
                this.healthBar.style.width = '0px';

                setTimeout(()=> {
                    if (count < zombies.length) {
                        count++;

                        countZombie(count);
                    } else {
                        doneRender();
                    }
                }, 2000)
            }
        };
    }

    function ZombieSmall(zombieItem) {
        Zombie.call(this);

        this.type = zombieItem.type;
        this.health = zombieItem.health;
        this.icon = 'zombie-small';
        this.damagePercentCalc = (this.hitDamage/this.health)*100;

    }

    function ZombieMad(zombieItem) {
        Zombie.call(this);

        this.type = zombieItem.type;
        this.health = zombieItem.health;
        this.icon = 'zombie-mad';
        this.damagePercentCalc = (this.hitDamage/this.health)*100;
    }

    function ZombieStrong(zombieItem) {
        Zombie.call(this);

        this.type = zombieItem.type;
        this.health = zombieItem.health;
        this.icon = 'zombie-strong';
        this.damagePercentCalc = (this.hitDamage/this.health)*100;
    }

    const setZombie = (zombies) => {
        for (const index in zombies) {
            const zombieItem = zombies[index];

            switch (zombieItem.type) {
                case ZOMBIE_TYPE.SMALL:
                    zombieSmall = new ZombieSmall(zombieItem);
                    break;
                case ZOMBIE_TYPE.MAD:
                    zombieMad = new ZombieMad(zombieItem);
                    break;
                case ZOMBIE_TYPE.STRONG:
                    zombieStrong = new ZombieStrong(zombieItem);
            }
        }

    };

    const countZombie = (type) => {
        switch (type) {
            case ZOMBIE_TYPE.SMALL:
                zombieSmall.zombieRender();
                break;
            case ZOMBIE_TYPE.MAD:
                zombieMad.zombieRender();
                break;
            case ZOMBIE_TYPE.STRONG:
                zombieStrong.zombieRender();
        }

        counterRender(type);
    };

    const counterRender = (count) => {
        const element = document.getElementById('zombies-status').firstElementChild;
        element.innerText = count;
    };

    const totalCountRender = () => {
        const element = document.getElementById('zombies-status').lastElementChild;
        element.innerText = `${zombies.length}`;
    };

    const doneRender = () => {
        document.body.classList.add('done');
        document.body.innerHTML = 'Done';
    };

    setZombie(zombies);
    countZombie(count);
    totalCountRender();
});
