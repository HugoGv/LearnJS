const totalZombies = document.querySelector('.total-zombies');
const deadZombies = document.querySelector('.dead-zombies');
const smallZombies = document.querySelector('.small-zombies');
const madZombies = document.querySelector('.mad-zombies');
const strongZombies = document.querySelector('.strong-zombies');

let totalZombiesCount = 0;
let deadZombiesCount = 0;
let smallZombiesCount = 0;
let madZombiesCount = 0;
let strongZombiesCount = 0;

for (const index in zombiesData) {
    const zombie = zombiesData[index];

    const isNumber = isNaN(zombie);

    const isDeadZombie = !isNumber || zombie < 1;
    const isSmallZombie = isNumber && (zombie > 0 && zombie < 11);
    const isMadZombie = isNumber && (zombie > 10 && zombie < 21);
    const isStrongZombie = isNumber && zombie > 20;

    if (isDeadZombie) {
        deadZombiesCount++;
    } else if (isSmallZombie) {
        smallZombiesCount++;
    } else if (isMadZombie) {
        madZombiesCount++;
    } else if (isStrongZombie) {
        strongZombiesCount++;
    }

    totalZombiesCount++;
}

totalZombies.textContent = totalZombies.textContent + '{' + totalZombiesCount + '}';
deadZombies.textContent = deadZombies.textContent + '{' + deadZombiesCount + '}';
smallZombies.textContent = smallZombies.textContent + '{' + smallZombiesCount + '}';
madZombies.textContent = madZombies.textContent + '{' + madZombiesCount + '}';
strongZombies.textContent = strongZombies.textContent + '{' + strongZombiesCount + '}';

console.log(document.getElementsByTagName('body')[0].innerText);
