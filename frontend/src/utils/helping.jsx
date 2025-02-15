export const nameInitial=(name)=>{
  let words = name.split(" ");
  let initials = "";
  for (let i = 0; i < Math.min(words.length,2); i++) {
    initials += words[i][0];
  }
  initials=initials.toUpperCase()
  return initials;
}

export const capitalize=(val)=> {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
