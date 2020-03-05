let count = 1;
let zombieAll = [];

function Zombie() {
    this.wrapper = document.getElementById('zombies');
    this.healthWrapper = document.createElement('div');
    this.healthBar = document.createElement('div');
    this.zombieElement = document.createElement('div');
    this.hitDamage = HIT_DAMAGE;
    this.damagePercent = 0;

    this.zombieRender = (count) => {
        this.counterRender(count);
        this.totalCountRender();

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

        this.damagePercentCalc();
    };

    this.counterRender = (count) => {
        const element = document.getElementById('zombies-status').firstElementChild;
        element.innerText = count;
    };

    this.totalCountRender = () => {
        const element = document.getElementById('zombies-status').lastElementChild;
        element.innerText = `${zombieAll.length}`;
    };

    this.doneRender = () => {
        document.body.classList.add('done');
        document.body.innerHTML = 'Done';
    };

    this.damagePercentCalc = () => {
        this.damagePercent = (this.hitDamage/this.health)*100;
    };

    this.takingDamage = () => {
        if ((this.health - this.hitDamage) >= 0) {
            this.health = this.health - this.hitDamage;
            this.healthBar.style.width = `${this.healthBar.offsetWidth - this.damagePercent}px`;
        } else {
            this.zombieElement.classList.add('zombie-dead');
            this.healthBar.style.width = '0px';

            setTimeout(()=> {
                if (count < zombieAll.length) {
                    count++;

                    countZombie(count);
                } else {
                    this.doneRender();
                }
            }, 2000)
        }
    };
}

const countZombie = (index) => {
    zombieAll[index-1].zombieRender(index);
};
