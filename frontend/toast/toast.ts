import { createToast, createToastOnce } from "./toast_internal_support";
import { t } from "../i18next_wrapper";

/**
 * Orange message with "Warning" as the default title.
 */
export const warning = (
  message: string,
  title = t("Warning"),
  color = "orange",
  idPrefix = "",
) => {
  createToastOnce(message, title, color, idPrefix, console.warn);
};

/**
 *  Red message with "Error" as the default title.
 */
export const error = (
  message: string,
  title = t("Error"),
  color = "red",
  idPrefix = "",
) => {
  createToastOnce(message, title, color, idPrefix, console.error);
};

/**
 *  Green message with "Success" as the default title.
 */
export const success = (
  message: string,
  title = t("Success"),
  color = "green",
  idPrefix = "",
) =>
  createToast(message, title, color, idPrefix);

/**
 *  Blue message with "FYI" as the default title.
 */
export const info = (
  message: string,
  title = t("FYI"),
  color = "blue",
  idPrefix = "",
) =>
  createToast(message, title, color, idPrefix);

/**
 *  Yellow message with "Busy" as the default title.
 */
export const busy = (
  message: string,
  title = t("Busy"),
  color = "yellow",
  idPrefix = "",
) =>
  createToast(message, title, color, idPrefix);

/**
 *  Dark blue message with "Did you know?" as the default title.
 */
export const fun = (
  message: string,
  title = t("Did you know?"),
  color = "dark-blue",
  idPrefix = "",
) =>
  createToast(message, title, color, idPrefix);

/**
 *  Adds a hidden container div for holding toast messages.
 */
export const init = () => {
  const toastContainer = document.createElement("div");
  toastContainer.classList.add("toast-container");
  document.body.appendChild(toastContainer);
};

/** Remove all toast messages that match the provided id prefix. */
export const removeToast = (idPrefix: string) => {
  const parent = document.querySelector(".toast-container");
  const toasts = document.querySelectorAll(`[id^="${idPrefix}-"]`);
  if (parent) {
    Object.values(toasts).map(toast => parent.removeChild(toast));
  } else {
    console.error("toast-container is null.");
  }
};
