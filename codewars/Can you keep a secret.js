function createSecretHolder(secret) {
  // let value = secret;

  return {
    getSecret() {
      return secret;
    },
    setSecret(n) {
      secret = n;
    }
  };
}

obj = createSecretHolder(5);
console.log(obj.getSecret()); // returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // returns 2