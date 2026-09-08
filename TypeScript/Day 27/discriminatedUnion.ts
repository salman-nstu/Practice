//A discriminated union is a union where each object has a common property that identifies its specific type.

type LoadingState = {
    status: "loading";
};

type SuccessState = {
    status: "success";
    data: string;
};

type ErrorState = {
    status: "error";
    message: string;
};

type State = LoadingState | SuccessState | ErrorState;

function handleState(state: State) {
    if (state.status === "loading") {
        console.log("Loading...");
    }

    if (state.status === "success") {
        console.log(state.data);
    }

    if (state.status === "error") {
        console.log(state.message);
    }
}


const state: State = {
    status: "error",
    message: "It's an error!!"
};

handleState(state);
