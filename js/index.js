const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");
const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");

//Get id from URL
const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

//Get all posts
async function getAllPosts() {
    //Esperando resposta da api
    const response = await fetch(url);

    //Convertendo os dados da api em objeto json
    const data = await response.json();

    //Escondendo o carregando
    loadingElement.classList.add("hide");

    //A função map vai fazer com que se passe por cada um dos elementos obtidos na requisição
    data.map((post) =>{

        //Criando os elementos html 
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        //Modificando o texto do elementos
        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "Ler";

        //Inserindo o atributo href no elemento link e passando a url da pagina post.html e o id da api
        link.setAttribute("href", `/post.html?id=${post.id}`);

        //Inserindo todos os elementos na div
        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        //Inserindo a div criada na div posts container
        postsContainer.appendChild(div);
    })
}

// Get individual post
async function getPost(id){



}

if(!postId)
    getAllPosts();
else
    console.log(postId);