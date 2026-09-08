interface User {
    id: number;
    name: string;
}

interface Timestamp {
    createdAt: Date;
    updatedAt: Date;
}

type UserRecord = User & Timestamp;

const user: UserRecord = {
    id: 1,
    name: "Rahim",
    createdAt: new Date(),
    updatedAt: new Date()
};