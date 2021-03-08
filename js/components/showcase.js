

function Showcase() {

    const tags = {
        node: localize['TAG_NODEJS'],
        vanillaJs: localize['TAG_VANILLAJS'],

        ts: localize['TAG_TS'],

        react: localize['TAG_REACT'],
        mui: localize['TAG_MUI'],
    }

    return html`
        <section>
            <h1 class="heading">${localize.NAV_SHOWCASE}</h1>

            <div id="projects">
                ${Project({
                    image: 'assets/showcase/lanparty.png',
                    tags: [tags.node, tags.vanillaJs],
                    title: 'Lan Party',
                    description: localize['SHOWCASE_LP_DESC']
                })}
                
                ${Project({
                    image: 'assets/showcase/pud.png',
                    title: 'PUD',
                    tags: [tags.node, tags.react, tags.mui],
                    description: localize['SHOWCASE_PUD_DESC']
                })}

                ${Project({
                    image: 'assets/showcase/bunker.png',
                    tags: [tags.vanillaJs],
                    title: 'Bunker',
                    description: localize['SHOWCASE_BUNKER_DESC']
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
                <img src="${image}"  width="270"  />
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