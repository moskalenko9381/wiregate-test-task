import { ISignUpProps } from "@/app/type";

type ACTION_STRING_TYPE =
    | "name"
    | "surname"
    | "phone"
    | "company"
    | "address"
    | "password";

interface ISignUpAction {
    type: ACTION_STRING_TYPE;
    value: any;
}

export const signUpAction = (
    type: ACTION_STRING_TYPE,
    value: string | boolean,
): ISignUpAction => ({
    type,
    value,
});

export function signupReducer(
    state: ISignUpProps,
    action: ISignUpAction,
): ISignUpProps {
    switch (action.type) {
    case "name":
        return { ...state, name: action.value };
    case "surname":
        return { ...state, lastName: action.value };
    case "phone":
        return { ...state, phone: action.value };
    case "company":
        return {
            ...state,
            company: action.value,
            address: action.value ? state.address : undefined,
        };
    case "address":
        return { ...state, address: action.value };
    case "password":
        return { ...state, password: action.value };
    default:
        return state;
    }
}
