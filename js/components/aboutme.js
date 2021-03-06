

function AboutMe() {
    return html`
        <section>
            <h1 class="heading">${localize.NAV_ABOUTME}</h1>

            <article id="aboutme_container"  >

                <div id="aboutme_img_parent">
                    <img width="230"  src="/assets/me_large.JPG" />
                </div>

                <div style="flex: 1;"  >
                    <p>${localize.ME_P1}</p>
                    <p>${localize.ME_P2}</p>
                    <p>${localize.ME_P3}</p>
                </div>
            </article>
        </section>
    `
}