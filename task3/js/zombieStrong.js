function ZombieStrong(zombieItem) {
    Zombie.call(this);

    this.type = zombieItem.type;
    this.health = zombieItem.health;
    this.icon = 'zombie-strong';
}
