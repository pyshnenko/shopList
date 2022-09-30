function test(){
    listData[setList].check.push(false);
    listData[setList].name.push('aaa');
    listData[setList].total.push(3);
    listData[setList].posTotal+=1;
}

let listData = [{
    listName: 'Список покупок 1',
    users: ['spamigor','testUser'],
    check: [false, false],
    name: ['Название', 'арбуз'],
    total: [0,1],
    posTotal: 1,
    valBuf: 0,
    author: 'Spamigor'
}]

let setList = 0;
let users = {
    look: false,
    num: -1, 
    add: false
};
let menu = true;

function supTest(buf) {
    users.add=false;
    users.num = (-1);
    if (buf==='menu') {
        users.look=false;
        menu=true;
    }
    else {
        users.look=!users.look;
    }

}

function addList(user) {
    let pos = listData.length;
    let buflist = {
        listName: `Список покупок ${pos+1}`,
        users: [user],
        check: [false],
        name: ['Название'],
        total: [0],
        posTotal: 0,
        valBuf: 0,
        author: user
    }
    //listData.push(buflist);
    return buflist;
}