document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("current-year");
    yearSpan.textContent = new Date().getFullYear();

    const departments = [
        {
            name: "Administration",
            employees: [
                { firstName: "Zoë", lastName: "Robins" },
                { firstName: "Madeleine", lastName: "Madden" },
            ],
        },
        {
            name: "Audit",
            employees: [
                { firstName: "Josha", lastName: "Sadowski" },
                { firstName: "Kate", lastName: "Fleetwood" },
            ],
        },
        {
            name: "Banking Operations",
            employees: [
                { firstName: "Priyanka", lastName: "Bose" },
                { firstName: "Hammed", lastName: "Animashaun" },
                { firstName: "Álvaro", lastName: "Morte" },
                { firstName: "Taylor", lastName: "Napier" },
                { firstName: "Alan", lastName: "Simmonds" },
            ],
        },
        {
            name: "Communications",
            employees: [
                { firstName: "Gil", lastName: "Cardinal" },
                { firstName: "Richard J.", lastName: "Lewis" },
            ],
        },
        {
            name: "Corporate Services",
            employees: [
                { firstName: "Randy", lastName: "Bradshaw" },
                { firstName: "Tracey", lastName: "Cook" },
                { firstName: "Lubomir", lastName: "Mykytiuk" },
            ],
        },
        {
            name: "Facilities",
            employees: [
                { firstName: "Dakota", lastName: "House" },
                { firstName: "Lori Lea", lastName: "Okemah" },
                { firstName: "Renae", lastName: "Morrisseau" },
                { firstName: "Rick", lastName: "Belcourt" },
            ],
        },
        {
            name: "Financial Services",
            employees: [
                { firstName: "Selina", lastName: "Hanusa" },
                { firstName: "Buffy", lastName: "Gaudry" },
                { firstName: "Shaneen Ann", lastName: "Fox" },
                { firstName: "Allan", lastName: "Little" },
                { firstName: "Danny", lastName: "Rabbit" },
            ],
        },
        {
            name: "Human Resources",
            employees: [
                { firstName: "Jesse Ed", lastName: "Azure" },
                { firstName: "Stacy", lastName: "Da Silva" },
                { firstName: "Vladimír", lastName: "Valenta" },
                { firstName: "Samone", lastName: "Sayeses-Whitney" },
                { firstName: "Paul", lastName: "Coeur" },
            ],
        },
        {
            name: "Information Technology",
            employees: [
                { firstName: "Graham", lastName: "Greene" },
                { firstName: "Sandika", lastName: "Evergreen" },
                { firstName: "Jennifer", lastName: "Rodriguez" }, // 已去掉括号注释
            ],
        },
        {
            name: "IT Technician",
            employees: [
                { firstName: "Aiyana", lastName: "Littlebear" },
                { firstName: "Inara", lastName: "Thunderbird" },
                { firstName: "Kaya", lastName: "Runningbrook" },
                { firstName: "Elara", lastName: "Firehawk" },
                { firstName: "Siona", lastName: "Moonflower" },
                { firstName: "Kaiyu", lastName: "Greywolf" },
                { firstName: "Ayawamat", lastName: "Nightwind" },
                { firstName: "Tala", lastName: "Braveheart" },
                { firstName: "Iniko", lastName: "Stonebear" },
                { firstName: "Onatah", lastName: "Redhawk" },
            ],
        },
    ];

    const container = document.getElementById("employee-container");

    departments.forEach((dept) => {
        const section = document.createElement("section");
        section.className = "department-section";

        const h2 = document.createElement("h2");
        h2.textContent = dept.name;
        section.appendChild(h2);

        const ul = document.createElement("ul");
        dept.employees.forEach((emp) => {
            const li = document.createElement("li");
            li.textContent = `${emp.firstName} ${emp.lastName || ""}`;
            ul.appendChild(li);
        });

        section.appendChild(ul);
        container.appendChild(section);
    });
});
