function namify(users) {
  return users.reduce((names, obj) => { 
    names.push(obj.name); 
    return names; 
  }, []);
}
