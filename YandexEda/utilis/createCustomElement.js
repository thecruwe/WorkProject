export default (
    {
        tag = "div", 
        classes = "",
        text = "",
        append = {},
        attributes = {},
    }
    ) => {
    const element = document.createElement(tag);
    if (classes) {
        element.classList.add(classes);
    };

    if (text) {
        element.innerHTML = text;
    };

    const attributesKeys = Object.keys(attributes);

    if (attributesKeys.length) {
        attributesKeys.forEach((item) => {
            element.setAttribute(item, attributes[item]);
        })
    };
    return element;
};