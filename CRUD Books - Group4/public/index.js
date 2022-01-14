display();

function insert() {
    let id = document.getElementById("book's id").value.trim();
    let name = document.getElementById("book's name").value.trim();
    let author = document.getElementById("book's author").value.trim();
    let category = document.getElementById("book's category").value.trim();
    if (id.length != 0 && name.length != 0 && category.length != 0 && author.length != 0) {
        fetch("http://localhost:3000/books").then(
            res => {
                res.json().then(data => {
                    data.forEach((d) => {
                        if (d.id == id) {
                            alert("The ID is already existed!");
                        }
                    })
                    var books = {
                        "id": id.trim(),
                        "name": name,
                        "Author": author,
                        "Category": category,
                    }

                    fetch("http://localhost:3000/books", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(books)
                    })
                })
            }
        )


    } else {
        alert("Fields cannot be empty!")
    }

}

function display() {
    fetch("http://localhost:3000/books").then(
        res => {
            res.json().then(
                data => {
                    console.log(data)
                    if (data.length > 0) {
                        var temp = "";
                        data.forEach((d) => {
                            temp += "<tr>";
                            temp += "<td>" + d.id + "</td>";
                            temp += "<td>" + d.name + "</td>";;
                            temp += "<td>" + d.Author + "</td>";;
                            temp += "<td>" + d.Category + "</td></tr>";;
                        })

                        document.getElementById("table").innerHTML = temp;
                    }
                }
            )
        }
    )
}


function deleteRecord() {
    let id = document.getElementById("book's id").value;
    if (id.length != 0) {
        fetch("http://localhost:3000/books/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },

        })
    } else {
        let result = confirm("Are you sure you want to delete all the records?")
        if (result) {
            fetch("http://localhost:3000/books").then(
                res => {
                    res.json().then(
                        data => {
                            for (let i = 0; i < data.length; i++) {
                                fetch("http://localhost:3000/books/" + data[i].id, {
                                    method: "DELETE",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(data)
                                })
                            }
                        }
                    )
                }
            )
        }
    }
}


function editRecord() {
    let newId = document.getElementById("book's id").value
    if (newId.length != 0) {
        fetch("http://localhost:3000/books/" + newId).then((res) => {
            res.json().then((data) => {
                var newName = document.getElementById("book's name").value;
                var newAuthor = document.getElementById("book's author").value;
                var newCategory = document.getElementById("book's category").value;
                if (newName != '' && newAuthor != '' && newCategory != '') {
                    let books = {
                        id: newId,
                        name: newName,
                        Author: newAuthor,
                        Category: newCategory,
                    }
                    fetch("http://localhost:3000/books/" + newId, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },

                        body: JSON.stringify(books),
                    }).then((data) => {
                        console.log(data);
                    })
                }
                // Knowing 1 information, Modifing 2 info
                else if (newName != '' && newAuthor == '' && newCategory == '') {
                    let books = {
                        id: newId,
                        name: newName,
                        Author: data.Author,
                        Category: data.Category,
                    }
                    fetch("http://localhost:3000/books/" + newId, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },

                        body: JSON.stringify(books),
                    }).then((data) => {
                        console.log(data);
                    })
                } else if (newName == '' && newAuthor != '' && newCategory == '') {
                    let books = {
                        id: newId,
                        name: data.name,
                        Author: newAuthor,
                        Category: data.Category,
                    }
                    fetch("http://localhost:3000/books/" + newId, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },

                        body: JSON.stringify(books),
                    }).then((data) => {
                        console.log(data);
                    })
                } else if (newName == '' && newAuthor == '' && newCategory != '') {
                    let books = {
                        id: newId,
                        name: data.name,
                        Author: data.Author,
                        Category: newCategory,
                    }
                    fetch("http://localhost:3000/books/" + newId, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },

                        body: JSON.stringify(books),
                    }).then((data) => {
                        console.log(data);
                    })
                }
                // Knowing 2 Information, Modify 1 info
                else if (newName == '' && newAuthor != '' && newCategory != '') {
                    let books = {
                        id: newId,
                        name: data.name,
                        Author: newAuthor,
                        Category: newCategory,
                    }
                    fetch("http://localhost:3000/books/" + newId, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },

                        body: JSON.stringify(books),
                    }).then((data) => {
                        console.log(data);
                    })
                } else if (newName != '' && newAuthor == '' && newCategory != '') {
                    let books = {
                        id: newId,
                        name: newName,
                        Author: data.Author,
                        Category: newCategory,
                    }
                    fetch("http://localhost:3000/books/" + newId, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },

                        body: JSON.stringify(books),
                    }).then((data) => {
                        console.log(data);
                    })
                } else if (newName != '' && newAuthor != '' && newCategory == '') {
                    let books = {
                        id: newId,
                        name: newName,
                        Author: newAuthor,
                        Category: data.Category,
                    }
                    fetch("http://localhost:3000/books/" + newId, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },

                        body: JSON.stringify(books),
                    }).then((data) => {
                        console.log(data);
                    })
                }
            })
        })
    } else {
        alert("Please make it clear!")
    }

}

