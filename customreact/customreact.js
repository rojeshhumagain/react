function customRender(reactElement, container) {
    // 1. Create DOM element
    const domElement = document.createElement(reactElement.type);

    // 2. Handle props (attributes + events)
    for (const prop in reactElement.props) {
        if (prop.startsWith("on")) {
            // Handle events like onClick
            const eventName = prop.toLowerCase().substring(2);
            domElement.addEventListener(eventName, reactElement.props[prop]);
        } else {
            // Handle normal attributes
            domElement.setAttribute(prop, reactElement.props[prop]);
        }
    }

    // 3. Handle children
    if (typeof reactElement.children === "string") {
        domElement.textContent = reactElement.children;
    } else if (Array.isArray(reactElement.children)) {
        reactElement.children.forEach(child => {
            customRender(child, domElement);
        });
    }

    // 4. Append to container
    container.appendChild(domElement);
}

// React-like element
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
        onClick: () => alert("Redirecting to Google")
    },
    children: "Click me to visit Google"
};

// Root container
const mainContainer = document.querySelector("#root");

// Render element
customRender(reactElement, mainContainer);
