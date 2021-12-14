function nicknameGenerator(name) {
  if (name.length < 4) return 'Error: Name too short';

  if (name[2] !== 'a' && name[2] !== 'e' && name[2] !== 'i' && name[2] !== 'o' && name[2] !== 'u')
    return name.slice(0, 3);
  else
    return name.slice(0, 4);
}