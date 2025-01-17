function Greetings({ lang, children }) {
  let message;

  switch (lang) {
    case "de":
      message = "Hallo";
      break;
    case "en":
      message = "Hello";
      break;
    case "es":
      message = "Hola";
      break;
    case "fr":
      message = "Bonjour";
  }

  return (
    <p>{message} {children}</p>
  );
}

export default Greetings;
