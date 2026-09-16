interface User {
    id: number;

    profile: {
        name: string;
        age: number;
    };
}


type Profile = User["profile"];

type ProfileName = User["profile"]["name"];

const nnn: ProfileName = "SSS";
