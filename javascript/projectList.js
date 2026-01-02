const projectsList = [
    {
        title: 'Meu Portfólio',
        slug: 'meu-portfolio',
        status: 'Em Andamento',
        description: 'O portfólio que você está vendo :D',
        links: {
            site: 'https://salanmato.vercel.app/',
            github: 'https://github.com/salanmato/myportfolio'
        },
        tags: ["React", 'JavaScript', 'HTML', 'CSS']
    },
    {
        title: 'Visual Project Generator',
        slug: 'visual-project-generator',
        status: 'Completo',
        description: 'Te ajuda com ideias bases para diversas áreas visuais (vídeo, design, desenho, etc).',
        links: {
            site: 'https://visual-project-generator.vercel.app/',
            github: 'https://github.com/salanmato/project-generator'
        },
        tags: ['JavaScript', 'HTML', 'CSS']
    },
    {
        title: '5movies',
        slug: '5movies',
        status: 'Concluído',
        image: '5movies',
        description: 'Aplicativo que te ajuda a escolher um filme.\nVocê escolhe um  ator/diretor/produtor ou filme, e ele te retorna 5 filmes relacionados a sua busca.',
        links: {
            site: 'https://5movies.vercel.app/',
            github: 'https://github.com/salanmato/5movies'
        },
        tags: ['React.JS', 'JavaScript', 'HTML', 'CSS', 'UI']
    },
    {
        title: 'researchbc',
        slug: 'researchbc',
        status: 'Concluído',
        image: 'researchbc',
        description: 'Aplicativo desenvolvido como trabalho para a disciplina Data Center.\n A proposta era criar algo que alimentasse e consumisse um banco de dados no servidor.\n Utilizamos JavaScript, HTML e CSS para construir uma página contendo um formulário, um gráfico para visualização rápida das respostas e uma tabela com todas as respostas. Para comunicação com o banco de dados MySQL, no BackEnd usamos Node.js + Express. E no FrontEnd, utilizamos JavaScript, HTML e CSS',
        links: {
            github: 'https://github.com/salanmato/researchbc'
        },
        tags: ['JavaScript', 'HTML', 'CSS', 'UI', 'MySQL', 'Node.js', 'Express.js']
    }
]

const projectsDiv = document.getElementById('projects-list')

document.addEventListener('DOMContentLoaded', (event) => {
    console.log(1)
    projectsList.map(project => {
        let projectDiv = document.createElement('div')
        projectDiv.classList.add('project-div')

        let projectTitle = document.createElement('h3')
        projectTitle.innerText = project.title

        projectDiv.appendChild(projectTitle)

        let projectStatus = document.createElement('p')
        projectStatus.classList.add('project-status')
        projectStatus.innerText = project.status

        projectDiv.appendChild(projectStatus)

        let projectDescription = document.createElement('p')
        projectDescription.classList.add('project-description')
        projectDescription.innerText = project.description

        projectDiv.appendChild(projectDescription)

        if(project.links.github){
            let projectGithub = document.createElement('a')
            projectGithub.classList.add('project-links')
            projectGithub.innerText = project.links.github
            projectGithub.href = project.links.github

            projectDiv.appendChild(projectGithub)
        }

        if(project.links.site){
            let projectSite = document.createElement('a')
            projectSite.classList.add('project-links')
            projectSite.innerText = project.links.site
            projectSite.href = project.links.site

            projectDiv.appendChild(projectSite)
        }

        projectsDiv.appendChild(projectDiv)

    })
})




