import { Inter } from "next/font/google";

export const NAME_REGEX = /^[a-zA-Z]{2,}$/;
export const PHONE_REGEX =
    /^\+7\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/;

export const errorMessageLetters = "Please enter only letters";
export const errorMessageLength = "Please enter at least 2 letters";

export const SUCCESS_PATH = "/signup/success";
