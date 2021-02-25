import App from "./app";

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-root");
  if (el) {
    mount(el);
  }
}

export default function mount(el) {
  el.innerHTML = App;
}
