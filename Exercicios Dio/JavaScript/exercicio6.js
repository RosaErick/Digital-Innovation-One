function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value == 'Admin') {
            admins.push(key)

        }

}

    return admins;
}

const usuarios = new Map();

usuarios.set('Rogerin', 'Admin');
usuarios.set('Navegantes', 'Admin');
usuarios.set('Joãozinho', 'User');
usuarios.set('Carlinhos', 'User');
usuarios.set('Pedro', 'Admin');

console.log(getAdmins(usuarios));