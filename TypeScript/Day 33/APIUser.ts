interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

type UserUpdate = Partial<User>;

const update: UserUpdate = {
    name: "New Name"
};

type PublicUser = Omit<User, "password">;

type UserCard = Pick<
    User,
    "id" | "name"
>;

