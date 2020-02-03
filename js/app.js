const totalZombies = document.querySelector('.total-zombies'),
      deadZombies = document.querySelector('.dead-zombies'),
      smallZombies = document.querySelector('.small-zombies'),
      madZombies = document.querySelector('.mad-zombies'),
      strongZombies = document.querySelector('.strong-zombies');

let totalZombiesCount = 0,
    deadZombiesCount = 0,
    smallZombiesCount = 0,
    madZombiesCount = 0,
    strongZombiesCount = 0;

countZombieType = (zombies) => {
    for (let i = 0; i < zombies.length; i++) {
        let zombie = zombies[i];

        let isNumber = typeof zombie === 'number';

        let isDeadZombie = zombie > 0 && zombie < 11;
        let isSmallZombie = zombie > 10 && zombie < 21;
        let isStrongZombie = zombie > 20;

        if (zombie < 1) {
            deadZombiesCount++;
        } else if (isNumber && isDeadZombie) {
            smallZombiesCount++;
        } else if (isNumber && isSmallZombie) {
            madZombiesCount++;
        } else if (isNumber && isStrongZombie) {
            strongZombiesCount++;
        }

        totalZombiesCount++;
    }
};

countZombieType(zombiesData);

totalZombies.textContent = totalZombies.textContent + '{' + totalZombiesCount + '}';
deadZombies.textContent = deadZombies.textContent + '{' + deadZombiesCount + '}';
smallZombies.textContent = smallZombies.textContent + '{' + smallZombiesCount + '}';
madZombies.textContent = madZombies.textContent + '{' + madZombiesCount + '}';
strongZombies.textContent = strongZombies.textContent + '{' + strongZombiesCount + '}';