function findRecord() {
    let id = document.getElementById("book's id").value
    let name = document.getElementById("book's name").value
    let author = document.getElementById("book's author").value
    let category = document.getElementById("book's category").value
    if (id.length != 0 && name.length == 0 && author.length == 0 && category.length == 0) {
        fetch("http://localhost:3000/books/" + id).then((data) => {
            data.json().then((d) => {
                var temp = "";
                if (d.id != undefined) {
                    temp += "<tr>";
                    temp += "<td>" + d.id + "</td>";
                    temp += "<td>" + d.name + "</td>";
                    temp += "<td>" + d.Author + "</td>";
                    temp += "<td>" + d.Category + "</td></tr>";
                    document.getElementById("table").innerHTML = temp;
                } else {
                    alert("The information you are searching for does not exist! ")
                }
            })
        })
    } else if (id.length == 0 && name.length != 0 && author.length == 0 && category.length == 0) {
        fetch("http://localhost:3000/books?name=" + name).then((data) => {
            data.json().then((d) => {

                if (d[0] != undefined) {
                    var temp = ""
                    for (var i = 0; i < d.length; i++) {
                        temp += "<tr>"
                        temp += "<td>" + d[i]["id"] + "</td>";
                        temp += "<td>" + d[i]["name"] + "</td>";
                        temp += "<td>" + d[i]["Author"] + "</td>";
                        temp += "<td>" + d[i]["Category"] + "</td>";

                        temp += "</tr>"
                    }
                    document.getElementById("table").innerHTML = temp;
                } else {
                    alert("The information you are searching for does not exist! ")
                }

            })

        })

    } else if (id.length == 0 && name.length == 0 && author.length != 0 && category.length == 0) {
        fetch("http://localhost:3000/books?Author=" + author).then((data) => {
            data.json().then((d) => {
                if (d[0] != undefined) {
                    var temp = ""
                    for (var i = 0; i < d.length; i++) {
                        temp += "<tr>"
                        temp += "<td>" + d[i]["id"] + "</td>";
                        temp += "<td>" + d[i]["name"] + "</td>";
                        temp += "<td>" + d[i]["Author"] + "</td>";
                        temp += "<td>" + d[i]["Category"] + "</td>";

                        temp += "</tr>"
                    }
                    document.getElementById("table").innerHTML = temp;
                } else {
                    alert("The information you are searching for does not exist! ")
                }
            })

        })

    } else if (id.length == 0 && name.length == 0 && author.length == 0 && category.length != 0) {
        fetch("http://localhost:3000/books?Category=" + category).then((data) => {
            data.json().then((d) => {
                if (d[0] != undefined) {
                    var temp = ""
                    for (var i = 0; i < d.length; i++) {
                        temp += "<tr>"
                        temp += "<td>" + d[i]["id"] + "</td>";
                        temp += "<td>" + d[i]["name"] + "</td>";
                        temp += "<td>" + d[i]["Author"] + "</td>";
                        temp += "<td>" + d[i]["Category"] + "</td>";

                        temp += "</tr>"
                    }
                    document.getElementById("table").innerHTML = temp;
                } else {
                    alert("The information you are searching for does not exist! ")
                }

            })

        })

    } else {
        alert("Please make it clear")
    }

}

function refreshRecord() {
    fetch("http://localhost:3000/books").then((data) => {
        data.json().then((d) => {
            var temp = ""
            d.forEach((info) => {
                temp += "<tr>";
                temp += "<td>" + info.id + "</td>";
                temp += "<td>" + info.name + "</td>";
                temp += "<td>" + info.Author + "</td>";
                temp += "<td>" + info.Category + "</td>";
                temp += "</tr>";
            });
            document.getElementById("table").innerHTML = temp;

        })
    })
}

fetch("http://localhost:3000/books").then((data) => {
    data.json().then((d) => {

        var temp = ""
        for (var i = 0; i < d.length; i++) {
            temp += "<tr>"
            temp += "<td>" + d[i]["id"] + "</td>";
            temp += "<td>" + d[i]["name"] + "</td>";
            temp += "<td>" + d[i]["Author"] + "</td>";
            temp += "<td>" + d[i]["Category"] + "</td>";

            temp += "</tr>"
        }
        document.getElementById("table").innerHTML = temp;
    })
})