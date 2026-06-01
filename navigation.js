// =====================================
// CISA NAVIGATION
// =====================================

const navigationData = {

    "Domain 1 - Information System Auditing Process": [

        {
            title: "1.1 IS Audit Standards",
            page: 31
        },

        {
            title: "1.2 Types of Audits",
            page: 34
        },

        {
            title: "1.3 Risk-Based Audit Planning",
            page: 38
        },

        {
            title: "1.4 Types of Controls",
            page: 43
        },

        {
            title: "1.5 Audit Project Management",
            page: 53
        },

        {
            title: "1.6 Audit Testing and Sampling",
            page: 60
        },

        {
            title: "1.7 Audit Evidence Collection",
            page: 63
        },

        {
            title: "1.8 Audit Data Analytics",
            page: 66
        },

        {
            title: "1.9 Reporting and Communication",
            page: 73
        }

    ],

    "Domain 2 - Governance and Management of IT": [],

    "Domain 3 - Information Systems Acquisition, Development and Implementation": [],

    "Domain 4 - Information Systems Operations and Business Resilience": [],

    "Domain 5 - Protection of Information Assets": []

};

// =====================================
// RENDER
// =====================================

function renderNavigation() {

    const nav =
        document.getElementById(
            "navigation"
        );

    if (!nav) return;

    nav.innerHTML = "";

    Object.keys(navigationData)
        .forEach(domain => {

        const domainDiv =
            document.createElement("div");

        domainDiv.className =
            "domain";

        domainDiv.textContent =
            domain;

        nav.appendChild(
            domainDiv
        );

        navigationData[domain]
            .forEach(item => {

            const topicDiv =
                document.createElement("div");

            topicDiv.className =
                "topic";

            topicDiv.textContent =
                item.title;

            topicDiv.onclick =
                () => {

                if (
                    typeof goToPdfPage ===
                    "function"
                ) {

                    goToPdfPage(
                        item.page
                    );

                }

            };

            nav.appendChild(
                topicDiv
            );

        });

    });

}

window.renderNavigation =
    renderNavigation;
