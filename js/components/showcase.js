

function Showcase() {
    return html`
        <section>
            <h1 class="heading">${localize.NAV_SHOWCASE}</h1>

            <div id="projects">
                ${Project({
                    image: 'assets/showcase/lanparty.png',
                    tags: ['Node.js', 'Vanilla JS'],
                    title: 'Lan Party',
                    description: `A very simple site that was used as the landing page for my high school's annual LAN Party event in 2020.`
                })}
                
                ${Project({
                    image: 'assets/showcase/pud.png',
                    title: 'PUD',
                    tags: ['Node.js', 'React'],
                    description: `The digital solution to my schools problem of physical documents. Allows students to upload various
                    documents that the school can then easily view and provide feedback directly to the student in a quick manner.`
                })}

                ${Project({
                    image: 'assets/showcase/lanparty.png',
                    tags: ['Node.js', 'Vanilla JS'],
                    title: 'Lan Party',
                    description: `A very simple site that was used as the landing page for my high school's annual LAN Party event in 2020.`
                })}
                
                ${Project({
                    image: 'assets/showcase/pud.png',
                    title: 'PUD',
                    tags: ['Node.js', 'React'],
                    description: `The digital solution to my schools problem of physical documents. Allows students to upload various
                    documents that the school can then easily view and provide feedback directly to the student in a quick manner.`
                })}

                </div>

        </section>
    `
}


function Project({image, title, tags = [], description}) {

    let tagsRow = Tags(tags);

    return html`
        <div class="project" >
            <!-- <div class="project__image" > -->
                <img src="${image}"  width="320"  />
            <!-- </div> -->


            <div class="project__data" >
                <div class="projectTitle" > 
                    
                    <div class="projectTitleLabel">
                        ${title}
                    </div>

                    <div>
                        ${tagsRow}
                    </div>
                
                </div>
                
                <p class="projectDescription" > ${description} </p>
            </div>
        </div>
`   
}


function Tag(title) {
    return html`<div class="tag" > ${title} </div>`
}

function Tags(tags) {
    return html`
        <div class="tags" >
            ${tags.map(tag => Tag(tag)).join('')}
        </div>
    `
}