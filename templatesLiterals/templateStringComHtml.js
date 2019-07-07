const article = {

    title: 'Aprendendo template Strings',

    intro: 'Uma breve explicaçao de como se utiliz Strings do ES6',

    body: 'Lorem ipsum',

    tags: ['es6', 'js', 'template-literal'],

    author: 'Gabriel'

};

    function renderAuthor(name){

        return(name) ? name : 'Desconhecido';

    }
    
const markup =`
    <article>
        <header>

            <h1>${article.title}</h1>
        </header>

        <section>
            <p>${article.intro}</p>
        </section>
        <footer>
            <ul>
                ${article.tags.map((tag) =>{

                `<li>
                    
                ${tag}

                </li>`).join('')

                }) 
            }
            </ul>
            <p>Author: ${renderAuthor(article.author)} </p>
        </footer>
 </article>
`;

document.body.innerHTML = markup;