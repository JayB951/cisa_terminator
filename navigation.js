const navigationData = {

    "Domain 1":[
        {
            title:"1.1 IS Audit Standards",
            page:31
        },
        {
            title:"1.2 Types of Audits",
            page:34
        },
        {
            title:"1.3 Risk-Based Audit Planning",
            page:38
        }
    ],

    "Domain 2":[],
    "Domain 3":[],
    "Domain 4":[],
    "Domain 5":[]
};

function renderNavigation(){

    const nav =
        document.getElementById(
            "navigation"
        );

    nav.innerHTML = "";

    Object.keys(
        navigationData
    ).forEach(domain=>{

        const d =
            document.createElement("div");

        d.innerHTML =
            `<b>${domain}</b>`;

        nav.appendChild(d);

        navigationData[domain]
        .forEach(item=>{

            const t =
                document.createElement("div");

            t.style.marginLeft =
                "20px";

            t.innerText =
                item.title;

            t.onclick =
                ()=>goToPdfPage(
                    item.page
                );

            nav.appendChild(t);

        });

    });

}
