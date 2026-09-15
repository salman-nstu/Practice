interface Entity {
    id: number;
}

class Repository<T extends Entity> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
}

interface User extends Entity {
    name: string;
}

const userRepository = new Repository<User>();

userRepository.add({
    id: 1,
    name: "Salman"
});

const user = userRepository.getById(1);
