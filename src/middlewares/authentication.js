export default function (req, res, next) {
  // Here would be the authentication logic sits, which depends on what kind of authorization
  // services do we use, for example some SSO, OAuth, JWT-based, etc.
  next();
}
