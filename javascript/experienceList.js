const experiencesList = [
    {
        cargo: "Estagiário de TI ",
        empresa: "Do Analytics",
        local: "São Paulo - SP",
        tempo: "Setembro 2024 - Atual ",
        atividades: ["Criação de layouts para dashboards em Power BI - Figma", "Criação de Interfaces para páginas e aplicativos Web - Figma", "Criação de features a atualização de páginas no portal - js, html e css", "Desenvolvimento FrontEnd  - js, html e css"]
    },
    {
        cargo: "Programador Júnior ",
        empresa: "Construtivo.com do Brasil",
        local: "São Paulo - SP",
        tempo: "Janeiro 2024 - Fevereiro 2024 ",
        atividades: ["Uso da biblioteca Joint.js para criação de visualizadores de Workflow - js, html e css", "Criação de templates para documentos - js, html e css ", "Correção de bugs na plataforma colaborativo - js, html e css"]
    },
    {
        cargo: "Designer Gráfico",
        empresa: "Freelancer",
        local: "Taboão da Serra - SP",
        tempo: "Agosto 2019 - Julho 2023 ",
        atividades: ["Criação de Identidades Visuais", "Criação de apresentações de projetos.", "Edição de vídeo e motion design."]
    },
    {
        cargo: "Editor de Vídeos ",
        empresa: "UniFECAF",
        local: "Taboão da Serra - SP",
        tempo: "Abril 2019 - Julho 2023 ",
        atividades: ["Edição de videoaulas de graduação, pós-graduação e cursos livres.", "Filmagem e decupagem de videoaulas ", "Pesquisa de imagens, vídeos e conteúdos em bancos de dados"]
    }
]

const experiencesDiv = document.getElementById('experiences-list')

document.addEventListener('DOMContentLoaded', (event) => {
    experiencesList.map(experience => {
        let experienceDiv = document.createElement('div')
        experienceDiv.classList.add('experience-div')

        let experienceTitle = document.createElement('h3')
        experienceTitle.innerText = experience.cargo

        experienceDiv.appendChild(experienceTitle)

        let experienceStatus = document.createElement('p')
        experienceStatus.classList.add('experience-firm')
        experienceStatus.innerText = experience.empresa

        experienceDiv.appendChild(experienceStatus)

        let experienceDescription = document.createElement('p')
        experienceDescription.classList.add('experience-period')
        experienceDescription.innerText = experience.tempo

        experienceDiv.appendChild(experienceDescription)

        let experienceTasks = document.createElement('ul')
        experienceTasks.classList.add('experience-ul')

        experience.atividades.forEach(atividade => {
            let task = document.createElement('li')
            task.innerText = atividade

            experienceTasks.appendChild(task)
        })


        experienceDiv.appendChild(experienceTasks)
        experiencesDiv.appendChild(experienceDiv)


    })
})




